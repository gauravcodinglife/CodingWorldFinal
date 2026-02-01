import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Platform } from "@/lib/types";

interface PlatformCardProps {
  platform: Platform;
}

export default function PlatformCard({ platform }: PlatformCardProps) {
  return (
    <Link href={`/platforms/${platform.slug}`} className="group">
      <div className="h-full glass-card p-6 flex flex-col items-start neon-hover transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1">
        <div
          className="p-3 rounded-full mb-4"
          style={{ backgroundColor: `${platform.color}20` }}
        >
          <div
            className="w-10 h-10"
            style={{ color: platform.color }}
          >
            {platform.icon}
          </div>
        </div>
        <h3 className="font-headline text-xl font-bold mb-2">{platform.name}</h3>
        <p className="text-muted-foreground flex-grow mb-4">
          {platform.description}
        </p>
        <div className="flex items-center text-sm font-semibold text-primary">
          Start Learning
          <ArrowRight className="w-4 h-4 ml-2 transform-gpu transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
}
