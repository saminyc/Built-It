import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { config } from "dotenv";

config({ path: ".env" }); // or .env.local


if(!process.env.DATABASE_URL) { // Check if DATABASE_URL is defined in environment variables
throw new Error("DATABASE_URL is not defined in environment variables");    
}

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
