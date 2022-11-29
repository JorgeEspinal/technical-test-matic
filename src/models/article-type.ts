export type ArticleType = {
  id?: string;
  author: string;
  title: string;
  content: string;
  imageUrl: string;
  createdAt: string;
  updatedAt?: string;
  command?: string;
};

export type ArticleEditType = {
  id: string;
  author: string;
  title: string;
  content: string;
};
