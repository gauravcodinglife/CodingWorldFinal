import PlatformCard from "@/components/platform-card";
import { platforms } from "@/lib/data";

export default function PlatformsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          All Platforms
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Choose a technology to master. Each module includes visual guides,
          practical examples, and hands-on exercises.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((platform) => (
          <PlatformCard key={platform.slug} platform={platform} />
        ))}
      </div>
    </div>
  );
}
