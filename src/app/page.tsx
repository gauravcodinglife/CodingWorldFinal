import {
  Activity,
  ArrowRight,
  BookOpen,
  Cloud,
  Terminal,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { platforms } from "@/lib/data";
import PlatformCard from "@/components/platform-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const stats = [
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    value: "5+",
    label: "Cloud Platforms",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "100+",
    label: "Learning Modules",
  },
  {
    icon: <Terminal className="w-8 h-8 text-primary" />,
    value: "200+",
    label: "CLI Commands",
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    value: "24/7",
    label: "Practice Access",
  },
];

const cliPracticeImage = PlaceHolderImages.find(
  (img) => img.id === "cli-practice-hero"
);
const dashboardDemoImage = PlaceHolderImages.find(
  (img) => img.id === "dashboard-demo-hero"
);

export default function Home() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <section
        id="hero"
        className="relative py-20 md:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-background opacity-50"></div>
         <div className="absolute inset-0 bg-[url('/grid.svg')] bg-repeat opacity-20"></div>
        <div className="container mx-auto px-4 text-center relative">
          <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Master the Cloud.
            <br />
            <span className="text-primary">Visually & Practically.</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Cloud Dojo is a modern learning platform to master AWS, GCP, Azure,
            Docker, and Kubernetes. Learn with interactive diagrams, practice
            with a real-time CLI, and simulate real-world dashboards.
          </p>
          <div className="flex justify-center gap-4">
            <Button asChild size="lg" className="neon-hover-primary">
              <Link href="/platforms">
                Start Learning <ArrowRight className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/cli">
                Practice CLI <Terminal className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="stats" className="container mx-auto px-4 -mt-32 md:-mt-40 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="glass-card text-center">
              <CardHeader className="items-center pb-2">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold text-primary pt-2">
                  {stat.value}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm md:text-base text-muted-foreground">
                  {stat.label}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="platforms" className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">
            Choose Your Platform
          </h2>
          <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
            Dive deep into the most popular cloud and container technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <PlatformCard key={platform.slug} platform={platform} />
          ))}
        </div>
      </section>

      <section id="features" className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
              Interactive CLI Practice
            </h3>
            <p className="text-muted-foreground mb-6">
              Move beyond theory. Our built-in terminal simulator allows you to
              practice real commands for Docker and Kubernetes in a sandboxed
              environment. Get instant feedback and master the command line.
            </p>
            <Button asChild variant="link" className="p-0 h-auto">
              <Link href="/cli">
                Try the CLI <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {cliPracticeImage && (
              <Image
                src={cliPracticeImage.imageUrl}
                alt="CLI Practice Terminal"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint={cliPracticeImage.imageHint}
              />
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            {dashboardDemoImage && (
              <Image
                src={dashboardDemoImage.imageUrl}
                alt="Cloud Dashboard Demo"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
                data-ai-hint={dashboardDemoImage.imageHint}
              />
            )}
          </div>
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
              Cloud Dashboard Simulations
            </h3>
            <p className="text-muted-foreground mb-6">
              Visualize the impact of your work. Our dashboard demos, powered by
              AI, simulate real-time cloud metrics like CPU usage, memory, and
              costs. Understand the bigger picture of cloud architecture.
            </p>
            <Button asChild variant="link" className="p-0 h-auto">
              <Link href="/dashboard">
                View Dashboard Demo <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
