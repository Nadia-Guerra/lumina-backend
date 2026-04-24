import "dotenv/config";
import { defineConfig, env } from "prisma/config";

export default defineConfig({
    schema: "prisma/schema.prisma", // Path to your schema
    datasource: {
        url: env("DATABASE_URL"), // Or use process.env.DATABASE_URL
    },
});
