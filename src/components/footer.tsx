import { Layers } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">CodingWorld</span>
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} CodingWorld. All rights reserved.
        </p>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
           <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</Link>
           <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
