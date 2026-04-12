import {productsTable} from "@/db/schema";
import { eq,desc } from "drizzle-orm";
import {db} from "@/db/db";


export async function getFeaturedProducts(){
    const featuredProducts = await db
        .select()
        .from(productsTable)
        .where(eq(productsTable.isFeatured, true))
    return featuredProducts;
}



export async function getRecentlyLaunchedProducts(){
    const recentProducts = await db
        .select()
        .from(productsTable)
        .orderBy(desc(productsTable.createdAt))
        .limit(6);

    return recentProducts;
}