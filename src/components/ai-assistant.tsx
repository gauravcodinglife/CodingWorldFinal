'use client';

import { useState, useTransition } from 'react';
import { Sparkles } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { explainService } from '@/app/actions';
import type { ExplainServiceOutput } from '@/ai/flows/explain-service';

interface AiAssistantProps {
  serviceName: string;
}

export function AiAssistant({ serviceName }: AiAssistantProps) {
  const [isPending, startTransition] = useTransition();
  const [explanation, setExplanation] = useState<ExplainServiceOutput | null>(null);
  const { toast } = useToast();

  function handleClick() {
    setExplanation(null);
    startTransition(async () => {
      const { data, error } = await explainService({ serviceName });
      if (error) {
        toast({
          title: 'Error',
          description: error,
          variant: 'destructive',
        });
        return;
      }
      setExplanation(data);
    });
  }

  return (
    <div>
      <Button onClick={handleClick} disabled={isPending}>
        <Sparkles className="mr-2 h-4 w-4" />
        {isPending ? 'Thinking...' : `Explain ${serviceName}`}
      </Button>

      {(isPending || explanation) && (
        <div className="mt-4">
          {isPending && (
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-bold">Generating Explanation...</h3>
                  <p className="text-sm text-muted-foreground">Our AI is crafting an explanation for {serviceName}.</p>
                </div>
              </CardContent>
            </Card>
          )}
          {explanation && (
            <div className="space-y-4 animate-in fade-in-50 duration-500">
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Explanation</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                  {explanation.explanation}
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Use Cases</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                  {explanation.useCases}
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle>Real-World Example</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                  {explanation.realWorldExample}
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
