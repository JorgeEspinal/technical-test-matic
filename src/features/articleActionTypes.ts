import { ArticleType } from '../models/article-type';

export type ArticleStateType = {
  articles: ArticleType[];
  loading: boolean;
  error: string | null;
};

export const ArticleNamespace = 'article';

export const ArticleActionTypes = {
  GET_ALL_ARTICLES: `${ArticleNamespace}/GET_ALL_ARTICLE`,
  CREATE_ARTICLE: `${ArticleNamespace}/CREATE_ARTICLE`,
  UPDATE_ARTICLE: `${ArticleNamespace}/UPDATE_ARTICLE`,
  DELETE_ARTICLE: `${ArticleNamespace}/DELETE_ARTICLE`,
};
