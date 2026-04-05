import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getTokenPayload } from "@/lib/auth";
import { format } from "date-fns";

export async function PATCH(req: NextRequest) {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { courseId, lessonIndex, completed } = await req.json();
    if (typeof courseId !== "string" || typeof lessonIndex !== "number") {
      return NextResponse.json({ error: "Invalid payload" }, { status: 400 });
    }

    await connectDB();
    const user = await User.findById(payload.userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const course = user.courses.find((c) => c.id === courseId);
    if (!course) return NextResponse.json({ error: "Course not found" }, { status: 404 });

    const ids: number[] = course.completedLessonIds ?? [];
    const alreadyDone = ids.includes(lessonIndex);

    if (completed && !alreadyDone) {
      ids.push(lessonIndex);
    } else if (!completed && alreadyDone) {
      const idx = ids.indexOf(lessonIndex);
      ids.splice(idx, 1);
    }

    course.completedLessonIds = ids;
    course.completedLessons = ids.length;
    course.lastAccessed = new Date();
    course.status =
      ids.length >= course.totalLessons ? "Completed" :
      ids.length > 0 ? "In progress" : "Not started";

    // Record today's activity when marking a lesson complete
    if (completed && !alreadyDone) {
      const today = format(new Date(), "yyyy-MM-dd");
      const existing = user.activity.find((a) => a.date === today);
      if (existing) {
        existing.count += 1;
      } else {
        user.activity.push({ date: today, count: 1 });
        user.activeDays += 1;
      }
    }

    await user.save();

    return NextResponse.json({
      completedLessonIds: course.completedLessonIds,
      completedLessons: course.completedLessons,
      status: course.status,
    });
  } catch (err) {
    console.error("[courses/lesson PATCH]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
