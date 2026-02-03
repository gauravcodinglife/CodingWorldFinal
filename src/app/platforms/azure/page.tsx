
import { Rocket, Milestone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const curriculum = [
    { title: "Azure Fundamentals & Portal Overview", completed: false },
    { title: "Resource Groups, Subscriptions & Governance", completed: false },
    { title: "Compute (VMs, Scale Sets, App Service)", completed: false },
    { title: "Storage & Databases (Blob, Files, Azure SQL)", completed: false },
    { title: "Networking (VNets, NSGs, VPN)", completed: false },
    { title: "Identity, Security & Monitoring", completed: false },
    { title: "Deploying Apps & CI/CD Basics on Azure", completed: false },
    { title: "Mini Project / Capstone", completed: false },
];

const keyServices = [
    'Resource Manager', 'VMs', 'App Service', 'Azure SQL',
    'Blob Storage', 'Azure Files', 'VNets', 'Azure AD',
    'Azure Monitor', 'Scale Sets', 'VPN Gateway', 'NSGs'
];

export default function AzurePage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-card border border-border/20 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">Microsoft Azure</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Help learners deploy and operate workloads on Microsoft Azure, focusing on core services used in enterprise environments.
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
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Understand Azure Resource Manager concepts.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Deploy and manage virtual machines and App Services.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Use Azure Storage and databases.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Configure networking, identity and security basics.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-headline">Key Services Covered</h2>
        <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
          {keyServices.map(service => (
            <div key={service} className="p-4 bg-card border border-border/20 rounded-lg">
              <p className="font-semibold text-foreground">{service}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold font-headline">Curriculum</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {curriculum.map((item, index) => (
            <div key={index} className={`p-6 rounded-lg flex items-center ${item.completed ? 'bg-primary/10 text-primary' : 'bg-card border border-border/20'}`}>
                <div className={`mr-4 ${item.completed ? '' : 'text-muted-foreground'}`}>
                    {item.completed ? <CheckCircle className="w-8 h-8" /> : <Milestone className="w-8 h-8" />}
                </div>
                <div>
                    <p className={`font-semibold ${item.completed ? '' : 'text-foreground'}`}>{item.title}</p>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
