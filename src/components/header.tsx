'use client';

import Link from "next/link";
import { Layers, Menu, X, User } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const navLinks = [
  { href: "#platforms", label: "Platforms" },
  { href: "#features", label: "Practice Lab" },
  { href: "#core-features", label: "Simulations" },
  { href: "/interview-prep", label: "Interview Prep" },
  { href: "/roadmaps", label: "Roadmaps" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-bg/70 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Layers className="h-6 w-6 text-primary" />
          <span className="font-bold font-headline">CodingWorld</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors text-body hover:text-text"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Button asChild variant="ghost" className="hidden md:inline-flex text-text hover:bg-white/10">
              <Link href="/login">Log in</Link>
            </Button>
            <Button asChild className="hidden md:inline-flex bg-btn-gradient text-gray-900 font-bold hover:scale-105 transition-transform">
              <Link href="/signup">Sign Up</Link>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
                    <AvatarFallback>CW</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">CodingWorld_User</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      user@codingworld.com
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/profile">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

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
            "md:hidden absolute top-16 left-0 w-full bg-bg/95 backdrop-blur-lg",
            "animate-in fade-in-20 slide-in-from-top-5 duration-300"
          )}
        >
          <nav className="grid gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="flex items-center rounded-lg p-2 transition-colors text-body hover:bg-white/10 hover:text-text"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-2 mt-2 border-t border-white/10 pt-4">
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
