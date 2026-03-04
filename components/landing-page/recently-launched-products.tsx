import React from "react";
import { ProductCard } from "../products/product-card";
const recentlyLaunchedProducts = [
  {
    id: 5,
    name: "Developer to Leader",
    description: "A course on Data Engineering and Leadership.",
    tags: ["Course", "Leadership"],
    votes: 489,
    isFeatured: true,
  },
  {
    id: 6,
    name: "DataStack Insights",
    description: "A newsletter on data engineering trends.",
    tags: ["Newsletter", "Data Engineering"],
    votes: 320,
    isFeatured: false,
  },
];

export const RecentlyLaunchedProducts = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Recently Launched Products</h2>
      {/* Placeholder for recently launched products */}
      {recentlyLaunchedProducts.length<=0?(
        <p className="text-muted-foreground">No products launched recently.</p>
      ) :  
        recentlyLaunchedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </div>
  );
};
