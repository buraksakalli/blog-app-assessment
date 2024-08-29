import Link from "next/link";
import { Book, Home } from "@mui/icons-material";

export const Navbar = () => {
  return (
    <nav className=" flex items-center gap-6">
      <Link href="/" className="flex items-center gap-2">
        <Home />
        Home
      </Link>
      <Link href="/">
        <Book />
        Blog
      </Link>
    </nav>
  );
};
