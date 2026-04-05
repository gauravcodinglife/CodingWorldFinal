import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getTokenPayload } from "@/lib/auth";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { courseId } = await params;

    await connectDB();
    const user = await User.findById(payload.userId).select("courses");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const course = user.courses.find((c) => c.id === courseId);
    if (!course) return NextResponse.json({ completedLessonIds: [] });

    return NextResponse.json({
      completedLessonIds: course.completedLessonIds ?? [],
      completedLessons: course.completedLessons,
      totalLessons: course.totalLessons,
      status: course.status,
    });
  } catch (err) {
    console.error("[courses/courseId GET]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
