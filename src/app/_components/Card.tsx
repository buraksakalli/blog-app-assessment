"use client";

import { useState } from "react";
import Link from "next/link";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

import type { Post } from "../_actions/main";

const SyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  "&:hover": {
    backgroundColor: "transparent",
    cursor: "pointer",
  },
  "&:focus-visible": {
    outline: "3px solid",
    outlineColor: "hsla(210, 98%, 48%, 0.5)",
    outlineOffset: "2px",
  },
}));

const SyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  gap: 4,
  padding: 16,
  flexGrow: 1,
  "&:last-child": {
    paddingBottom: 16,
  },
});

const StyledTypography = styled(Typography)({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 2,
  overflow: "hidden",
  textOverflow: "ellipsis",
});

type BlogCardProps = {
  post: Post;
};

export const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  const [focusedCard, setFocusedCard] = useState<boolean>(false);

  return (
    <Grid size={{ xs: 12, md: 6 }}>
      <Link href={`/post/${post.id}`} passHref>
        <SyledCard
          variant="outlined"
          onFocus={() => setFocusedCard(true)}
          onBlur={() => {
            setFocusedCard(false);
          }}
          tabIndex={0}
          className={focusedCard ? "Mui-focused" : ""}
        >
          <CardMedia
            component="img"
            alt="green iguana"
            image={post.imageUrl}
            aspect-ratio="16 / 9"
            sx={{
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
          />
          <SyledCardContent>
            <Typography gutterBottom variant="h6" component="div">
              {post.title}
            </Typography>
            <StyledTypography
              variant="body2"
              color="text.secondary"
              gutterBottom
            >
              {post.body}
            </StyledTypography>
          </SyledCardContent>
        </SyledCard>
      </Link>
    </Grid>
  );
};
