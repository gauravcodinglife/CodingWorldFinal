'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Icons } from '@/components/icons';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CloudMentorProps {
  context: string; // e.g., 'aws-diagram', 'cli-practice'
}

export default function CloudMentor({ context }: CloudMentorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: 'user' | 'assistant', content: string }[]>([]);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const handleQuerySubmit = async () => {
    if (!query.trim()) return;

    const newHistory = [...chatHistory, { role: 'user' as const, content: query }];
    setChatHistory(newHistory);
    setQuery('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/cloud-mentor', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: query, context }),
      });

      if (!res.body) {
        throw new Error('No response body');
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistantResponse = '';

      setChatHistory(prev => [...prev, { role: 'assistant', content: '' }]);
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        assistantResponse += chunk;
        setChatHistory(prev => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === 'assistant') {
            lastMessage.content = assistantResponse;
            return [...prev.slice(0, -1), lastMessage];
          } else {
            return [...prev, { role: 'assistant', content: assistantResponse }];
          }
        });
      }

    } catch (error) {
      console.error('Error fetching mentor response:', error);
      setChatHistory(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const MarkdownComponents = {
    code({ node, inline, className, children, ...props }) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter
          style={vscDarkPlus}
          language={match[1]}
          PreTag="div"
          {...props}
        >
          {String(children).replace(/\n$/, '')}
        </SyntaxHighlighter>
      ) : (
        <code className={className} {...props}>
          {children}
        </code>
      )
    }
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="fixed bottom-6 right-6 rounded-full shadow-lg w-16 h-16 neon-hover-primary">
          <Icons.brainCircuit className="h-8 w-8" />
          <span className="sr-only">Ask Cloud Mentor</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-[450px] sm:w-[540px] flex flex-col">
        <SheetHeader>
          <SheetTitle className="flex items-center text-xl">
            <Icons.brainCircuit className="h-6 w-6 mr-2 text-primary" />
            AI Cloud Mentor
          </SheetTitle>
        </SheetHeader>
        <div ref={chatContainerRef} className="flex-grow overflow-y-auto pr-4 -mr-6 space-y-4 py-4 text-sm">
          {chatHistory.length === 0 && (
            <div className="text-center text-muted-foreground pt-10">
              <p>Ask me anything about DevOps, AWS, or the command line!</p>
            </div>
          )}
          {chatHistory.map((message, index) => (
            <div key={index} className={`flex flex-col gap-2 ${message.role === 'user' ? 'items-end' : 'items-start'}`}>
              <div className={`max-w-[85%] rounded-lg px-3 py-2 ${message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-card border'}`}>
                <ReactMarkdown components={MarkdownComponents}>{message.content}</ReactMarkdown>
              </div>
            </div>
          ))}
          {isLoading && chatHistory[chatHistory.length - 1]?.role === 'user' && (
             <div className="flex flex-col gap-2 items-start">
              <div className="max-w-[85%] rounded-lg px-3 py-2 bg-card border">
                <Icons.spinner className="h-5 w-5 animate-spin text-primary" />
              </div>
            </div>
          )}
        </div>
        <div className="relative mt-auto pt-4 border-t">
          <Textarea
            ref={input => input && !isOpen && input.blur()} // Prevent focus stealing on close
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleQuerySubmit();
              }
            }}
            placeholder="Ask your question..."
            className="pr-20 resize-none"
            rows={2}
          />
          <Button
            type="submit"
            onClick={handleQuerySubmit}
            disabled={isLoading || !query.trim()}
            className="absolute bottom-3 right-3 h-8 px-3"
            size="sm"
          >
            <Icons.send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
