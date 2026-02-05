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
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { tracks } from "@/lib/learning-tracks";
import { TrackCard } from "@/components/track-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const stats = [
  {
    icon: <Cloud className="w-8 h-8 text-primary" />,
    value: "5+",
    label: "Cloud Platforms",
  },
  {
    icon: <Terminal className="w-8 h-8 text-primary" />,
    value: "100+",
    label: "CLI Commands",
  },
  {
    icon: <Activity className="w-8 h-8 text-primary" />,
    value: "20+",
    label: "Simulations",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "50+",
    label: "Learning Modules",
  },
];

export default function Home() {
  const architectureDiagram = PlaceHolderImages.find(
    (image) => image.name === "architecture-diagram"
  );
  const cliPracticeImage = PlaceHolderImages.find(
    (image) => image.name === "cli-practice"
  );
  const dashboardDemo = PlaceHolderImages.find(
    (image) => image.name === "dashboard-demo"
  );

  const featuredTracks = tracks.slice(0, 3);

  return (
    <main>
      {/* Hero Section */}
      <section>
        <div className="container mx-auto px-4 pt-8 md:pt-12 grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <div className="inline-block bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-400 mb-4">
              ● Learn faster with interactive tracks
            </div>
            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-[#F3F6FF]">
              Master the Cloud, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">One Command at a</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">Time</span>
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto md:mx-0 mb-8">
              An interactive learning platform for mastering cloud technologies.
              Practice in a simulated environment and accelerate your career.
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <Button asChild size="lg">
                <Link href="/tracks">Start Learning</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/cli">Try the Terminal</Link>
              </Button>
            </div>
          </div>
          <div className="bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="text-center text-sm text-gray-400 flex-grow">codingworld://terminal</div>
            </div>
            <div className="font-mono text-sm text-left">
              <p className="text-green-400">
                <span className="text-blue-400">→</span> npm run learn
              </p>
              <p className="text-gray-400">Loading interactive track...</p>
              <p>Lesson 1: Variables ⋅ Quiz ⋅ Mini project</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center"
            >
              {stat.icon}
              <p className="text-3xl md:text-4xl font-bold mt-2">
                <span className="bg-brand bg-clip-text text-transparent">
                  {stat.value}
                </span>
              </p>
              <p className="text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Tracks Section */}
      <section id="featured-tracks" className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Featured Learning Tracks
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredTracks.map((track) => (
              <TrackCard key={track.id} track={track} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/tracks">Explore All Tracks</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
              Visualize Complex Architectures
            </h3>
            <p className="text-muted-foreground mb-6">
              Grasp the fundamentals of cloud infrastructure with our
              interactive architecture diagrams. See how services connect and
              understand the flow of data in a real-world context.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-[#2DEBFF]">
              <Link href="/platforms/aws">
                Explore Diagrams <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          {architectureDiagram && (
            <Image
              src={architectureDiagram.imageUrl}
              alt={architectureDiagram.description}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>

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
            <Button asChild variant="link" className="p-0 h-auto text-[#2DEBFF]">
              <Link href="/cli">
                Try the CLI <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            {cliPracticeImage && (
              <Image
                src={cliPracticeImage.imageUrl}
                alt={cliPracticeImage.description}
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            )}
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-center mt-16">
          <div>
            <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
              Realistic Dashboard Simulations
            </h3>
            <p className="text-muted-foreground mb-6">
              Gain experience with cloud monitoring without the risk. Our
              dashboard simulations provide a hands-on look at how to interpret
              metrics, identify issues, and manage resources effectively.
            </p>
            <Button asChild variant="link" className="p-0 h-auto text-[#2DEBFF]">
              <Link href="/dashboard">
                View the Dashboard <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
          {dashboardDemo && (
            <Image
              src={dashboardDemo.imageUrl}
              alt={dashboardDemo.description}
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          )}
        </div>
      </section>

      {/* Core Features Section */}
      <section id="core-features" className="container mx-auto px-4 py-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
          Explore Our Core Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
        <Link href="/platforms/aws">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Visual Learning
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Interactive diagrams and visual aids to help you understand
                complex cloud architectures.
              </p>
            </CardContent>
          </Card>
          </Link>
          <Link href="/dashboard">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Activity className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Dashboard Simulations
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Experience realistic cloud monitoring dashboards with real-time
                data simulations.
              </p>
            </CardContent>
          </Card>
          </Link>
          <Link href="/cli">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-4">
                <Terminal className="w-8 h-8 text-primary" />
                <CardTitle className="font-headline text-2xl">
                  Interactive CLI
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Practice your command-line skills in a simulated environment
                for various cloud platforms.
              </p>
            </CardContent>
          </Card>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headline">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            Hi, I’m <strong>Gaurav</strong> — an aspiring <strong>Cloud Solutions Architect</strong> focused on <strong>AWS, DevOps, and System Design</strong>, with a strong interest in <strong>AI</strong>.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            I built this website as a space to <strong>learn in public</strong>, practice hands-on, and share clear, structured knowledge from my journey in tech.
          </p>
          <p className="text-muted-foreground text-lg md:text-xl mb-6">
            I believe in learning by building, understanding fundamentals deeply, and continuously exploring new technologies.
          </p>
          <p className="font-headline text-xl md:text-2xl font-bold mb-4">
            Let’s connect. Let’s learn. Let’s grow.
          </p>
          <div className="flex justify-center">
              <Button asChild variant="link" className="p-0 h-auto text-lg text-blue-400">
                <Link href="https://www.linkedin.com/in/gaurav-chavan-codinglife" target="_blank">
                  🔗 LinkedIn
                </Link>
              </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
