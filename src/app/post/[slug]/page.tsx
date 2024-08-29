import { notFound } from "next/navigation";
import { Box, CardMedia, Typography } from "@mui/material";

import { Comment } from "@/app/_components/Comment";

import { getPostById } from "@/app/_actions/main";

export default async function PostPage({
  params,
}: {
  params: {
    slug: number;
  };
}) {
  if (!params.slug) return notFound();

  const post = await getPostById(params.slug);

  if (!post.id) return notFound();

  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div>
          <CardMedia
            component="img"
            alt="green iguana"
            image={post.imageUrl}
            aspect-ratio="16 / 9"
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
              maxHeight: 400,
              marginBottom: 5,
            }}
          />
          <Typography variant="h2" className="font-bold">
            {post.title}
          </Typography>
          <Typography>{post.body}</Typography>
        </div>

        {post.comments.length > 0 && (
          <>
            <Typography variant="h3" className="font-bold">
              Comments ({post.comments.length})
            </Typography>
            <Box>
              <div className="space-y-4">
                {post.comments.map((comment) => (
                  <Comment key={comment.id} comment={comment} />
                ))}
              </div>
            </Box>
          </>
        )}
      </Box>
    </main>
  );
}
