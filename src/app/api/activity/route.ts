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
    const user = await User.findById(payload.userId).select("activity");
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ activity: user.activity });
  } catch (err) {
    console.error("[activity GET]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

export async function POST() {
  try {
    const payload = await getTokenPayload();
    if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const today = format(new Date(), "yyyy-MM-dd");

    await connectDB();
    const user = await User.findById(payload.userId);
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const existing = user.activity.find((a) => a.date === today);
    if (existing) {
      existing.count += 1;
    } else {
      user.activity.push({ date: today, count: 1 });
      user.activeDays += 1;
    }

    await user.save();
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[activity POST]", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
