
import { Milestone, CheckCircle, ArrowRight, Book, ShieldCheck, Star } from "lucide-react";
import Link from "next/link";
import { tracks } from "@/lib/learning-tracks";
import { Explainer } from "@/components/explainer";

// Placeholder for a new component that can be created later
const TerminalPracticeBox = ({ commands }: { commands: string[] }) => (
  <div className="bg-gray-900 text-white p-4 rounded-lg my-4 font-mono text-sm">
    <p className="text-gray-400">// AWS CLI Practice</p>
    {commands.map((cmd, i) => (
      <p key={i}><span className="text-green-400">$</span> {cmd}</p>
    ))}
  </div>
);

// Placeholder for a new component
const RealDevOpsScenario = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 my-4 rounded-r-lg">
    <p className="font-bold">🔧 In a Real Job:</p>
    <p>{children}</p>
  </div>
);

export default function AwsPage() {

  const track = tracks.find(t => t.id === 'aws');

  if (!track) {
    return <div>Track not found</div>;
  }

  const { title, description, skills, modules, labs, capstone } = track;
  const totalLessons = modules[0].lessons.length;
  const completedLessons = modules[0].lessons.filter(l => l.completed).length;

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-card border border-border/20 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">{title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
            <div className="mt-8">
              <Link href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
                Start Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold font-headline mb-4">Learning Outcomes</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Understand core AWS services.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Provision and manage infrastructure.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Deploy applications on AWS.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Monitor and troubleshoot AWS environments.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-headline">Key Concepts</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map(skill => (
            <Explainer key={skill} serviceName={skill}>
              <div className="p-6 bg-card border border-border/20 rounded-lg flex flex-col gap-4 hover:bg-primary/10 cursor-pointer">
                <p className="font-semibold text-foreground text-lg">{skill}</p>
              </div>
            </Explainer>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold font-headline">AWS Roadmap</h2>
            <div className="text-right">
                <p className="font-semibold">Progress: {completedLessons} / {totalLessons} topics completed</p>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${(completedLessons/totalLessons) * 100}%` }}></div>
                </div>
            </div>
        </div>

        <div className="space-y-8">
          {modules[0].lessons.map((lesson, index) => (
            <div key={index}>
              <div className={`p-6 rounded-lg border ${lesson.completed ? 'border-primary/30 bg-primary/5' : 'bg-card border-border/20'}`}>
                <div className="flex justify-between">
                  <div>
                    <div className="flex items-center mb-2">
                      {lesson.completed ? <CheckCircle className="w-6 h-6 text-primary mr-2" /> : <Milestone className="w-6 h-6 text-muted-foreground mr-2" />}
                      <h3 className="text-xl font-bold font-headline">{index + 1}. {lesson.title}</h3>
                    </div>
                    <p className="text-muted-foreground ml-8">{lesson.subtitle}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-muted-foreground">{lesson.duration}</p>
                    <span className={`inline-block mt-1 px-2 py-1 text-xs font-semibold rounded-full ${lesson.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' : lesson.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'}`}>
                      {lesson.difficulty}
                    </span>
                  </div>
                </div>
                <div className="ml-8 mt-4">
                  <p className="font-semibold">🎯 What you'll be able to do:</p>
                  <p className="text-muted-foreground">{lesson.objective}</p>
                </div>
                <div className="ml-8 mt-6">
                    <h4 className="font-semibold">A) Problem First (real world)</h4>
                    <p className="text-muted-foreground">You need to deploy a web application, but you don't want to manage physical servers.</p>
                    
                    <h4 className="font-semibold mt-4">B) Concept</h4>
                    <p className="text-muted-foreground">Let's learn how to launch a virtual server (EC2 instance) in the AWS cloud using the AWS CLI.</p>

                    <h4 className="font-semibold mt-4">C) Visual Terminal Demo</h4>
                    <TerminalPracticeBox commands={['aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --instance-type t2.micro', 'aws ec2 describe-instances']} />

                    <h4 className="font-semibold mt-4">D) Hands-on Task</h4>
                    <p className="text-muted-foreground">Launch your first EC2 instance.</p>
                    <TerminalPracticeBox commands={['aws ec2 run-instances --image-id ami-0c55b159cbfafe1f0 --count 1 --instance-type t2.micro --key-name MyKeyPair --security-group-ids sg-0123456789abcdef0']} />

                    <h4 className="font-semibold mt-4">E) Expected Output</h4>
                    <div className="bg-gray-900 text-white p-4 rounded-lg my-4 font-mono text-sm">
                        <p>"InstanceId": "i-0123456789abcdef0"</p>
                    </div>

                    <h4 className="font-semibold mt-4">F) Mini Challenge</h4>
                    <p className="text-muted-foreground">How would you terminate the EC2 instance you just created?</p>
                    
                    <h4 className="font-semibold mt-4">G) Interview Question</h4>
                    <p className="text-muted-foreground">What is the difference between an Amazon Machine Image (AMI) and an EC2 instance?</p>

                    <RealDevOpsScenario>
                        DevOps engineers use AWS to build scalable and resilient infrastructure for their applications. They use services like EC2, S3, and RDS to host everything from simple websites to complex microservices architectures.
                    </RealDevOpsScenario>
                </div>
              </div>
              {(index === 2 || index === 5) && labs &&
                <div className="mt-8">
                    <div className="p-6 rounded-lg border border-dashed border-primary/50 bg-primary/5">
                        <div className="flex items-center mb-2">
                            <Book className="w-6 h-6 text-primary mr-2" />
                            <h3 className="text-xl font-bold font-headline">{labs[index === 2 ? 0 : 1].title}</h3>
                        </div>
                        <p className="text-muted-foreground ml-8">{labs[index === 2 ? 0 : 1].description}</p>
                    </div>
                </div>
              }
            </div>
          ))}

          {capstone && 
            <div className="mt-8">
                <div className="p-6 rounded-lg border-2 border-primary bg-primary/10">
                    <div className="flex items-center mb-2">
                        <Star className="w-6 h-6 text-primary mr-2" />
                        <h3 className="text-2xl font-bold font-headline">{capstone.title}</h3>
                    </div>
                    <p className="text-muted-foreground ml-8">{capstone.description}</p>
                    <div className="ml-8 mt-4">
                        <h4 className="font-semibold">Tasks:</h4>
                        <ul className="list-disc list-inside text-muted-foreground">
                            {capstone.tasks.map((task, i) => <li key={i}>{task}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
}
