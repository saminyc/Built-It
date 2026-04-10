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
type ProductUI = {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
};

export const ProductCard = ({ product }: { product: ProductUI }) => {
  return (
      <Link href={`/products/${product.id}`} className="block">
        <Card className="h-full transition-all duration-200 hover:shadow-md hover:-translate-y-1 cursor-pointer">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg font-semibold">
                {product.name}
              </CardTitle>

              {product.isFeatured && (
                  <Badge variant="default" className="text-xs">
                    Featured
                  </Badge>
              )}
            </div>

            <CardDescription className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </CardDescription>

            <div className="flex items-center gap-2 mt-2">
              <Button size="icon-sm" variant="secondary">
                <ChevronUp />
              </Button>

              <div>{product.votes}</div>
            </div>
          </CardHeader>

          <CardFooter className="flex flex-wrap gap-2 pt-2">
            {product.tags?.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
            ))}
          </CardFooter>
        </Card>
      </Link>
  );
};