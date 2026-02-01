import { ProfileClient } from "./profile-client";

export default function ProfilePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          Your Profile
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Track your progress and get personalized learning recommendations to
          guide your journey in coding.
        </p>
      </div>
      <ProfileClient />
    </div>
  );
}
