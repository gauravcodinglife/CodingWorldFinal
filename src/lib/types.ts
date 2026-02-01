import type { ReactNode } from "react";

export type Platform = {
  name: string;
  slug: string;
  description: string;
  icon: ReactNode;
  logoUrl?: string;
  color: string;
  topics: Topic[];
};

export type Topic = {
  slug: string;
  title: string;
  content: string;
  diagramUrl?: string;
  diagramHint?: string;
  commands: Command[];
};

export type Command = {
  command: string;
  expected_output: string;
  explanation: string;
};
