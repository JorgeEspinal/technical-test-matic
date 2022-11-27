import { createAsyncThunk } from '@reduxjs/toolkit';
import api, { EndPoints } from '../api/axios';
import { ArticleType } from '../models/article-type';
import { DeleteStatus } from '../models/responseDelete-type';
import { ArticleActionTypes } from './articleActionTypes';

export const getAllArticle = createAsyncThunk(
  ArticleActionTypes.GET_ALL_ARTICLES,
  async () => {
    const response = await api.get<{
      statusCode: string;
      status: string;
      message: string;
      data: ArticleType[];
    }>(`${EndPoints.articles}`);

    return response.data.data;
  }
);

export const createArticle = createAsyncThunk(
  ArticleActionTypes.CREATE_ARTICLE,
  async (article: ArticleType) => {
    const response = await api.post<ArticleType>(
      `${EndPoints.articles}`,
      article
    );
    return response.data;
  }
);

export const deleteArticle = createAsyncThunk(
  ArticleActionTypes.DELETE_ARTICLE,
  async (id: string) => {
    const response = await api.delete<{ id: string }, DeleteStatus>(
      `${EndPoints.articles}/${id}`
    );

    return { id, ...response };
  }
);

export const updateArticle = createAsyncThunk(
  ArticleActionTypes.UPDATE_ARTICLE,
  async (article: ArticleType) => {
    const update = {
      author: article.author,
      title: article.title,
      content: article.content,
    };

    const response = await api.patch<ArticleType>(
      `${EndPoints.articles}/${article.id}`,
      update
    );
    return response.data;
  }
);
