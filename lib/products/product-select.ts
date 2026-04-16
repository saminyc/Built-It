import { db } from "@/db/db";
import { productsTable } from "@/db/schema";
import { desc, eq, gte, and } from "drizzle-orm";
import { cacheLife } from "next/cache";

// ✅ Featured products (approved + featured, sorted by votes)
export async function getFeaturedProducts() {
    "use cache";

    cacheLife({ revalidate: 3600 }); // 1 hour

    return await db
        .select()
        .from(productsTable)
        .where(
            and(
                eq(productsTable.status, "approved"),
                eq(productsTable.isFeatured, true)
            )
        )
        .orderBy(desc(productsTable.voteCount));
}

// ✅ Recently launched products (last 7 days)
export async function getRecentlyLaunchedProducts() {
    "use cache";

    cacheLife({ revalidate: 600 }); // 10 minutes

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    return await db
        .select()
        .from(productsTable)
        .where(
            and(
                eq(productsTable.status, "approved"),
                gte(productsTable.createdAt, oneWeekAgo)
            )
        )
        .orderBy(desc(productsTable.createdAt))
        .limit(6);
}