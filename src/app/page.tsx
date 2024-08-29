import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";

import { Blog } from "./_containers/Blog";

import { getPosts } from "./_actions/main";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
        <div>
          <Typography variant="h1" gutterBottom>
            Blog
          </Typography>
          <Typography>
            Stay in the loop with the latest about our products
          </Typography>
        </div>
        <Grid container spacing={2} columns={12}>
          <Blog posts={posts} />
        </Grid>
      </Box>
    </main>
  );
}
