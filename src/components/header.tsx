"use client";

import Link from "next/link";
import { Layers, Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/platforms", label: "Platforms" },
  { href: "/cli", label: "CLI Practice" },
  { href: "/dashboard", label: "Dashboard Demo" },
  { href: "/profile", label: "Profile" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-14 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">Cloud Dojo</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" className="hidden md:inline-flex">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex neon-hover-primary">
              <Link href="/signup">Sign Up</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </nav>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={cn(
            "md:hidden absolute top-14 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-border/40",
            "animate-in fade-in-20 slide-in-from-top-5 duration-300"
          )}
        >
          <nav className="grid gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-lg p-2 transition-colors hover:bg-muted"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 border-t pt-4">
              <Button asChild variant="ghost">
                <Link href="/login" onClick={() => setIsMenuOpen(false)}>Log in</Link>
              </Button>
              <Button asChild>
                <Link href="/signup" onClick={() => setIsMenuOpen(false)}>Sign Up</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
