"use client";

import { useState, useRef, useEffect, KeyboardEvent } from "react";
import { cliCommands } from "@/lib/commands";
import { cn } from "@/lib/utils";

type HistoryItem = {
  command: string;
  output: string;
};

type MentorResponse = {
  explanation: string;
  syntax: string;
  nextCommand: string;
  miniTheory: string;
};

export default function Terminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [mentorResponse, setMentorResponse] = useState<MentorResponse | null>(null);
  const [isMentorLoading, setIsMentorLoading] = useState(false);
  const endOfHistoryRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    endOfHistoryRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const fetchMentorResponse = async (command: string) => {
    setIsMentorLoading(true);
    try {
      const res = await fetch("/api/cli-mentor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ command }),
      });
      const data = await res.json();
      setMentorResponse(data);
    } catch (error) {
      console.error("Error fetching mentor response:", error);
      // Handle error appropriately in a real app
    } finally {
      setIsMentorLoading(false);
    }
  };

  const handleCommand = (commandStr: string) => {
    const command = commandStr.toLowerCase().trim();
    if (command === 'clear') {
      setHistory([]);
      setMentorResponse(null);
      return;
    }

    fetchMentorResponse(command);

    const matchedCommand = cliCommands.find((c) => c.command === command);
    let output: string;

    if (matchedCommand) {
      if (typeof matchedCommand.output === 'function') {
        output = matchedCommand.output();
      } else {
        output = matchedCommand.output;
      }
    } else {
      output = `command not found: ${command}. Type 'help' for available commands.`;
    }

    setHistory([...history, { command: commandStr, output }]);
    if (commandStr) {
      setCommandHistory([commandStr, ...commandHistory]);
    }
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleCommand(input);
      setInput("");
    } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (commandHistory.length > 0) {
            const newIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
            setHistoryIndex(newIndex);
            setInput(commandHistory[newIndex]);
        }
    } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (historyIndex > -1) {
            const newIndex = Math.max(historyIndex - 1, -1);
            setHistoryIndex(newIndex);
            setInput(newIndex === -1 ? '' : commandHistory[newIndex]);
        }
    }
  };

  return (
    <div className="grid md:grid-cols-3 gap-8">
        <div
            className="md:col-span-2 w-full h-[60vh] bg-[#0D1117] rounded-lg border border-border/30 shadow-2xl flex flex-col font-code text-sm"
            onClick={() => inputRef.current?.focus()}
        >
            <div className="flex-shrink-0 p-3 bg-card/80 border-b border-border/30 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <div className="text-xs text-muted-foreground ml-auto">/home/codingworld_user</div>
            </div>
            <div className="flex-grow p-4 overflow-y-auto">
                <div className="text-green-400">Welcome to CodingWorld CLI!</div>
                <div className="text-muted-foreground mb-4">
                Type 'help' to see a list of available commands.
                </div>
                {history.map((item, index) => (
                <div key={index}>
                    <div className="flex items-center">
                    <span className="text-green-400">❯</span>
                    <span className="ml-2 text-gray-200">{item.command}</span>
                    </div>
                    <div className="whitespace-pre-wrap text-gray-400" dangerouslySetInnerHTML={{ __html: item.output }} />
                </div>
                ))}
                <div className="flex items-center">
                <span className="text-green-400">❯</span>
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none focus:ring-0 outline-none text-gray-200 ml-2 w-full"
                    autoComplete="off"
                    autoCapitalize="off"
                    autoCorrect="off"
                    spellCheck="false"
                />
                </div>
                <div ref={endOfHistoryRef}></div>
            </div>
        </div>
        <div className="md:col-span-1">
            <div className="bg-card border border-border/30 rounded-lg shadow-lg h-full p-6 font-code text-sm">
                <h3 className="font-headline text-xl font-bold mb-4">AI DevOps Mentor</h3>
                {isMentorLoading ? (
                    <div className="flex items-center justify-center h-full">
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
                    </div>
                ) : mentorResponse ? (
                    <div className="space-y-4">
                        <div>
                            <h4 className="font-bold text-primary mb-1">Explanation</h4>
                            <p className="text-muted-foreground">{mentorResponse.explanation}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">Syntax</h4>
                            <p className="bg-black/20 p-2 rounded-md text-cyan-400"><code>{mentorResponse.syntax}</code></p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">Suggested Next Command</h4>
                            <p className="text-muted-foreground">{mentorResponse.nextCommand}</p>
                        </div>
                        <div>
                            <h4 className="font-bold text-primary mb-1">Mini Theory</h4>
                            <p className="text-muted-foreground">{mentorResponse.miniTheory}</p>
                        </div>
                    </div>
                ) : (
                    <div className="text-muted-foreground text-center h-full flex items-center justify-center">
                        <p>Your AI mentor will appear here after you enter a command.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
  );
}
