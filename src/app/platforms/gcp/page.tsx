
import { Rocket, Milestone, CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const curriculum = [
    { title: "GCP Fundamentals & IAM", completed: true },
    { title: "Projects, Billing & Resource Hierarchy", completed: true },
    { title: "Compute Engine & Networking", completed: false },
    { title: "Cloud Storage & Databases (Cloud SQL, Firestore)", completed: false },
    { title: "Serverless (Cloud Functions, Cloud Run)", completed: false },
    { title: "Kubernetes on GCP (GKE – overview)", completed: false },
    { title: "Observability & Cost Management", completed: false },
    { title: "Mini Project / Capstone", completed: false },
];

const keyServices = [
    'IAM', 'Compute Engine', 'Cloud Run', 'GKE', 
    'Cloud Storage', 'Cloud SQL', 'Firestore', 'VPC', 
    'Cloud Monitoring', 'Cloud Logging', 'Resource Manager', 'Billing'
];

export default function GCPPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-card border border-border/20 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold font-headline tracking-tight text-primary">Google Cloud Platform (GCP)</h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Enable learners to build, deploy, and operate workloads on Google Cloud.
            </p>
            <div className="mt-8">
              <Link href="#" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90">
                Continue Learning <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 md:pl-8">
            <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
              <h3 className="text-lg font-bold font-headline mb-4">Learning Outcomes</h3>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Understand GCP resource hierarchy.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Use Compute Engine, Cloud Run, and GKE.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Configure Cloud Storage, Cloud SQL, and Firestore.</li>
                <li className="flex items-start"><CheckCircle className="w-4 h-4 mr-2 mt-1 text-primary" />Manage networking, monitoring, and logging.</li>
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
