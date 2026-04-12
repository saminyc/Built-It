import React from "react";
import Link from "next/link";
import { ChevronUp } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Product = {
  id: number;
  name: string;
  description: string | null;
  tags: string[] | null;
  voteCount: number;
  createdAt: Date;
  status: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
  return (
      <Link href={`/products/${product.id}`} className="block">
        <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {product.name}
              </CardTitle>
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <ChevronUp className="h-4 w-4" />
                {product.voteCount} {/* ✅ FIXED */}
              </div>
            </div>

            <CardDescription>
              {product.description}
            </CardDescription>

            <div className="flex flex-wrap gap-2">
              {product.tags?.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
              ))}
            </div>
          </CardHeader>

          <CardFooter>
            <Button variant="ghost" size="sm">
              View Product
            </Button>
          </CardFooter>
        </Card>
      </Link>
  );
};