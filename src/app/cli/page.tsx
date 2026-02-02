'use client';

import Terminal from "@/components/terminal";
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Icons } from '@/components/icons';
import CloudMentor from "@/components/cloud-mentor";

export default function CliPracticePage() {
  const [prompt, setPrompt] = useState('');
  const [generatedCommand, setGeneratedCommand] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false);

  const handleGenerate = async () => {
    if (!prompt) return;
    setIsGenerating(true);
    setGeneratedCommand('');
    try {
      const res = await fetch('/api/cli-generator', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setGeneratedCommand(data.command || 'Failed to generate command.');
    } catch (error) {
      console.error('Error generating command:', error);
      setGeneratedCommand('An error occurred.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleCopy = () => {
    if (generatedCommand) {
      navigator.clipboard.writeText(generatedCommand);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h1 className="font-headline text-4xl md:text-5xl font-bold">
          CLI Practice Terminal
        </h1>
        <p className="text-lg text-muted-foreground mt-2 max-w-3xl mx-auto">
          Hone your command-line skills in a safe environment, or generate commands from plain English using our AI Command Generator.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mb-8">
        <div className="relative">
          <Input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder='e.g., "Create a Docker container from the nginx image and run it"'
            className="pr-24"
            onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
          />
          <Button
            onClick={handleGenerate}
            disabled={isGenerating}
            className="absolute right-1 top-1/2 -translate-y-1/2 h-8 px-3"
          >
            {isGenerating ? (
              <Icons.spinner className="h-4 w-4 animate-spin" />
            ) : (
              'Generate'
            )}
          </Button>
        </div>
        {generatedCommand && (
          <div className="mt-3 bg-card border border-border/30 rounded-lg p-3 relative font-code text-sm">
            <p className="text-primary">Generated Command:</p>
            <code className="text-cyan-400 break-words">{generatedCommand}</code>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleCopy}
              className="absolute top-2 right-2 h-7 w-7"
            >
              {copySuccess ? (
                <Icons.check className="h-4 w-4 text-green-500" />
              ) : (
                <Icons.copy className="h-4 w-4" />
              )}
            </Button>
          </div>
        )}
      </div>

      <Terminal />
      <CloudMentor context="cli-practice" />
    </div>
  );
}
