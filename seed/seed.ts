import { db } from "../db/db";
import productsTable from "@/db/schema";
import { allProducts } from "./data";

async function seed() {
  await db.insert(productsTable).values(allProducts);

  console.log("Seed data inserted!");
}

seed(); // seed function is called at the end of the file to execute the seeding process.