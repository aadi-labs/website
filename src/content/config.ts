import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

// Blog post schema. Every .md file in src/content/blog/ is validated against this.
//
// TODO(sayan): tune the fields below before publishing your first real post.
// Changing the schema after you have many posts requires editing each post's
// frontmatter, so spending 5 minutes here saves hours later.
//
// Questions to decide:
//   - Are tags useful, or are categories enough? (Or neither, if you'll only
//     have ~12 posts/year and post titles are descriptive.)
//   - Single-author forever, or will you have collaborators? (If so, add
//     `author: z.string()` and create a small author table later.)
//   - Do you want hero images / OG card images? (Add `heroImage: z.string().optional()`.)
const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog };
