import { productsTable } from "@/db/schema";
import { eq, desc } from "drizzle-orm";
import { db } from "@/db/db";
import { cacheLife, cacheTag } from "next/cache";

export async function getFeaturedProducts() {
    'use cache' // NextJS caching enabled
    cacheLife({
        revalidate: 3600, // ✅ 1 hour
    });

    return await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.isFeatured, true));
}

export async function getRecentlyLaunchedProducts() {
    'use cache' // NextJS caching enabled
    cacheLife({
        revalidate: 600, // ✅ 10 minutes
    });

    return await db
        .select()
        .from(productsTable)
        .orderBy(desc(productsTable.createdAt))
        .limit(6);
}