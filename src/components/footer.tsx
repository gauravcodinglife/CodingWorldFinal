import { Layers } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  platforms: [
    { href: "/platforms/aws", label: "AWS" },
    { href: "/platforms/gcp", label: "GCP" },
    { href: "/platforms/azure", label: "Azure" },
  ],
  labs: [
    { href: "/cli", label: "CLI" },
    { href: "/simulation", label: "Simulations" },
  ],
  company: [
    { href: "/#about", label: "About" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/terms-of-service", label: "Terms & Conditions" },
  ],
};

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 mt-12 py-12">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <Link href="/" className="flex items-center space-x-2 mb-4">
            <Layers className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">CodingWorld</span>
          </Link>
          <p className="text-sm text-muted">
            Learn by doing. Master cloud technologies through hands-on practice.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Platforms</h4>
          <ul className="space-y-2">
            {footerLinks.platforms.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-body hover:text-text transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Practice Labs</h4>
          <ul className="space-y-2">
            {footerLinks.labs.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-body hover:text-text transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Company</h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-body hover:text-text transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-white/10 text-center text-sm text-muted">
        <p>&copy; {new Date().getFullYear()} CodingWorld. All rights reserved.</p>
      </div>
    </footer>
  );
}
