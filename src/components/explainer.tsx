'use client';

import { useState, useTransition } from 'react';
import { Book, Bot, Briefcase, X, Info } from 'lucide-react';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getExplanation } from '@/app/actions';
import { useToast } from '@/hooks/use-toast';
import { serviceKnowledge } from '@/lib/service-knowledge';

interface ExplainerProps {
  serviceName: string;
  children: React.ReactNode;
}

export function Explainer({ serviceName, children }: ExplainerProps) {
  const [isPending, startTransition] = useTransition();
  const [explanation, setExplanation] = useState<any>(null);
  const [isAiExplanation, setIsAiExplanation] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { toast } = useToast();

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false);
      return;
    }

    setIsOpen(true);
    setExplanation(null);
    const staticKnowledge = serviceKnowledge[serviceName];

    if (staticKnowledge) {
      setIsAiExplanation(false);
      setExplanation({ explanation: staticKnowledge.content });
    } else {
      setIsAiExplanation(true);
      startTransition(async () => {
        try {
          const data = await getExplanation({ serviceName });
          setExplanation(data);
        } catch (e: any) {
          toast({
            title: 'Error',
            description: e.message || 'An unknown error occurred.',
            variant: 'destructive',
          });
        }
      });
    }
  };

  const renderContent = () => {
    if (isPending) {
        return (
            <Card className="glass-card">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2">
                  <Bot className="w-6 h-6 animate-spin" />
                  <h3 className="font-bold">Our AI is on it...</h3>
                </div>
              </CardContent>
            </Card>
        )
    }

    if (!explanation) return null;

    if (isAiExplanation) {
      return (
        <div className="space-y-4 animate-in fade-in-50 duration-500">
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Bot className="w-6 h-6 mr-2 text-primary" />
                Explanation
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
              {explanation.explanation}
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Briefcase className="w-6 h-6 mr-2 text-primary" />
                Use Cases
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
              {explanation.useCases}
            </CardContent>
          </Card>
          <Card className="glass-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Book className="w-6 h-6 mr-2 text-primary" />
                Real World Example
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
              {explanation.realWorldExample}
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
        <div className="animate-in fade-in-50 duration-500">
            <Card className="glass-card">
                <CardHeader>
                <CardTitle className="flex items-center">
                    <Info className="w-6 h-6 mr-2 text-primary" />
                    Explanation
                </CardTitle>
                </CardHeader>
                <CardContent className="prose prose-sm prose-invert max-w-none text-muted-foreground whitespace-pre-line">
                {explanation.explanation}
                </CardContent>
            </Card>
        </div>
    )
  }

  return (
    <div>
      <div onClick={handleClick} className="cursor-pointer">
        {children}
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}>
          <div className="fixed inset-y-0 right-0 max-w-2xl w-full bg-background border-l border-border/20 shadow-2xl p-8 overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold font-headline">{isAiExplanation ? 'AI Explanation' : 'Explanation'} for "{serviceName}"</h2>
                <button onClick={() => setIsOpen(false)} className="text-muted-foreground hover:text-foreground">
                    <X className="h-6 w-6" />
                </button>
            </div>
            <div className="mt-4">
                {renderContent()}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
