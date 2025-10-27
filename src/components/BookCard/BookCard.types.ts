import { Book } from '../../types/Book';

export interface BookCardProps {
  book: Book;
  onClick?: (book: Book) => void;
}