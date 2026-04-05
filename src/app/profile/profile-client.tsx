"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  BookOpen, Flame, CalendarDays, Trophy, Clock,
  CheckCircle2, Star, TrendingUp, Code2, Layers,
  Shield, Server, GitBranch, Zap, Award, BarChart3,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ActivityCalendar } from "@/components/activity-calendar";
import { CircularProgress } from "@/components/circular-progress";
import { useAuth } from "@/context/auth-context";

type UserProfile = {
  uid: string; displayName: string; username: string; email: string;
  bio: string; joinedAt: string; streak: number; maxStreak: number;
  activeDays: number; totalHours: number; badgesEarned: number;
};
type CourseProgress = {
  id: string; completedLessons: number; totalLessons: number;
  completedModules: number; totalModules: number;
  status: "Not started" | "In progress" | "Completed"; lastAccessed: string;
};
type ActivityEntry = { date: string; count: number };

// ─── Course catalogue meta (static UI data) ──────────────────────────────────

const COURSE_META: Record<string, { title: string; icon: React.ElementType; color: string; category: string; difficulty: string }> = {
  linux:      { title: "Linux Fundamentals",    icon: Server,    color: "#F97316", category: "Fundamentals", difficulty: "Beginner" },
  git:        { title: "Git & GitHub",          icon: GitBranch, color: "#F05032", category: "Fundamentals", difficulty: "Beginner" },
  docker:     { title: "Docker & Containers",    icon: Code2,     color: "#2496ED", category: "Containers",    difficulty: "Beginner" },
  kubernetes: { title: "Kubernetes Mastery",     icon: Code2,     color: "#326CE5", category: "Containers",    difficulty: "Intermediate" },
  aws:        { title: "AWS Cloud Essentials",   icon: Layers,    color: "#FF9900", category: "Cloud",         difficulty: "Beginner" },
  gcp:        { title: "GCP Cloud Platform",     icon: Layers,    color: "#4285F4", category: "Cloud",         difficulty: "Beginner" },
  azure:      { title: "Azure Cloud Platform",   icon: Layers,    color: "#0078D4", category: "Cloud",         difficulty: "Beginner" },
  security:   { title: "Cloud Security",         icon: Shield,    color: "#10B981", category: "Security",      difficulty: "Intermediate" },
  devops:     { title: "DevOps CI/CD Pipeline",  icon: Zap,       color: "#8B5CF6", category: "DevOps",        difficulty: "Intermediate" },
};

const SKILLS_FROM_COURSES: Record<string, { name: string; color: string }[]> = {
  linux:      [{ name: "Linux", color: "#F97316" }, { name: "Shell Scripting", color: "#F59E0B" }],
  git:        [{ name: "Git", color: "#F05032" }, { name: "Version Control", color: "#F59E0B" }],
  docker:     [{ name: "Docker", color: "#2496ED" }, { name: "Containers", color: "#60A5FA" }],
  kubernetes: [{ name: "Kubernetes", color: "#326CE5" }, { name: "Orchestration", color: "#A78BFA" }],
  aws:        [{ name: "AWS", color: "#FF9900" }, { name: "Cloud", color: "#3BBEF7" }],
  gcp:        [{ name: "GCP", color: "#4285F4" }, { name: "Cloud", color: "#3BBEF7" }],
  azure:      [{ name: "Azure", color: "#0078D4" }, { name: "Cloud", color: "#3BBEF7" }],
  security:   [{ name: "Cloud Security", color: "#10B981" }],
  devops:     [{ name: "CI/CD", color: "#8B5CF6" }, { name: "DevOps", color: "#EC4899" }],
};

