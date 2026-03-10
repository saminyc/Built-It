import Link from "next/link";
import { SparkleIcon, CircleUser } from "lucide-react";
import { Button } from "../ui/button";

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 font-semibold text-lg group"
    >
      <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground transition-transform group-hover:scale-110">
        <SparkleIcon className="size-4" />
      </div>
      <span className="tracking-tight">Built-It</span>
    </Link>
  );
};

export const Header = () => {
  const isSignedIn =true; // Replace with actual authentication logic

  return (
    <header className="w-full border-b bg-background/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <Logo />

        <nav className="flex items-center gap-6">
          <Link
            href="/Home"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Home
          </Link>

          <Link
            href="/Explore"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Explore
          </Link>

          {isSignedIn ? (
            <>
            <Button asChild>
              <Link href="/submit">Submit Project</Link>
            </Button>
            {/* Clerk User Icon Placeholder */}
            <Button variant={"ghost"}>
                <CircleUser className="size-4"/>
            </Button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost">Sign In</Button>
              <Button variant="outline">Sign Up</Button>
            </div>
          )}
        </nav>

      </div>
    </header>
  );
};