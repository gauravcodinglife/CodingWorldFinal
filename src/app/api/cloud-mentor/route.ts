'use client';

import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

const getSystemPrompt = (context: string) => {
  let contextInstruction = "";
  switch (context) {
    case 'aws-diagram':
      contextInstruction = "The user is currently viewing an interactive AWS VPC architecture diagram. Your answer should be relevant to VPCs, networking, EC2, RDS, and general AWS architecture principles. Assume they are looking at a diagram showing a public and private subnet.";
      break;
    case 'cli-practice':
      contextInstruction = "The user is on the CLI practice page. They are practicing commands in a simulated terminal. Your answer should relate to common CLI tools (like aws, docker, git, ls, cat) and DevOps workflows. You can provide command examples.";
      break;
    case 'dashboard-demo':
      contextInstruction = "The user is looking at a simulated cloud monitoring dashboard (like CloudWatch). Your answer should focus on observability, metrics, alarms, and troubleshooting common performance issues (e.g., high CPU, memory leaks).";
      break;
    default:
      contextInstruction = "The user is on a general page of the CodingWorld learning platform. Your answer can be about any DevOps, Cloud, or CLI topic.";
  }

  return `You are a Senior DevOps Engineer acting as a \"Cloud Mentor.\" You are part of the CodingWorld learning platform. Your role is to provide clear, expert-level answers to the user's questions. You must provide answers in markdown format.

Your tone should be professional, yet encouraging and helpful, like a trusted colleague.

${contextInstruction}

Always provide concise, accurate, and practical information. If you provide code snippets or commands, use markdown code blocks. Structure your answers logically with headings, lists, or bold text to improve readability.`;
};

export async function POST(req: NextRequest) {
  const { question, context } = await req.json();

  const systemPrompt = getSystemPrompt(context);

  try {
    const chatCompletion = await groq.chat.completions.create({
        messages: [
            {
                role: "system",
                content: systemPrompt
            },
            {
                role: "user",
                content: question
            }
        ],
        model: "llama3-8b-8192",
        temperature: 0.7,
        max_tokens: 1024,
        top_p: 1,
        stream: true,
    });

    // Create a streaming response
    const stream = new ReadableStream({
      async start(controller) {
        for await (const chunk of chatCompletion) {
          const content = chunk.choices[0]?.delta?.content || "";
          controller.enqueue(content);
        }
        controller.close();
      },
    });

    return new Response(stream, {
      headers: { 'Content-Type': 'text/plain' },
    });

  } catch (error) {
    console.error('Error calling Groq API:', error);
    return NextResponse.json({ error: 'Failed to get response from AI mentor.' }, { status: 500 });
  }
}
