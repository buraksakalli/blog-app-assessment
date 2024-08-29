import { BlogCard } from "../_components/Card";

import type { Post } from "../_types/blog.types";

type BlogProps = {
  posts: Array<Post>;
};

export const Blog: React.FC<BlogProps> = ({ posts }) => {
  return posts.map((post) => <BlogCard key={post.id} post={post} />);
};
