import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getTokenPayload, DEFAULT_COURSES } from "@/lib/auth";
import { formatDistanceToNow } from "date-fns";

function accessLabel(date: Date | null): string {
  if (!date) return "Not started";
  return formatDistanceToNow(new Date(date), { addSuffix: true });
}

export async function GET() {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const user = await User.findById(payload.userId).select("courses");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    // Auto-sync: Add any missing courses from DEFAULT_COURSES
    let coursesUpdated = false;
    for (const defaultCourse of DEFAULT_COURSES) {
      const exists = user.courses.find((c) => c.id === defaultCourse.id);
      if (!exists) {
        user.courses.push(defaultCourse);
        coursesUpdated = true;
      }
    }
    if (coursesUpdated) {
      await user.save();
    }

    const courses = user.courses.map((c) => ({
      id: c.id,
      completedLessons: c.completedLessons,
      totalLessons: c.totalLessons,
      completedModules: c.completedModules,
      totalModules: c.totalModules,
      status: c.status,
      lastAccessed: accessLabel(c.lastAccessed),
    }));

    return NextResponse.json({ courses });
  } catch (err) {
    console.error("[courses GET]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function PATCH(req: Request) {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { courseId, completedLessons, completedModules } = await req.json();

    await connectDB();
    const user = await User.findById(payload.userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const course = user.courses.find((c) => c.id === courseId);
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

    course.completedLessons = completedLessons;
    course.completedModules = completedModules;
    course.lastAccessed = new Date();
    course.status =
      completedLessons >= course.totalLessons ? "Completed" :
      completedLessons > 0 ? "In progress" : "Not started";

    await user.save();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[courses PATCH]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
