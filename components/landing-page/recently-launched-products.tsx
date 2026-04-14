
import React from "react";
import { ProductCard } from "../products/product-card";
import { getRecentlyLaunchedProducts } from "@/lib/products/product-select";

const RecentlyLaunchedProducts = async () => {
    "use cache" // caching components
    const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();

  return (
      <div>
        <h2 className="text-2xl font-bold mb-4">
          Recently Launched Products
        </h2>

        {recentlyLaunchedProducts.length === 0 ? (
            <p className="text-muted-foreground">
              No products launched recently.
            </p>
        ) : (
            recentlyLaunchedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))
        )}
      </div>
  );
};

export default RecentlyLaunchedProducts;