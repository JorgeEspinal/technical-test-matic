import './style.css';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import { SyntheticEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { RootState } from '../../../store/reducers';
import {
  createArticle,
  getAllArticle,
  updateArticle,
} from '../../../features/articleAsyncActions';
import { articleActions } from '../../../features/articleSlice';

type Props = {
  classCss?: string;
};

const FormInputsArticle = ({ classCss }: Props) => {
  const dispatch = useAppDispatch();
  const articleEdit = useAppSelector(
    (state: RootState) => state.article.articleEdit
  );

  const [articleData, setArticleData] = useState({
    author: '',
    content: '',
    title: '',
  });

  const onSubmitHandle = (e: SyntheticEvent) => {
    e.preventDefault();

    if (articleEdit.author) {
      dispatch(updateArticle({ ...articleEdit, createdAt: '', imageUrl: '' }));
      dispatch(
        articleActions.addEditArticle({
          id: '',
          author: '',
          content: '',
          title: '',
        })
      );
      dispatch(getAllArticle());
    }

    if (articleData.author && !articleEdit.author) {
      dispatch(createArticle({ ...articleData, createdAt: '', imageUrl: '' }));
      dispatch(getAllArticle());
    }

    setArticleData({
      author: '',
      content: '',
      title: '',
    });
  };

  return (
    <form
      onSubmit={onSubmitHandle}
      className={`form-article${classCss ? ' ' + classCss : ''}`}
    >
      <section className="form-article__controls">
        <div className="form-article__control">
          <Input
            type="text"
            htmlFor="author"
            id="author"
            textLabel="Author"
            value={
              articleEdit.author
                ? articleEdit.author
                : articleData.author
                ? articleData.author
                : ''
            }
            onChange={(e) => {
              if (articleEdit.author)
                dispatch(
                  articleActions.addEditArticle({
                    ...articleEdit,
                    author: e.target.value,
                  })
                );
              else
                setArticleData((prev) => {
                  return { ...prev, author: e.target.value };
                });
            }}
          />
        </div>
        <div className="form-article__control">
          <Input
            type="text"
            htmlFor="title"
            id="title"
            textLabel="Blog Title"
            value={
              articleEdit.author
                ? articleEdit.title
                : articleData.author
                ? articleData.title
                : ''
            }
            onChange={(e) => {
              if (articleEdit.author)
                dispatch(
                  articleActions.addEditArticle({
                    ...articleEdit,
                    title: e.target.value,
                  })
                );
              else
                setArticleData((prev) => {
                  return { ...prev, title: e.target.value };
                });
            }}
          />
        </div>
        <div className="form-article__control">
          <Input
            type="textarea"
            htmlFor="content"
            id="content"
            textLabel="Blog Content"
            value={
              articleEdit.author
                ? articleEdit.content
                : articleData.author
                ? articleData.content
                : ''
            }
            onChangeTextArea={(e) => {
              if (articleEdit.author)
                dispatch(
                  articleActions.addEditArticle({
                    ...articleEdit,
                    content: e.target.value,
                  })
                );
              else
                setArticleData((prev) => {
                  return { ...prev, content: e.target.value };
                });
            }}
          />
        </div>
      </section>
      <section className="form-article__commands">
        <Button
          type="submit"
          text={`${articleEdit.author ? 'Edit' : 'Save'}`}
          classCss="form-article__commands--button-save"
        />
      </section>
    </form>
  );
};

export default FormInputsArticle;
