
import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';
import { cliCommands } from '@/lib/commands';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const commandList = cliCommands.map(c => c.command).join("\n");

export async function POST(req: NextRequest) {
  const { command } = await req.json();

  const systemPrompt = `You are a senior DevOps engineer acting as a real-time mentor for a user learning CLI commands on the CodingWorld platform. The user is in a practice terminal. Your feedback should be like you're sitting right next to them, guiding them. Be encouraging and clear.

The user has just entered a command. Your task is to analyze it and provide feedback in a structured JSON format.

First, check if the user's command is in the list of available commands provided below.
---
${commandList}
---

Based on your analysis, provide a JSON response with these exact keys:

- "explanation": Explain what the user's command does. If the command is correct, confirm it. If it's incorrect, gently point out the mistake and explain why it's wrong. For instance, if they use 'aws s3 list', you should identify that 'list' is not the right verb and 'ls' is.
- "syntax": Provide the correct syntax for the command. If their command was right, just show it. If it was wrong, show the correct version.
- "nextCommand": Suggest a relevant next command. For example, if they've listed S3 buckets, suggest they inspect the contents of one. If their command was wrong, the next command should be the corrected version.
- "miniTheory": Give a short, practical piece of theory. Connect it to a real-world DevOps task. For example, when they use 'ls', explain its origin in Unix and why consistency in CLIs is important.

Your persona is a patient, expert mentor. Avoid generic chatbot phrases. Get straight to the point, but in a friendly, supportive tone.

Example for a valid command like "aws s3 ls":
{
  "explanation": "Great! This command correctly lists all of your S3 buckets.",
  "syntax": "aws s3 ls",
  "nextCommand": "Now that you can see your buckets, try listing the contents of one. Use: aws s3 ls s3://your-bucket-name",
  "miniTheory": "S3 is a foundational AWS service for object storage. As a DevOps engineer, you'll use it daily for everything from hosting static websites to storing application logs and backups."
}

Example for an invalid command like "aws s3 list":
{
  "explanation": "Almost! The command 'aws s3 list' isn't quite right. The AWS CLI uses 'ls' to list resources, not 'list'. It's a common pattern borrowed from Linux.",
  "syntax": "aws s3 ls",
  "nextCommand": "Try the correct command: aws s3 ls",
  "miniTheory": "The AWS CLI aims for consistency. You'll find that listing actions across different services often use 'ls', which makes the CLI more predictable and easier to learn."
}
`;

  try {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: `The user entered the following command: \"${command}\". Please provide your feedback based on the command list.`
            }
        ],
        model: "llama3-8b-8192",
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        stream: false,
        response_format: { type: "json_object" }
    });

    const responseJson = JSON.parse(chatCompletion.choices[0].message.content || "{}");

    return NextResponse.json(responseJson);

  } catch (error) {
    console.error('Error calling Groq API:', error);
    return NextResponse.json({ error: 'Failed to get response from AI mentor.' }, { status: 500 });
  }
}
