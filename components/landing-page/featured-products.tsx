import React from "react";
import Link from "next/link";
import { Star, ArrowUp } from "lucide-react";
import { SectionHeader } from "../common/section-header";
import { Button } from "../ui/button";
import { ProductCard } from "../products/product-card";
import { getFeaturedProducts } from "@/lib/products/product-select";
import type { InferSelectModel } from "drizzle-orm";
import productsTable from "@/db/schema";

// DB type
type Product = InferSelectModel<typeof productsTable>;

const FeaturedProducts = async () => {
  const featuredProducts = await getFeaturedProducts();

  return (
      <section className="py-20 bg-gray-50">
        <div className="wrapper">
          <div className="flex items-center justify-between mb-8">
            <SectionHeader
                title="Featured Today"
                icon={Star}
                description="Top picks from our community this week."
            />

            <Button variant="default" asChild className="hidden sm:flex mr-4">
              <Link href="/explore" className="flex items-center gap-2">
                View All
                <ArrowUp className="size-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
                <ProductCard
                    key={product.id}
                    product={{
                      id: product.id,
                      name: product.name,
                      description: product.description || "",
                      tags: product.tags || [],
                      votes: product.voteCount,
                      isFeatured: product.status === "approved",
                    }}
                />
            ))}
          </div>
        </div>
      </section>
  );
};

export default FeaturedProducts;