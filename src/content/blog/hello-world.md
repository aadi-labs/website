---
title: "Hello, world"
description: "A sample post so you can see the layout. Delete or rewrite when you publish for real."
pubDate: 2026-05-18
tags: ["meta"]
draft: true
---

This is a sample post. It's marked `draft: true`, so it won't appear on the
blog index or in the RSS feed until you flip the flag.

## How posts work

Each `.md` file in `src/content/blog/` is one post. The filename (minus the
extension) becomes the URL slug — so this file lives at `/blog/hello-world/`
when published.

You can use standard Markdown:

- **Bold** and *italic*.
- [Links](https://aadilabs.com).
- Code: `npm run dev`.

```ts
// Code blocks get syntax highlighting out of the box.
const greeting = "Hello, world";
```

## Publishing checklist

1. Set `draft: false` in the frontmatter above.
2. Update `pubDate` to today.
3. Commit and deploy.
