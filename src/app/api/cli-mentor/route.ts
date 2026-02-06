import { NextRequest, NextResponse } from 'next/server';

// Predefined explanations for common commands
const staticExplanations: Record<string, { explanation: string; syntax: string; nextCommand: string; miniTheory: string; }> = {
  'ls': {
    explanation: 'The "ls" command lists files and directories in the current directory.',
    syntax: 'ls [options] [path]',
    nextCommand: 'Try "ls -a" to see all files, including hidden ones.',
    miniTheory: '"ls" is one of the most fundamental commands, inherited from Unix. It demonstrates the core concept of navigating and inspecting the file system from the command line.'
  },
  'whoami': {
    explanation: 'Displays the username of the current user.',
    syntax: 'whoami',
    nextCommand: 'Try `pwd` to see your current directory.',
    miniTheory: 'User context is crucial in multi-user operating systems for managing permissions and security.'
  },
  'date': {
    explanation: 'Shows the current date and time.',
    syntax: 'date',
    nextCommand: 'On Linux/macOS, you can format the output. Try `date "+%Y-%m-%d"`.',
    miniTheory: 'Accurate timekeeping is critical for logging, file timestamps, and scheduling automated tasks.'
  },
  'clear': {
    explanation: 'Clears the terminal screen, moving the prompt to the top.',
    syntax: 'clear',
    nextCommand: 'After clearing, try `history` to see your past commands.',
    miniTheory: 'A clean workspace can help you focus. This is the command-line equivalent of tidying your desk!'
  },
  'help': {
    explanation: 'Displays a list of available commands.',
    syntax: 'help',
    nextCommand: 'Try running one of the commands from the help list, like `ls`.',
    miniTheory: 'The `help` command is your best friend when learning a new command-line interface.'
  }
};

export async function POST(req: NextRequest) {
  try {
    const { command } = await req.json();
    const cleanCommand = command.toLowerCase().trim();

    const responseData = staticExplanations[cleanCommand];

    if (responseData) {
      return NextResponse.json(responseData);
    } else {
      // Fallback for commands not in our static list
      return NextResponse.json({
        explanation: `I don't have a specific explanation for "${command}" right now. It appears to be a valid command.`,
        syntax: command,
        nextCommand: "Try 'help' to see a list of commands I can explain.",
        miniTheory: "Many commands have a '--help' flag (e.g., `ls --help`) that provides detailed usage information directly in the terminal."
      });
    }
  } catch (error) {
    console.error('An unexpected error occurred in cli-mentor API:', error);
    return NextResponse.json({ 
      explanation: 'An internal error occurred. Please try again later.',
      syntax: "",
      nextCommand: "",
      miniTheory: ""
    }, { status: 500 });
  }
}
