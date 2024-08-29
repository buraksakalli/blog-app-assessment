import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import { Comment } from "@/app/_components/Comment";
import { Comment as CommentType } from "@/app/_types/comment.type";

describe("Comment Component", () => {
  const mockComment: CommentType = {
    postId: 1,
    id: 1,
    name: "Test User",
    email: "testuser@example.com",
    body: "This is a test comment body.",
  };

  it("should render the comment with name, email, and body", () => {
    render(<Comment comment={mockComment} />);

    expect(screen.getByText("Test User")).toBeInTheDocument();
    expect(screen.getByText("testuser@example.com")).toBeInTheDocument();
    expect(
      screen.getByText("This is a test comment body.")
    ).toBeInTheDocument();
  });

  it("should render the name with the correct variant", () => {
    render(<Comment comment={mockComment} />);

    const nameElement = screen.getByText("Test User");
    expect(nameElement.tagName).toBe("H5");
  });

  it("should render the email with the correct variant", () => {
    render(<Comment comment={mockComment} />);

    const emailElement = screen.getByText("testuser@example.com");
    expect(emailElement.tagName).toBe("H6");
  });
});
