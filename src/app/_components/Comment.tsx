import { Box, Typography } from "@mui/material";

import type { Comment as CommentType } from "../_types/comment.type";

type CommentProps = {
  comment: CommentType;
};

export const Comment: React.FC<CommentProps> = ({ comment }) => {
  return (
    <Box>
      <div>
        <Typography variant="h5">{comment.name}</Typography>
        <Typography variant="subtitle1">{comment.email}</Typography>
      </div>
      <Typography>{comment.body}</Typography>
    </Box>
  );
};
