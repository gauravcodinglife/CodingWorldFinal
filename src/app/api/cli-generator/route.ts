import { NextRequest, NextResponse } from 'next/server';
import Groq from 'groq-sdk';

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  const systemPrompt = `You are an expert in DevOps and command-line interfaces. Your task is to take a user's description of a task in plain English and convert it into the precise CLI command.

- You should support a wide range of commands, including but not limited to: \`aws\`, \`gcloud\`, \`docker\`, \`kubectl\`, \`git\`, and standard Linux/bash commands.
- The user will provide a prompt describing what they want to do.
- You must return a single, executable command that accomplishes the user's goal.
- Your response should be a JSON object containing only one key, "command", whose value is the generated command string.
- Do not add any explanations, introductory text, or markdown formatting. Just the raw command.

Example User Prompt: "create a new s3 bucket called my-test-bucket in the us-east-1 region"

Your Response:
{
  "command": "aws s3api create-bucket --bucket my-test-bucket --region us-east-1"
}

Example User Prompt: "list all running docker containers"

Your Response:
{
  "command": "docker ps"
}

Example User Prompt: "show me the commit history for the current git branch"

Your Response:
{
  "command": "git log"
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
                content: `Generate the command for the following task: "${prompt}"`
            }
        ],
        model: "llama3-8b-8192",
        temperature: 0.2, // Lower temperature for more deterministic output
        max_tokens: 150,
        top_p: 1,
        stream: false,
        response_format: { type: "json_object" }
    });

    const responseJson = JSON.parse(chatCompletion.choices[0].message.content || "{}");

    return NextResponse.json(responseJson);

  } catch (error) {
    console.error('Error calling Groq API:', error);
    return NextResponse.json({ error: 'Failed to generate command.' }, { status: 500 });
  }
}
