import { getPosts } from "@/app/_actions/main";

global.fetch = jest.fn();

jest.mock("react", () => ({
  ...jest.requireActual("react"),
  cache: jest.fn((fn) => fn),
}));

describe("getPosts", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should fetch posts and images, and return posts with image URLs", async () => {
    process.env.API_URL = "https://jsonplaceholder.typicode.com";

    const postsResponse = [
      { id: 1, title: "Post 1", body: "Body of post 1" },
      { id: 2, title: "Post 2", body: "Body of post 2" },
    ];

    const imagesResponse = [
      { id: 1, url: "https://via.placeholder.com/150/92c952" },
      { id: 2, url: "https://via.placeholder.com/150/771796" },
    ];

    (fetch as jest.Mock).mockImplementation((url: string) => {
      if (url.endsWith("/posts")) {
        return Promise.resolve({
          json: () => Promise.resolve(postsResponse),
        });
      }
      if (url.endsWith("/photos")) {
        return Promise.resolve({
          json: () => Promise.resolve(imagesResponse),
        });
      }
      return Promise.reject(new Error("Unknown API endpoint"));
    });

    const result = await getPosts();

    expect(fetch).toHaveBeenCalledTimes(2);
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/posts",
      {
        cache: "force-cache",
      }
    );
    expect(fetch).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/photos",
      {
        cache: "force-cache",
      }
    );

    expect(result).toEqual([
      {
        id: 1,
        title: "Post 1",
        body: "Body of post 1",
        imageUrl: "https://via.placeholder.com/150/92c952",
      },
      {
        id: 2,
        title: "Post 2",
        body: "Body of post 2",
        imageUrl: "https://via.placeholder.com/150/771796",
      },
    ]);
  });
});
