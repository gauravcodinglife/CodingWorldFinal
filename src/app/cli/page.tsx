import Terminal from "@/components/terminal";

export default function CliPracticePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          CLI Practice Terminal
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
          Hone your command-line skills. Our simulator provides a safe
          environment to practice and master essential commands.
        </p>
      </div>
      <Terminal />
    </div>
  );
}
