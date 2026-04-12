import { db } from "@/db/db";
import { productsTable } from "@/db/schema";
import { allProducts } from "./data";

async function seed() {
    // ✅ CLEAR OLD DATA
    await db.delete(productsTable);

    // ✅ INSERT FRESH DATA
    await db.insert(productsTable).values(
        allProducts.map((product) => ({
            name: product.name,
            slug: product.slug,
            tagline: product.tagline,
            description: product.description,
            websiteUrl: product.websiteUrl,
            tags: product.tags,
            voteCount: product.voteCount,
            isFeatured: product.isFeatured,
            status: "approved",
            createdAt: new Date(),
        }))
    );

    console.log("Seed data inserted!");
}

seed();