import Link from "next/link";
import React from 'react'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
    return (
        <section className="py-12">
            <div className="max-w-3xl mx-auto text-center space-y-4">

                <Badge>Join thousands of creators sharing their work!</Badge>

                <h1 className="text-3xl font-semibold">
                    Share what you built and discover what&apos;s launching!
                </h1>

                <p className="text-muted-foreground">
                    A community of makers, builders, and creators sharing their projects,
                    products, and ideas.
                </p>

                <div className="flex justify-center gap-3">
                    <Button asChild>
                        <Link href="/submit">Share your project</Link>
                    </Button>

                    <Button asChild variant="secondary">
                        <Link href="/projects">Explore projects</Link>
                    </Button>
                </div>

            </div>
        </section>
    )
}