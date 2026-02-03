
import { Cloud, Github, Package, Terminal, AppWindow } from "lucide-react";
import Link from "next/link";

const platforms = [
  {
    title: "AWS",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    description: "Amazon Web Services: The leading cloud platform.",
    slug: "/platforms/aws",
    tags: ["Cloud", "IaaS", "PaaS"],
  },
  {
    title: "GCP",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    description: "Google Cloud Platform: Scalable infrastructure and platform services.",
    slug: "/platforms/gcp",
    tags: ["Cloud", "IaaS", "PaaS"],
  },
  {
    title: "Azure",
    icon: <Cloud className="w-8 h-8 text-primary" />,
    description: "Microsoft Azure: Cloud computing service for building and managing applications.",
    slug: "/platforms/azure",
    tags: ["Cloud", "IaaS", "PaaS"],
  },
  {
    title: "Docker",
    icon: <Package className="w-8 h-8 text-primary" />,
    description: "Containerization platform for building, shipping, and running applications.",
    slug: "/platforms/docker",
    tags: ["Containers", "DevOps"],
  },
  {
    title: "Kubernetes",
    icon: <AppWindow className="w-8 h-8 text-primary" />,
    description: "Open-source container-orchestration system for automating application deployment.",
    slug: "/platforms/kubernetes",
    tags: ["Containers", "DevOps", "Orchestration"],
  },
  {
    title: "Linux Fundamentals",
    icon: <Terminal className="w-8 h-8 text-primary" />,
    description: "Master the command line, processes, permissions and networking.",
    slug: "/platforms/linux",
    tags: ["OS", "Fundamentals", "CLI"],
  },
  {
    title: "Git & GitHub",
    icon: <Github className="w-8 h-8 text-primary" />,
    description: "Track code changes, collaborate with Git and work with GitHub workflows.",
    slug: "/platforms/git",
    tags: ["Version Control", "Fundamentals", "DevOps"],
  },
];

export default function PlatformsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline tracking-tight">Services Catalog</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Explore our learning tracks for Cloud & DevOps technologies.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {platforms.map((platform) => (
          <Link href={platform.slug} key={platform.slug} className="block group">
            <div className="relative h-full p-6 bg-card rounded-xl border border-border/20 shadow-sm hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <div className="flex items-start mb-4">
                {platform.icon}
                <div className="ml-4">
                  <h3 className="text-xl font-bold font-headline">{platform.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{platform.description}</p>
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {platform.tags.map(tag => (
                  <span key={tag} className="inline-block bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-6 right-6">
                 <span className="text-sm font-semibold text-primary group-hover:underline">Start Learning →</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
