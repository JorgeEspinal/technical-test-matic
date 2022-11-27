import { combineReducers } from '@reduxjs/toolkit';
import articleSlice from '../features/articleSlice';

const injectReducer = {
  article: articleSlice,
};

const rootReducer = combineReducers({
  ...injectReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export const createReducer = () => rootReducer;
