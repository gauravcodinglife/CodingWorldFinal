
import { ProfileClient } from "./profile-client";

export const metadata = {
  title: "Student Profile | CodingWorld",
  description: "Track your learning progress across all courses.",
};

export default function ProfilePage() {
  return (
    <div className="w-full">
      <ProfileClient />
    </div>
  );
}
