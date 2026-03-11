"use client";

import Link from "next/link";
import { SparkleIcon } from "lucide-react";
import { Button } from "../ui/button";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center gap-2 font-semibold text-lg group">
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground">
        <SparkleIcon className="size-4" />
      </div>
      <span>Built-It</span>
    </Link>
  );
};

export const Header = () => {
  const { isSignedIn } = useAuth();

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Logo />

        <nav className="flex items-center gap-6">
          <Link
            href="/Home"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Home
          </Link>

          <Link
            href="/Explore"
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Explore
          </Link>

          {!isSignedIn ? (
            <>
              <SignInButton mode="modal">
                <Button variant="ghost">Sign In</Button>
              </SignInButton>

              <SignUpButton mode="modal">
                <Button>Sign Up</Button>
              </SignUpButton>
            </>
          ) : (
            <>
              <Button asChild>
                <Link href="/submit">Submit Project</Link>
              </Button>
              <UserButton />
            </>
          )}
        </nav>
      </div>
    </header>
  );
};