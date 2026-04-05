import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { getTokenPayload } from "@/lib/auth";

export async function GET() {
  try {
    const payload = await getTokenPayload();
    if (!payload) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    await connectDB();
    const user = await User.findById(payload.userId).select("displayName username email");
    if (!user) {
      return NextResponse.json({ user: null }, { status: 401 });
    }

    return NextResponse.json({
      user: {
        id: user._id.toString(),
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      },
    });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}
