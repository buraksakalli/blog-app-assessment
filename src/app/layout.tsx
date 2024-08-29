import { Container, CssBaseline } from "@mui/material";
import { Inter } from "next/font/google";

import { Navbar } from "./_containers/Navbar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blog App with Next.js",
  description: "A blog app built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CssBaseline />
        <Container
          maxWidth="lg"
          component="main"
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 24,
            mb: 16,
            gap: 4,
          }}
        >
          <Navbar />
          {children}
        </Container>
      </body>
    </html>
  );
}
