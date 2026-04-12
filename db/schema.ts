import { integer, pgTable, serial, text, timestamp, varchar, json, uniqueIndex, index, boolean } from 'drizzle-orm/pg-core';

// ===========Products Table==========
export const productsTable = pgTable(
    "products",
    {
        id: serial("id").primaryKey(),

        name: varchar("name", { length: 120 }).notNull(),

        slug: varchar("slug", { length: 140 }).notNull(),

        tagline: varchar("tagline", { length: 200 }),

        description: text("description"),

        // Links & media
        websiteUrl: text("website_url"),
        tags: json("tags").$type<string[]>(),

        // Voting
        voteCount: integer("vote_count").notNull().default(0),

        // Metadata
        createdAt: timestamp("created_at", { withTimezone: true })
            .defaultNow()
            .notNull(),

        approvedAt: timestamp("approved_at", { withTimezone: true }),

        status: varchar("status", { length: 20 })
            .notNull()
            .default("pending"),
        isFeatured: boolean("is_featured").default(false),

        submittedBy: varchar("submitted_by", { length: 120 })
            .default("anonymous"),

        userId: varchar("user_id", { length: 255 }),

        organizationId: varchar("organization_id", { length: 255 }),
    },
    (table) => ({ // indexing columns that will be used to run queries for
        slugIdx: uniqueIndex("products_slug_idx").on(table.slug),
        statusIdx: index("products_status_idx").on(table.status),
        organizationIdx: index("products_organization_idx").on(table.organizationId)
    })
);
