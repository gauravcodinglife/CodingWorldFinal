import mongoose, { Schema, Document, Model } from "mongoose";

export type CourseProgressDoc = {
  id: string;
  completedLessons: number;
  totalLessons: number;
  completedModules: number;
  totalModules: number;
  completedLessonIds: number[]; // flat lesson indices that are marked complete
  status: "Not started" | "In progress" | "Completed";
  lastAccessed: Date | null;
};

export type ActivityDoc = {
  date: string; // YYYY-MM-DD
  count: number;
};

export interface IUser extends Document {
  displayName: string;
  username: string;
  email: string;
  password: string;
  bio: string;
  joinedAt: Date;
  streak: number;
  maxStreak: number;
  activeDays: number;
  totalHours: number;
  courses: CourseProgressDoc[];
  activity: ActivityDoc[];
}

const CourseProgressSchema = new Schema<CourseProgressDoc>(
  {
    id: { type: String, required: true },
    completedLessons: { type: Number, default: 0 },
    totalLessons: { type: Number, required: true },
    completedModules: { type: Number, default: 0 },
    totalModules: { type: Number, required: true },
    completedLessonIds: { type: [Number], default: [] },
    status: { type: String, enum: ["Not started", "In progress", "Completed"], default: "Not started" },
    lastAccessed: { type: Date, default: null },
  },
  { _id: false }
);

const ActivitySchema = new Schema<ActivityDoc>(
  {
    date: { type: String, required: true },
    count: { type: Number, default: 0 },
  },
  { _id: false }
);

const UserSchema = new Schema<IUser>(
  {
    displayName: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    bio: { type: String, default: "Learner on CodingWorld. Just getting started!" },
    joinedAt: { type: Date, default: Date.now },
    streak: { type: Number, default: 0 },
    maxStreak: { type: Number, default: 0 },
    activeDays: { type: Number, default: 0 },
    totalHours: { type: Number, default: 0 },
    courses: { type: [CourseProgressSchema], default: [] },
    activity: { type: [ActivitySchema], default: [] },
  },
  { timestamps: false }
);

const User: Model<IUser> =
  mongoose.models.User ?? mongoose.model<IUser>("User", UserSchema);

export default User;
