import { db } from "@/db/db";
import { productsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

// Function to get all approved products for the homepage
export async function getFeaturedProducts(){
    const productsData = await db.select().from(productsTable).where(eq(productsTable.status, "approved"));
    return productsData;
}