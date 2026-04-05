'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Layers, Menu, X, User, LogOut, BookOpen } from "lucide-react";
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
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/auth-context";

const navLinks = [
  { href: "#platforms", label: "Platforms" },
  { href: "#features", label: "Practice Lab" },
  { href: "#core-features", label: "Simulations" },
  { href: "/interview-prep", label: "Interview Prep" },
  { href: "/roadmaps", label: "Roadmaps" },
];

function getInitials(name: string | null | undefined) {
  if (!name) return "CW";
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, loading, logout } = useAuth();
  const router = useRouter();

  async function handleLogout() {
    await logout();
    router.push("/");
  }

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
            {/* Not loading + not logged in → show login/signup */}
            {!loading && !user && (
              <>
                <Button asChild variant="ghost" className="hidden md:inline-flex text-text hover:bg-white/10">
                  <Link href="/login">Log in</Link>
                </Button>
                <Button asChild className="hidden md:inline-flex bg-btn-gradient text-gray-900 font-bold hover:scale-105 transition-transform">
                  <Link href="/signup">Sign Up</Link>
                </Button>
              </>
            )}

            {/* Logged in → show avatar dropdown */}
            {!loading && user && (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full p-0">
                    <Avatar className="h-9 w-9 border border-white/20">
                      <AvatarFallback className="bg-gradient-to-br from-blue/40 to-violet/40 text-text text-sm font-semibold">
                        {getInitials(user.displayName)}
                      </AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 bg-card border-white/10" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-semibold leading-none text-text">
                        {user.displayName ?? "User"}
                      </p>
                      <p className="text-xs leading-none text-muted-foreground">
                        {user.email}
                      </p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-white/8">
                    <Link href="/profile">
                      <User className="mr-2 h-4 w-4" />
                      <span>My Profile</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer hover:bg-white/8">
                    <Link href="/tracks">
                      <BookOpen className="mr-2 h-4 w-4" />
                      <span>My Courses</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator className="bg-white/10" />
                  <DropdownMenuItem
                    className="cursor-pointer text-red-400 hover:text-red-300 hover:bg-red-400/10"
                    onClick={handleLogout}
                  >
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )}

            {/* Loading skeleton */}
            {loading && (
              <div className="h-9 w-9 rounded-full bg-white/10 animate-pulse" />
            )}

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
              {!loading && !user ? (
                <>
                  <Button asChild variant="ghost" onClick={() => setIsMenuOpen(false)}>
                    <Link href="/login">Log in</Link>
                  </Button>
                  <Button asChild onClick={() => setIsMenuOpen(false)}>
                    <Link href="/signup">Sign Up</Link>
                  </Button>
                </>
              ) : !loading && user ? (
                <>
                  <Link
                    href="/profile"
                    className="flex items-center gap-2 rounded-lg p-2 text-body hover:bg-white/10"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <User size={16} /> My Profile
                  </Link>
                  <button
                    className="flex items-center gap-2 rounded-lg p-2 text-red-400 hover:bg-red-400/10 text-left"
                    onClick={() => { setIsMenuOpen(false); handleLogout(); }}
                  >
                    <LogOut size={16} /> Log out
                  </button>
                </>
              ) : null}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
