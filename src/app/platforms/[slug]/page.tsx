import { notFound } from "next/navigation";
import Image from "next/image";
import { platforms } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Terminal } from "lucide-react";

export async function generateStaticParams() {
  return platforms.map((platform) => ({
    slug: platform.slug,
  }));
}

export default function PlatformDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const platform = platforms.find((p) => p.slug === params.slug);

  if (!platform) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div
          className="p-4 rounded-full"
          style={{ backgroundColor: `${platform.color}20` }}
        >
          <div className="w-16 h-16" style={{ color: platform.color }}>
            {platform.icon}
          </div>
        </div>
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold">
            {platform.name}
          </h1>
          <p className="text-lg text-muted-foreground mt-2">
            {platform.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle>Learning Topics</CardTitle>
              <CardDescription>
                Explore the core concepts of {platform.name}.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible defaultValue={platform.topics[0]?.slug}>
                {platform.topics.map((topic) => {
                  const diagram = PlaceHolderImages.find(
                    (img) => img.id === topic.diagramUrl
                  );
                  return (
                    <AccordionItem key={topic.slug} value={topic.slug}>
                      <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                        {topic.title}
                      </AccordionTrigger>
                      <AccordionContent className="prose prose-invert max-w-none text-muted-foreground">
                        <p>{topic.content}</p>
                        {diagram && (
                          <div className="my-6">
                            <Image
                              src={diagram.imageUrl}
                              alt={diagram.description}
                              width={800}
                              height={600}
                              className="rounded-lg border"
                              data-ai-hint={diagram.imageHint || topic.diagramHint}
                            />
                          </div>
                        )}
                        {topic.commands.length > 0 && (
                          <div className="mt-6">
                            <h4 className="font-semibold text-foreground mb-2 flex items-center">
                              <Terminal className="w-4 h-4 mr-2" />
                              Relevant Commands
                            </h4>
                            <ul className="list-none p-0">
                              {topic.commands.map((cmd) => (
                                <li key={cmd.command} className="mt-2">
                                  <code className="font-code text-sm bg-muted p-2 rounded-md text-primary">
                                    {cmd.command}
                                  </code>
                                  <p className="text-sm mt-1 ml-1">
                                    - {cmd.explanation}
                                  </p>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </CardContent>
          </Card>
        </div>
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Platform Details</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm">
                <li>
                  <strong>Topics:</strong> {platform.topics.length}
                </li>
                <li>
                  <strong>Category:</strong>{" "}
                  {["aws", "gcp", "azure"].includes(platform.slug)
                    ? "Cloud Provider"
                    : "Container Tech"}
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
