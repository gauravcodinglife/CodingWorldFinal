import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getTokenPayload } from "@/lib/auth";
import { format } from "date-fns";

export async function GET() {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await connectDB();
    const user = await User.findById(payload.userId).select(
      "displayName username email bio joinedAt streak maxStreak activeDays totalHours"
    );
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({
      profile: {
        uid: user._id.toString(),
        displayName: user.displayName,
        username: user.username,
        email: user.email,
        bio: user.bio,
        joinedAt: format(new Date(user.joinedAt), "MMM yyyy"),
        streak: user.streak,
        maxStreak: user.maxStreak,
        activeDays: user.activeDays,
        totalHours: user.totalHours,
        badgesEarned: 0, // computed on client from profile stats
      },
    });
  } catch (err) {
    console.error("[profile GET]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
