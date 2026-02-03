
import { tracks } from "@/lib/learning-tracks";
import { TrackCard } from "@/components/track-card";

export default function TracksPage() {
  return (
    <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                All Learning Tracks
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
                Explore our comprehensive list of learning tracks to master cloud and DevOps technologies.
            </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {tracks.map((track) => (
                <TrackCard key={track.id} track={track} />
            ))}
        </div>
    </main>
  );
}
