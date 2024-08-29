"use client";

import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { BlogCard } from "../_components/Card";

import type { Post } from "../_actions/main";

type BlogProps = {
  posts: Array<Post>;
};

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  const defaultTheme = createTheme({ palette: { mode: "dark" } });

  return (
    <ThemeProvider theme={defaultTheme}>
      {posts.map((post) => (
        <BlogCard key={post.id} post={post} />
      ))}
    </ThemeProvider>
  );
};
