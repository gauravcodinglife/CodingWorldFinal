
import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Track } from '@/lib/learning-tracks';

export function TrackCard({ track }: { track: Track }) {
  return (
    <Card className="flex flex-col transition-transform duration-200 hover:scale-105">
      <CardHeader>
        <CardTitle>{track.title}</CardTitle>
        <CardDescription>{track.subtitle}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground">{track.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Badge variant="outline">{track.category}</Badge>
          <Badge variant="outline">{track.difficulty}</Badge>
          <Badge variant="outline">{track.duration}</Badge>
        </div>
      </CardContent>
      <CardFooter>
        {track.comingSoon ? (
          <Button disabled variant="secondary" className="w-full">
            Coming Soon
          </Button>
        ) : (
          <Button asChild className="w-full">
            <Link href={`/platforms/${track.id}`}>Start Learning</Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
