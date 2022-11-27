import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleType } from '../models/article-type';
import { DeleteStatus } from '../models/responseDelete-type';
import { ArticleNamespace, ArticleStateType } from './articleActionTypes';
import {
  createArticle,
  deleteArticle,
  getAllArticle,
  updateArticle,
} from './articleAsyncActions';

const initialState: ArticleStateType = {
  articles: [],
  loading: false,
  error: '',
};

export const articleSlice = createSlice({
  name: ArticleNamespace,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllArticle.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      getAllArticle.fulfilled,
      (state, action: PayloadAction<ArticleType[]>) => {
        state.loading = false;
        state.error = '';
        state.articles = action.payload;
      }
    );
    builder.addCase(getAllArticle.rejected, (state) => {
      state.loading = false;
      state.error = 'Something wrong happened';
    });

    builder.addCase(createArticle.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      createArticle.fulfilled,
      (state, action: PayloadAction<ArticleType>) => {
        state.loading = false;
        state.error = '';
        state.articles.push(action.payload);
      }
    );
    builder.addCase(createArticle.rejected, (state) => {
      state.loading = false;
      state.error = 'Something wrong happened';
    });

    builder.addCase(deleteArticle.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      deleteArticle.fulfilled,
      (state, action: PayloadAction<DeleteStatus>) => {
        state.loading = false;
        state.error = '';
        state.articles = state.articles.filter(
          (article) => article.id !== action.payload.id
        );
      }
    );
    builder.addCase(deleteArticle.rejected, (state) => {
      state.loading = false;
      state.error = 'Something wrong happened';
    });

    builder.addCase(updateArticle.pending, (state) => {
      state.loading = true;
      state.error = '';
    });
    builder.addCase(
      updateArticle.fulfilled,
      (state, action: PayloadAction<ArticleType>) => {
        state.loading = false;
        state.error = '';

        let articleToUpdate = state.articles.find(
          (article) => article.id === action.payload.id
        );

        if (articleToUpdate) articleToUpdate = action.payload;
      }
    );
    builder.addCase(updateArticle.rejected, (state) => {
      state.loading = false;
      state.error = 'Something wrong happened';
    });
  },
});

export const articleActions = articleSlice.actions;
export default articleSlice.reducer;
