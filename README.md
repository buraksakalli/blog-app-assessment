# Blog App with Next.js + TypeScript + Material-UI

This is a simple blog app built with Next.js, TypeScript, and Material-UI.

## Features

- App caches data using `cache` from `React`
- User can view a list of blog posts
- User can view a single blog post
- User can view comments on a blog post

## Folder Structure

```bash
app
├── _actions
│   └── main.ts
├── _components
│   ├── Card.tsx
│   ├── Comment.tsx
├── _containers
│   ├── Blog.tsx
│   ├── Navbar.tsx
│   _types
│   ├── blog.types.ts
│   ├── comment.type.ts
├── post
│   └── [slug]
│       └── page.tsx
├── layout.tsx
├── page.tsx

```

## Tech Stack

- Next.js
- TypeScript
- Material-UI
- React Testing Library
- Jest

## Getting Started

Update the `.env` file with the following environment variables:

```bash
API_URL=https://jsonplaceholder.typicode.com
```

Then, run the development server:

```bash
yarn dev
# or
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Testing

To run tests, run the following command:

```bash
yarn test
# or
npm run test
```
