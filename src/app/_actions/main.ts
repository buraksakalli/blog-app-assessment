import { cache } from "react";

import type { Image, Post } from "../_types/blog.types";
import type { Comment } from "../_types/comment.type";

export const getPosts = cache(async (): Promise<Array<Post>> => {
  const res = await fetch(`${process.env.API_URL}/posts`, {
    cache: "force-cache",
  });
  const posts = await res.json();

  const imgRes = await fetch(`${process.env.API_URL}/photos`, {
    cache: "force-cache",
  });

  const imgs = await imgRes.json();

  posts.forEach((post: Post) => {
    const img = imgs.find((img: Image) => img.id === post.id);
    post.imageUrl = img.url;
  });

  return posts;
});

const getCommentsByPostId = cache(
  async (id: number): Promise<Array<Comment>> => {
    const res = await fetch(`${process.env.API_URL}/comments?postId=${id}`, {
      cache: "force-cache",
    });
    return await res.json();
  }
);

export interface PostWithComments extends Post {
  comments: Array<Comment>;
}

export const getPostById = cache(
  async (id: number): Promise<PostWithComments> => {
    const res = await fetch(`${process.env.API_URL}/posts/${id}`, {
      cache: "force-cache",
    });
    const post = await res.json();

    const imgRes = await fetch(`${process.env.API_URL}/photos/${id}`, {
      cache: "force-cache",
    });

    const img = await imgRes.json();

    post.imageUrl = img.url;

    const comments = await getCommentsByPostId(id);
    post.comments = comments;

    return post;
  }
);
