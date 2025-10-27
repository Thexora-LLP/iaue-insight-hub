
import React from 'react';
import { formatNaira } from '../../Utils/Currency';
import { BookCardProps } from './BookCard.types';
import { Book } from '../../types/Book';

export const BookCard: React.FC<BookCardProps> = ({ book, onClick }) => {
  const generateBookUrl = (book: Book): string => {
    const slug = book.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    return `/book/${book.id}/${slug}`;
  };

  const handleCardClick = () => {
    console.log(`Opening book details for: ${book.title}`);
    
    if (onClick) {
      onClick(book);
    } else {
      const bookUrl = generateBookUrl(book);
      
      // Open in new tab
      window.open(bookUrl, '_blank', 'noopener,noreferrer');
      
      // Alternative: Navigate in same tab
      // window.location.href = bookUrl;
    }
  };

  return (
    <article
      className="border rounded-lg p-4 bg-blue-50/95 backdrop-blur-sm border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] transform"
      onClick={handleCardClick}
    >
      {/* Same card content as before */}
      <div className="relative mb-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute top-2 right-2 bg-[#0842a6]/90 text-white px-2 py-1 rounded text-sm font-semibold">
          {formatNaira(book.price)}
        </div>
      </div>

      <h3 className="font-semibold text-[#0842a6] mb-1">{book.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">
        {book.author} • {book.year}
      </p>

      <div className="flex items-center justify-between">
        <span className="text-lg font-bold text-[#0842a6]">
          {formatNaira(book.price)}
        </span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
          Click to open details
        </span>
      </div>
    </article>
  );
};
