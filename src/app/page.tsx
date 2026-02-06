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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { tracks } from "@/lib/learning-tracks";
import { TrackCard } from "@/components/track-card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AnimatedTerminalText } from "@/components/animated-terminal-text";
import ScrollAnimation from "@/components/ui/scroll-animation";

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
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "10+",
    label: "Certifications",
  },
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    value: "50+",
    label: "Learning Modules",
  },
];

const faqs = [
  {
    question: "Is this free?",
    answer: "Yes, this platform is completely free to use. My goal is to provide accessible, hands-on learning for everyone interested in cloud technologies."
  },
  {
    question: "Do I need an AWS account?",
    answer: "No, you don't need your own AWS account. All the practice exercises and simulations run in a sandboxed environment provided by the platform. You can learn and experiment without worrying about unexpected bills."
  },
  {
    question: "How does the terminal work?",
    answer: "The interactive terminal is a simulated environment that mirrors a real command-line interface. It allows you to practice commands for tools like Docker, Kubernetes, and cloud provider CLIs in a safe, guided setting. You'll get real-time feedback on your commands."
  }
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
      <ScrollAnimation>
        <section className="w-full px-4 md:px-8 py-20 md:py-28">
          <div className="container mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <div className="inline-block bg-gray-800 rounded-full px-4 py-2 text-sm font-semibold text-cyan mb-4 border border-cyan-400/30">
                Learn faster with interactive tracks
              </div>
              <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4" style={{ lineHeight: 1.1 }}>
                Master the Cloud,
                One <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue to-violet">Command</span>
                at a Time
              </h1>
              <p className="text-body text-lg md:text-xl max-w-2xl mx-auto md:mx-0 mb-8">
                An interactive learning platform for mastering cloud technologies. Practice in a simulated environment and accelerate your career.
              </p>
              <div className="flex justify-center md:justify-start gap-4 mb-6">
                <Button asChild size="lg" className="bg-btn-gradient text-gray-900 font-bold hover:scale-105 transition-transform">
                  <Link href="/tracks">Start Learning</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white/20 bg-white/10 text-text hover:border-cyan hover:bg-gray-800/50 hover:text-cyan transition-colors">
                  <Link href="/cli">Try the Terminal</Link>
                </Button>
              </div>
              <div className="flex justify-center md:justify-start space-x-4 text-sm text-muted">
                  <p>✓ Hands-on labs</p>
                  <p>✓ Real CLI</p>
                  <p>✓ Guided projects</p>
              </div>
            </div>
            <div className="bg-card/60 p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm shadow-cyan-500/10">
              <div className="flex items-center mb-4 px-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-center text-sm text-muted flex-grow">codingworld://terminal</div>
              </div>
              <div className="bg-gray-900/80 rounded-lg p-4 min-h-[150px]">
                 <AnimatedTerminalText />
              </div>
            </div>
          </div>
        </section>
      </ScrollAnimation>

      {/* Stats Section */}
      <ScrollAnimation>
        <section className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {stat.icon}
                <p className="text-3xl md:text-4xl font-bold mt-2 text-gradient-stats">
                    {stat.value}
                </p>
                <p className="text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>
      </ScrollAnimation>

      {/* Featured Tracks Section */}
      <ScrollAnimation>
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
      </ScrollAnimation>

      {/* Features Section */}
      <ScrollAnimation>
        <section id="features" className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-16">
            <div>
              <h3 className="font-headline text-2xl md:text-3xl font-bold mb-4">
                Visualize Complex Architectures
              </h3>
              <p className="text-muted mb-6">
                Grasp the fundamentals of cloud infrastructure with our
                interactive architecture diagrams. See how services connect and
                understand the flow of data in a real-world context.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-cyan">
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
              <p className="text-muted mb-6">
                Move beyond theory. Our built-in terminal simulator allows you to
                practice real commands for Docker and Kubernetes in a sandboxed
                environment. Get instant feedback and master the command line.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-cyan">
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
              <p className="text-muted mb-6">
                Gain experience with cloud monitoring without the risk. Our
                dashboard simulations provide a hands-on look at how to interpret
                metrics, identify issues, and manage resources effectively.
              </p>
              <Button asChild variant="link" className="p-0 h-auto text-cyan">
                <Link href="/simulation">
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
      </ScrollAnimation>

      {/* Core Features Section */}
      <ScrollAnimation>
        <section id="core-features" className="container mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 font-headline">
            Explore Our Core Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
          <Link href="/platforms/aws" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Card className="bg-card border-white/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">
                    Visual Learning
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Interactive diagrams and visual aids to help you understand
                  complex cloud architectures.
                </p>
              </CardContent>
            </Card>
            </Link>
            <Link href="/simulation" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Card className="bg-card border-white/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Activity className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">
                    Dashboard Simulations
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Experience realistic cloud monitoring dashboards with real-time
                  data simulations.
                </p>
              </CardContent>
            </Card>
            </Link>
            <Link href="/cli" className="transition-transform duration-300 ease-in-out hover:scale-105">
            <Card className="bg-card border-white/10 h-full">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <Terminal className="w-8 h-8 text-primary" />
                  <CardTitle className="font-headline text-2xl">
                    Interactive CLI
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted">
                  Practice your command-line skills in a simulated environment
                  for various cloud platforms.
                </p>
              </CardContent>
            </Card>
            </Link>
          </div>
        </section>
      </ScrollAnimation>

      {/* FAQ Section */}
      <ScrollAnimation>
        <section id="faq" className="container mx-auto px-4 py-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 font-headline">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
          <p className="text-muted text-center mb-8">
            Have a different question? Email me at <a href="mailto:gaurav@example.com" className="text-blue-400 underline">gaurav@example.com</a>.
          </p>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </ScrollAnimation>

      {/* About Section */}
      <ScrollAnimation>
        <section id="about" className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 font-headline">
              About Me
            </h2>
            <p className="text-muted text-lg md:text-xl mb-6">
              Hi, I’m <strong>Gaurav</strong> — an aspiring <strong>Cloud Solutions Architect</strong> focused on <strong>AWS, DevOps, and System Design</strong>, with a strong interest in <strong>AI</strong>.
            </p>
            <p className="text-muted text-lg md:text-xl mb-6">
              I built this website as a space to <strong>learn in public</strong>, practice hands-on, and share clear, structured knowledge from my journey in tech.
            </p>
            <p className="text-muted text-lg md:text-xl mb-6">
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
      </ScrollAnimation>
    </main>
  );
}