const BADGES_CONFIG = [
  { name: "First Step",    icon: "🚀", desc: "Completed first lesson",        unlock: (p: UserProfile) => p.activeDays >= 1 },
  { name: "Week Warrior",  icon: "🔥", desc: "7-day streak",                  unlock: (p: UserProfile) => p.maxStreak >= 7 },
  { name: "Night Owl",     icon: "🦉", desc: "Studied after midnight",         unlock: (p: UserProfile) => p.activeDays >= 10 },
  { name: "Cloud Explorer",icon: "☁️", desc: "Started 3 cloud courses",        unlock: (p: UserProfile) => p.activeDays >= 5 },
  { name: "Speed Demon",   icon: "⚡", desc: "Finished module in one session", unlock: (p: UserProfile) => p.totalHours >= 5 },
  { name: "Problem Solver",icon: "🧩", desc: "Completed 10+ lessons",          unlock: (p: UserProfile) => p.totalHours >= 10 },
  { name: "Dedicated",     icon: "🎯", desc: "30+ active days",                unlock: (p: UserProfile) => p.activeDays >= 30 },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────

function computeSkills(courses: CourseProgress[]) {
  const map: Record<string, { name: string; color: string; level: number }> = {};
  courses.forEach((c) => {
    const pct = c.totalLessons > 0 ? Math.round((c.completedLessons / c.totalLessons) * 100) : 0;
    (SKILLS_FROM_COURSES[c.id] ?? []).forEach((s) => {
      if (!map[s.name]) map[s.name] = { ...s, level: 0 };
      map[s.name].level = Math.max(map[s.name].level, pct);
    });
  });
  return Object.values(map);
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function StatBadge({ icon: Icon, label, value, color }: { icon: React.ElementType; label: string; value: string | number; color: string }) {
  return (
    <div className="flex flex-col items-center gap-1 px-4 py-3 rounded-xl bg-white/4 border border-white/8">
      <Icon size={18} style={{ color }} />
      <span className="text-lg font-bold text-text">{value}</span>
      <span className="text-[11px] text-muted text-center leading-tight">{label}</span>
    </div>
  );
}

function CourseCard({ course }: { course: CourseProgress }) {
  const meta = COURSE_META[course.id];
  if (!meta) return null;
  const pct = course.totalLessons > 0 ? Math.round((course.completedLessons / course.totalLessons) * 100) : 0;
  const Icon = meta.icon;

  const statusColor =
    course.status === "Completed"  ? "text-green-400 bg-green-400/10 border-green-400/20" :
    course.status === "In progress" ? "text-blue-400 bg-blue-400/10 border-blue-400/20" :
                                      "text-muted bg-white/4 border-white/10";
  const diffColor =
    meta.difficulty === "Beginner"     ? "text-green-400" :
    meta.difficulty === "Intermediate" ? "text-yellow-400" : "text-red-400";

  return (
    <Card className="glass-card border-white/8 hover:border-white/16 transition-all">
      <CardContent className="p-4">
        <div className="flex items-start gap-3 mb-3">
          <div className="p-2 rounded-lg flex-shrink-0" style={{ background: meta.color + "18" }}>
            <Icon size={20} style={{ color: meta.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-semibold text-text truncate">{meta.title}</h3>
            <div className="flex items-center gap-2 mt-0.5">
              <span className={`text-[11px] ${diffColor}`}>{meta.difficulty}</span>
              <span className="text-[11px] text-muted">•</span>
              <span className="text-[11px] text-muted">{meta.category}</span>
            </div>
          </div>
          <span className={`text-[10px] px-2 py-0.5 rounded-full border font-medium flex-shrink-0 ${statusColor}`}>
            {course.status}
          </span>
        </div>
        <div className="space-y-1.5">
          <div className="flex justify-between items-center">
            <span className="text-[11px] text-muted">{course.completedLessons}/{course.totalLessons} lessons</span>
            <span className="text-[11px] font-semibold" style={{ color: meta.color }}>{pct}%</span>
          </div>
          <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
            <div className="h-full rounded-full transition-all duration-700" style={{ width: `${pct}%`, background: meta.color }} />
          </div>
        </div>
        <div className="flex items-center justify-between mt-3">
          <span className="text-[11px] text-muted">{course.completedModules}/{course.totalModules} modules</span>
          <span className="text-[11px] text-muted">{course.lastAccessed}</span>
        </div>
      </CardContent>
    </Card>
  );
}

function ProgressRing({ courses }: { courses: CourseProgress[] }) {
  const totalLessons = courses.reduce((s, c) => s + c.totalLessons, 0);
  const completedLessons = courses.reduce((s, c) => s + c.completedLessons, 0);
  const completedCount = courses.filter((c) => c.status === "Completed").length;
  const inProgressCount = courses.filter((c) => c.status === "In progress").length;
  const notStartedCount = courses.filter((c) => c.status === "Not started").length;

  const segments = [
    { value: completedLessons, color: "#22C55E", label: "Completed", count: completedCount, total: courses.length },
    { value: Math.max(0, totalLessons - completedLessons), color: "#3BBEF7", label: "Remaining", count: inProgressCount, total: courses.length },
  ];

  return (
    <div className="flex flex-col items-center">
      <CircularProgress segments={segments} total={totalLessons} completed={completedLessons} size={150} strokeWidth={14} />
      <div className="mt-3 space-y-1.5 w-full">
        {[
          { dot: "bg-green-500",  label: "Completed",   val: `${completedCount} courses` },
          { dot: "bg-blue-400",   label: "In Progress",  val: `${inProgressCount} courses` },
          { dot: "bg-white/20",   label: "Not Started",  val: `${notStartedCount} courses` },
        ].map((r) => (
          <div key={r.label} className="flex items-center gap-2">
            <div className={`w-2.5 h-2.5 rounded-full ${r.dot} flex-shrink-0`} />
            <span className="text-[12px] text-muted flex-1">{r.label}</span>
            <span className="text-[12px] font-semibold text-text">{r.val}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function ProfileSkeleton() {
  return (
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card border-white/8">
          <CardContent className="p-6 flex flex-col items-center gap-4">
            <Skeleton className="w-20 h-20 rounded-full" />
            <Skeleton className="h-5 w-40" />
            <Skeleton className="h-3 w-32" />
            <Skeleton className="h-12 w-full" />
          </CardContent>
        </Card>
        <div className="lg:col-span-2 grid grid-cols-2 gap-6">
          <Skeleton className="h-64 rounded-xl" />
          <Skeleton className="h-64 rounded-xl" />
        </div>
      </div>
      <Skeleton className="h-48 rounded-xl" />
      <div className="grid grid-cols-3 gap-4">
        {[0,1,2,3,4,5].map(i => <Skeleton key={i} className="h-32 rounded-xl" />)}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function ProfileClient() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();

  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [courses, setCourses] = useState<CourseProgress[]>([]);
  const [activity, setActivity] = useState<ActivityEntry[]>([]);
  const [dataLoading, setDataLoading] = useState(true);

  // Redirect if not logged in
  useEffect(() => {
    if (!authLoading && !user) {
      router.push("/login");
    }
  }, [authLoading, user, router]);

  // Load data from API
  useEffect(() => {
    if (!user) return;
    setDataLoading(true);
    Promise.all([
      fetch("/api/profile").then((r) => r.json()),
      fetch("/api/courses").then((r) => r.json()),
      fetch("/api/activity").then((r) => r.json()),
    ]).then(([profileData, coursesData, activityData]) => {
      setProfile(profileData.profile ?? null);
      setCourses(coursesData.courses ?? []);
      setActivity(activityData.activity ?? []);
      setDataLoading(false);
    });
  }, [user]);

  if (authLoading || dataLoading || !profile) {
    return <ProfileSkeleton />;
  }

  const totalLessons = courses.reduce((s, c) => s + c.totalLessons, 0);
  const completedLessons = courses.reduce((s, c) => s + c.completedLessons, 0);
  const totalActivity = activity.reduce((s, a) => s + a.count, 0);
  const skills = computeSkills(courses);
  const earnedBadges = BADGES_CONFIG.filter((b) => b.unlock(profile));
  const avatarInitials = profile.displayName
    .split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  return (
    <div className="max-w-7xl mx-auto space-y-6 px-4 py-8">

      {/* ── Profile Header ── */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="glass-card border-white/8 lg:col-span-1">
          <CardContent className="p-6">
            <div className="flex flex-col items-center text-center gap-3">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue/40 to-violet/40 border-2 border-white/15 flex items-center justify-center">
                <span className="text-2xl font-bold text-text">{avatarInitials}</span>
              </div>
              <div>
                <h2 className="text-lg font-bold text-text">{profile.displayName}</h2>
                <p className="text-sm text-blue">@{profile.username}</p>
              </div>
              <p className="text-[13px] text-muted leading-relaxed">{profile.bio}</p>
              <div className="flex items-center gap-1.5 text-[12px] text-muted">
                <CalendarDays size={13} />
                <span>Joined {profile.joinedAt}</span>
              </div>
              <div className="grid grid-cols-3 gap-2 w-full mt-2">
                <StatBadge icon={Flame}       label="Streak"      value={`${profile.streak}d`}    color="#F97316" />
                <StatBadge icon={CalendarDays} label="Active Days" value={profile.activeDays}       color="#3BBEF7" />
                <StatBadge icon={Clock}        label="Hours"       value={profile.totalHours}        color="#8B5CF6" />
              </div>
              <div className="grid grid-cols-2 gap-2 w-full">
                <StatBadge icon={Trophy} label="Max Streak" value={`${profile.maxStreak}d`} color="#F59E0B" />
                <StatBadge icon={Award}  label="Badges"     value={earnedBadges.length}     color="#10B981" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Progress ring */}
          <Card className="glass-card border-white/8">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-text flex items-center gap-2">
                <BarChart3 size={16} className="text-blue" />
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center justify-center pt-2 pb-4">
              <ProgressRing courses={courses} />
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="glass-card border-white/8">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold text-text flex items-center gap-2">
                <Star size={16} className="text-violet" />
                Skills
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2.5 pt-1">
              {skills.length === 0 ? (
                <p className="text-[12px] text-muted">Complete lessons to unlock skills.</p>
              ) : (
                skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-[12px] text-body">{skill.name}</span>
                      <span className="text-[12px] font-medium" style={{ color: skill.color }}>{skill.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/6 overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${skill.level}%`, background: skill.color }} />
                    </div>
                  </div>
                ))
              )}
            </CardContent>
          </Card>
        </div>
      </div>

      {/* ── Activity Calendar ── */}
      <Card className="glass-card border-white/8">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <CardTitle className="text-sm font-semibold text-text flex items-center gap-2">
              <Flame size={16} className="text-orange-400" />
              {totalActivity} activities in the last 12 months
            </CardTitle>
            <div className="flex items-center gap-4 text-[12px] text-muted">
              <span>Active Days — <span className="text-text font-semibold">{profile.activeDays}</span></span>
              <span>Max Streak — <span className="text-text font-semibold">{profile.maxStreak}</span></span>
              <span>Current Streak — <span className="text-orange-400 font-semibold">{profile.streak} 🔥</span></span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <ActivityCalendar data={activity} weeks={52} />
        </CardContent>
      </Card>

      {/* ── Enrolled Courses ── */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-text flex items-center gap-2">
            <BookOpen size={18} className="text-blue" />
            Enrolled Courses
            <Badge className="ml-1 bg-blue/15 text-blue border-blue/25 text-[11px]">{courses.length}</Badge>
          </h2>
          <div className="text-[12px] text-muted">{completedLessons}/{totalLessons} lessons completed</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {courses.map((course) => <CourseCard key={course.id} course={course} />)}
        </div>
      </div>

      {/* ── Badges ── */}
      <Card className="glass-card border-white/8">
        <CardHeader className="pb-3">
          <CardTitle className="text-sm font-semibold text-text flex items-center gap-2">
            <Trophy size={16} className="text-yellow-400" />
            Badges Earned
            <Badge className="ml-1 bg-yellow-400/15 text-yellow-400 border-yellow-400/25 text-[11px]">{earnedBadges.length}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent>
          {earnedBadges.length === 0 ? (
            <p className="text-[13px] text-muted">Start learning to earn your first badge!</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3">
              {earnedBadges.map((badge) => (
                <div
                  key={badge.name}
                  className="flex flex-col items-center gap-2 p-3 rounded-xl bg-white/4 border border-yellow-400/20 hover:border-yellow-400/40 transition-all cursor-default"
                  title={badge.desc}
                >
                  <span className="text-2xl">{badge.icon}</span>
                  <span className="text-[11px] text-muted text-center leading-tight">{badge.name}</span>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>

      {/* ── Learning Insights ── */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Card className="glass-card border-white/8">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-green-500/15">
              <CheckCircle2 size={22} className="text-green-400" />
            </div>
            <div>
              <p className="text-[12px] text-muted">Completed Courses</p>
              <p className="text-2xl font-bold text-text">
                {courses.filter((c) => c.status === "Completed").length}
                <span className="text-sm text-muted font-normal"> / {courses.length}</span>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/8">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-blue/15">
              <TrendingUp size={22} className="text-blue" />
            </div>
            <div>
              <p className="text-[12px] text-muted">Lessons Completed</p>
              <p className="text-2xl font-bold text-text">
                {completedLessons}
                <span className="text-sm text-muted font-normal"> / {totalLessons}</span>
              </p>
            </div>
          </CardContent>
        </Card>
        <Card className="glass-card border-white/8">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-violet/15">
              <Clock size={22} className="text-violet" />
            </div>
            <div>
              <p className="text-[12px] text-muted">Total Hours Learned</p>
              <p className="text-2xl font-bold text-text">
                {profile.totalHours}
                <span className="text-sm text-muted font-normal"> hrs</span>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

    </div>
  );
}
