"use client";

import { useState, useEffect } from 'react';

export function AnimatedTerminalText() {
  const [text, setText] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);
  const message = "Welcome to CodingWorld — I’m Gaurav. Let’s explore cloud technologies and build real-world solutions.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(message.substring(0, i));
      i++;
      if (i > message.length) {
        clearInterval(interval);
        setIsCompleted(true);
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="font-mono text-sm text-left text-green-400 h-20">
      <span className="text-blue-400">→ </span>
      {text}
      {!isCompleted && <span className="animate-pulse">_</span>}
    </div>
  );
}
