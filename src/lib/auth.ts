import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import type { CourseProgressDoc } from "@/models/User";

const JWT_SECRET = process.env.JWT_SECRET as string;
const COOKIE_NAME = "cw_token";

export function signToken(payload: { userId: string; email: string }) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

export function verifyToken(token: string): { userId: string; email: string } {
  return jwt.verify(token, JWT_SECRET) as { userId: string; email: string };
}

export async function getTokenPayload() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(COOKIE_NAME)?.value;
    if (!token) return null;
    return verifyToken(token);
  } catch {
    return null;
  }
}

export { COOKIE_NAME };

// ─── Default courses enrolled for every new user ──────────────────────────────

export const DEFAULT_COURSES: CourseProgressDoc[] = [
  { id: "linux",      completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "git",        completedLessons: 0, totalLessons: 5,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "docker",     completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "kubernetes", completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "aws",        completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "gcp",        completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
  { id: "azure",      completedLessons: 0, totalLessons: 7,  completedModules: 0, totalModules: 1,  completedLessonIds: [], status: "Not started", lastAccessed: null },
];
