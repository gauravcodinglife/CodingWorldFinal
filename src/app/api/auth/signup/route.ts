import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectDB } from "@/lib/mongodb";
import User from "@/models/User";
import { signToken, COOKIE_NAME, DEFAULT_COURSES } from "@/lib/auth";

export async function POST(req: NextRequest) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }
    if (password.length < 6) {
      return NextResponse.json({ error: "Password must be at least 6 characters." }, { status: 400 });
    }

    await connectDB();

    const existing = await User.findOne({ email: email.toLowerCase() });
    if (existing) {
      return NextResponse.json({ error: "An account with this email already exists." }, { status: 409 });
    }

    const hashed = await bcrypt.hash(password, 12);
    const username = email.split("@")[0].toLowerCase().replace(/[^a-z0-9]/g, "");

    const user = await User.create({
      displayName: name,
      username,
      email: email.toLowerCase(),
      password: hashed,
      courses: DEFAULT_COURSES,
    });

    const token = signToken({ userId: user._id.toString(), email: user.email });

    const res = NextResponse.json({
      user: {
        id: user._id.toString(),
        displayName: user.displayName,
        username: user.username,
        email: user.email,
      },
    });
    res.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 7, // 7 days
      path: "/",
    });
    return res;
  } catch (err: any) {
    console.error("[signup]", err);
    return NextResponse.json({ error: "Sign up failed. Please try again." }, { status: 500 });
  }
}
