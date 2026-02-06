'use client';

import Terminal from '@/components/terminal';

export default function CliPage() {
  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="font-headline text-4xl font-bold tracking-tight text-center mb-2">
        CLI Practice Terminal
      </h1>
      <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
        Hone your command-line skills in a safe environment, or generate commands
        from plain English using our AI Command Generator.
      </p>

      {/* TODO: Add the command generator input */}

      <Terminal />
    </div>
  );
}
