import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

import './style.css';
import { ArticleType } from '../../../models/article-type';
import { useAppDispatch, useAppSelector } from '../../../store/configureStore';
import { RootState } from '../../../store/reducers';
import {
  deleteArticle,
  getAllArticle,
} from '../../../features/articleAsyncActions';
import { articleActions } from '../../../features/articleSlice';

const columnHelper = createColumnHelper<ArticleType>();

const TableArticles = () => {
  const articles = useAppSelector((state: RootState) => state.article.articles);
  const dispatch = useAppDispatch();

  const onDelete = (id: string | undefined) => {
    if (id) {
      dispatch(deleteArticle(id));
      dispatch(getAllArticle());
    }
  };

  const onEdit = (article: ArticleType) => {
    if (article && article.id) {
      dispatch(
        articleActions.addEditArticle({
          author: article.author,
          title: article.title,
          content: article.content,
          id: article.id,
        })
      );
    }
  };

  const columns = [
    columnHelper.accessor('author', {
      cell: (info) => info.getValue(),
      header: 'Author',
    }),
    columnHelper.accessor('title', {
      cell: (info) => info.getValue(),
      header: 'Title',
    }),
    columnHelper.accessor('content', {
      cell: (info) => info.getValue(),
      header: 'Content',
    }),
    columnHelper.accessor('createdAt', {
      cell: (info) => {
        try {
          const date = new Date(info.getValue());
          const formatDate = new Intl.DateTimeFormat('en-us').format(date);

          return formatDate;
        } catch (error) {}
      },
      header: 'Date',
    }),
    columnHelper.accessor('command', {
      cell: (info) => {
        const article = info.row.original;
        const content = (
          <div className="table-data__command">
            <span
              className="table-data__command--delete"
              onClick={() => onDelete(article.id)}
            >
              Delete
            </span>
            <span
              className="table-data__command--edit"
              onClick={() => onEdit(article)}
            >
              Edit
            </span>
          </div>
        );

        return content;
      },
      header: '',
    }),
  ];

  const table = useReactTable({
    data: articles,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const rows = table.getRowModel().rows.map((row) => (
    <tr key={row.id}>
      {row.getVisibleCells().map((cell) => {
        const idColumn = cell.id.split('_')[1];
        let cssClass = '';
        switch (idColumn) {
          case 'author':
            cssClass = 'table-data__author';
            break;
          case 'title':
            cssClass = 'table-data__title';
            break;
          case 'content':
            cssClass = 'table-data__content';
            break;
          case 'createdAt':
            cssClass = 'table-data__date';
            break;
          case 'command':
            cssClass = 'table-data__commands';
            break;
        }

        return (
          <td
            key={cell.id}
            className={`table-data__global${cssClass ? ' ' + cssClass : ''}`}
          >
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </td>
        );
      })}
    </tr>
  ));

  return (
    <table className="table">
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => {
              const idColumn = header.id;
              let cssClass = '';

              switch (idColumn) {
                case 'author':
                  cssClass = 'table-head__author';
                  break;
                case 'title':
                  cssClass = 'table-head__title';
                  break;
                case 'content':
                  cssClass = 'table-head__content';
                  break;
                case 'createdAt':
                  cssClass = 'table-head__date';
                  break;
                case 'command':
                  cssClass = 'table-head__commands';
                  break;
              }

              return (
                <th
                  key={header.id}
                  className={`table-head__global${
                    cssClass ? ' ' + cssClass : ''
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              );
            })}
          </tr>
        ))}
      </thead>
      <tbody>{rows}</tbody>
      <tfoot></tfoot>
    </table>
  );
};

export default TableArticles;
