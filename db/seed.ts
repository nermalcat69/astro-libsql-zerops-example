import { db, Comment } from "astro:db";

// https://astro.build/db/seed
export default async function () {
    await db.insert(Comment).values([
        { author: "Thomas", content: "Hope you like Astro DB!" },
        { author: "David", content: "Enjoy!" },
        { author: "Peter", content: "Enjoy very much!" },
        { author: "Michael", content: "Zerops is great!" },
    ]);
}
