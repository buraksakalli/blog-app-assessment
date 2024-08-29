export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  imageUrl: string;
};

export type Image = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
