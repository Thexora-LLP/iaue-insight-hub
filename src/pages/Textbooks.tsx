// import React from "react";
// import PageLayout from "@/components/layout/PageLayout";
// import { Link } from "react-router-dom";
// import sampleBooks from "@/Data/SampleBooks";

// // Format Naira currency
// const formatNaira = (amount: number): string => {
//   return new Intl.NumberFormat("en-NG", {
//     style: "currency",
//     currency: "NGN",
//   }).format(amount);
// };

// // Book type
// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   year: number;
//   price: number;
//   image: string;
//   description: string;
//   isbn: string;
//   pages: number;
//   publisher: string;
//   category: string;
// }

// // BookCard props
// interface BookCardProps {
//   book: Book;
// }

// // Enhanced BookCard component
// const BookCard: React.FC<BookCardProps> = ({ book }) => {
//   const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
//     e.currentTarget.src = "https://placehold.co/300x400?text=Book+Cover+Not+Found";
//   };

//   return (
//     <Link
//       to={`/textbooks/${book.id}`}
//       target="_blank"
//       rel="noopener noreferrer"
//       className="block"
//     >
//       <article
//         className="border rounded-lg p-4 bg-[#0842a6]-50/95 backdrop-blur-sm border-[#0842a6]-200 cursor-pointer hover:shadow-lg transition-shadow duration-200 animate-float"
//       >
//         {/* Image section */}
//         <div className="relative mb-4">
//           <img
//             src={book.image}
//             alt={book.title}
//             className="w-full h-48 object-cover rounded-md"
//             onError={handleImageError}
//           />
//           {/* Price badge */}
//           <div className="absolute top-2 right-2 bg-[#0842a6]/90 text-white px-2 py-1 rounded text-sm font-semibold">
//             {formatNaira(book.price)}
//           </div>
//         </div>

//         {/* Content section */}
//         <h3 className="font-semibold text-[#0842a6] mb-1">{book.title}</h3>
//         <p className="text-sm text-muted-foreground mb-2">
//           {book.author} • {book.year}
//         </p>

//         {/* Price display */}
//         <div className="flex items-center justify-between">
//           <span className="text-lg font-bold text-[#0842a6]">
//             {formatNaira(book.price)}
//           </span>
//           <span className="text-xs text-muted-foreground">
//             Click to view details
//           </span>
//         </div>
//       </article>
//     </Link>
//   );
// };

// // Main Textbooks component
// const Textbooks: React.FC = () => {
//   return (
//     <PageLayout
//       title="Textbook Catalog"
//       description="Browse textbooks and academic resources."
//     >
//       <div className="min-h-screen bg-background">
//         <div className="relative overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br from-[#0842a6]-100/80 via-[#0842a6]-200/50 to-[#0842a6]-100/80"></div>
//           <div className="absolute top-10 left-10 w-32 h-32 bg-[#0842a6]-300/30 rounded-full blur-3xl animate-pulse"></div>
//           <div className="absolute bottom-10 right-10 w-40 h-40 bg-[#0842a6]-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

//           <div className="container mx-auto px-4 py-8 relative z-10">
//             <div className="max-w-6xl mx-auto">
//               {/* Header */}
//               <div className="mb-8">
//                 <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
//                   Textbooks and Academic Resources
//                 </h1>
//                 <p className="text-muted-foreground mt-2">
//                   Click on any book to view details and prices in a new tab.
//                 </p>
//               </div>

//               {/* Book Grid */}
//               <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {sampleBooks.map((book) => (
//                   <BookCard key={book.id} book={book} />
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating animation CSS */}
//       <style>
//         {`
//           @keyframes float {
//             0%, 100% { transform: translateY(0); }
//             50% { transform: translateY(-10px); }
//           }
//           .animate-float {
//             animation: float 3s ease-in-out infinite;
//           }
//         `}
//       </style>
//     </PageLayout>
//   );
// };

// export default Textbooks;

import React, { useState } from 'react';

// Step 1: Format Naira currency
const formatNaira = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

// Step 2: Enhanced Book type with more fields
interface Book {
  id: number;
  title: string;
  author: string;
  year: number;
  price: number;
  image: string;
  description: string;
  isbn: string;
  pages: number;
  publisher: string;
  category: string;
}

// Step 3: BookCard props - simplified (no more modal callback)
interface BookCardProps {
  book: Book;
}

// Step 4: Enhanced BookCard component with new tab navigation
const BookCard: React.FC<BookCardProps> = ({ book }) => {
  // Function to generate book detail URL
  const generateBookUrl = (book: Book): string => {
    // Create a slug from the book title
    const slug = book.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
    
    // You can customize this URL structure based on your routing needs
    return `/book/${book.id}/${slug}`;
  };

  // Function to handle card click and open in new tab
  const handleCardClick = () => {
    console.log(`Opening book details for: ${book.title}`);
    
    // Option 1: Open a new tab with book details page
    const bookUrl = generateBookUrl(book);
    window.open(bookUrl, '_blank');
    
    // Option 2: Alternative - you could also navigate in same tab
    // window.location.href = bookUrl;
  };

  return (
    
    <article
      className="border rounded-lg p-4 bg-blue-50/95 backdrop-blur-sm border-blue-200 cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-[1.02] transform"
      onClick={handleCardClick}
    >
      {/* Image section */}
      <div className="relative mb-4">
        <img
          src={book.image}
          alt={book.title}
          className="w-full h-48 object-cover rounded-md"
        />
        {/* Price badge */}
        <div className="absolute top-2 right-2 bg-[#0842a6]/90 text-white px-2 py-1 rounded text-sm font-semibold">
          {formatNaira(book.price)}
        </div>
      </div>

      {/* Content section */}
      <h3 className="font-semibold text-[#0842a6] mb-1">{book.title}</h3>
      <p className="text-sm text-muted-foreground mb-2">
        {book.author} • {book.year}
      </p>

      {/* Price display */}
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

// Step 5: Standalone Book Detail Page Component
const BookDetailPage: React.FC<{ book: Book }> = ({ book }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0842a6]-50 to-[#0842a6]-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Navigation Header */}
          <div className="mb-8">
            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 text-[#0842a6] hover:text-blue-700 transition-colors mb-4"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Catalog
            </button>
          </div>

          {/* Book Detail Content */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-blue-200 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-[#0842a6] to-blue-700 p-8 text-white">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-1">
                  <img
                    src={book.image}
                    alt={book.title}
                    className="w-full max-w-sm mx-auto rounded-lg shadow-2xl"
                  />
                </div>
                <div className="md:col-span-2">
                  <h1 className="text-4xl font-bold mb-4">{book.title}</h1>
                  <p className="text-xl text-blue-100 mb-6">by {book.author}</p>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
                    <p className="text-sm text-blue-100 mb-2">Price</p>
                    <p className="text-4xl font-bold">{formatNaira(book.price)}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Book Information */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0842a6] mb-6">Book Information</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Author:</span>
                      <span className="font-semibold">{book.author}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Publisher:</span>
                      <span className="font-semibold">{book.publisher}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Year:</span>
                      <span className="font-semibold">{book.year}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Pages:</span>
                      <span className="font-semibold">{book.pages}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">ISBN:</span>
                      <span className="font-semibold text-sm">{book.isbn}</span>
                    </div>
                    <div className="flex justify-between items-center py-3 border-b border-gray-200">
                      <span className="font-medium text-gray-600">Category:</span>
                      <span className="font-semibold">{book.category}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div>
                  <h2 className="text-2xl font-bold text-[#0842a6] mb-6">Actions</h2>
                  <div className="space-y-4">
                    <div className="bg-[#0842a6]-50 border border-brand-200 rounded-lg p-6">
                      <p className="text-sm text--600 font-medium mb-2">Current Price</p>
                      <p className="text-3xl font-bold text-brand-700 mb-4">
                        {formatNaira(book.price)}
                      </p>
                      <button className="w-full bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all">
                        Add to Cart
                      </button>
                    </div>
                    
                    <button className="w-full border-2 border-[#0842a6] text-[#0842a6] hover:bg-[#0842a6]/10 px-6 py-3 rounded-lg font-medium transform hover:scale-105 transition-all">
                      Add to Wishlist
                    </button>
                    
                    <button className="w-full border border-gray-300 text-gray-600 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors">
                      Share Book
                    </button>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-[#0842a6] mb-6">About This Book</h2>
                <div className="bg-gray-50 rounded-lg p-6">
                  <p className="text-gray-700 leading-relaxed text-lg">{book.description}</p>
                </div>
              </div>

              {/* Additional Features */}
              <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0842a6] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0842a6] mb-2">Digital Format</h3>
                  <p className="text-sm text-gray-600">Available in PDF and ePub</p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0842a6] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0842a6] mb-2">Fast Delivery</h3>
                  <p className="text-sm text-gray-600">2-3 business days</p>
                </div>

                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="w-12 h-12 bg-[#0842a6] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-[#0842a6] mb-2">Quality Guarantee</h3>
                  <p className="text-sm text-gray-600">30-day return policy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Step 6: Main Textbooks component (simplified - no modal state)
const Textbooks: React.FC = () => {
  const sampleBooks: Book[] = [
    {
      id: 1,
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      year: 2022,
      price: 45000.0,
      image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
      description: "This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers. The book covers a broad range of algorithms in depth, yet makes their design and analysis accessible to all levels of readers.",
      isbn: "978-0262046305",
      pages: 1312,
      publisher: "MIT Press",
      category: "Computer Science",
    },
    {
      id: 2,
      title: "Clean Code",
      author: "Robert Martin",
      year: 2021,
      price: 18500.0,
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop",
      description: "Even bad code can function. But if code isn't clean, it can bring a development organization to its knees. This book will teach you how to write good code and how to transform bad code into good code. Learn the principles of clean code and become a better programmer.",
      isbn: "978-0132350884",
      pages: 464,
      publisher: "Prentice Hall",
      category: "Software Engineering",
    },
    {
      id: 3,
      title: "Design Patterns",
      author: "Gang of Four",
      year: 2020,
      price: 28000.0,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop",
      description: "Capturing a wealth of experience about the design of object-oriented software, four top-notch designers present a catalog of simple and succinct solutions to commonly occurring design problems. These patterns help you write more flexible and reusable code.",
      isbn: "978-0201633612",
      pages: 395,
      publisher: "Addison-Wesley",
      category: "Software Architecture",
    },
    {
      id: 4,
      title: "JavaScript: The Good Parts",
      author: "Douglas Crockford",
      year: 2023,
      price: 15500.0,
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop",
      description: "Most programming languages contain good and bad parts, but JavaScript has more than its share of the bad, having been developed and released in a hurry before it could be refined. This book helps you navigate the good parts of JavaScript effectively.",
      isbn: "978-0596517748",
      pages: 176,
      publisher: "O'Reilly Media",
      category: "Web Development",
    },
    {
      id: 5,
      title: "System Design Interview",
      author: "Alex Xu",
      year: 2022,
      price: 25000.0,
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop",
      description: "This book provides a step-by-step framework for how to tackle a system design question. It includes many real-world examples to illustrate the systematic approach to solving problems and is perfect for preparing for technical interviews.",
      isbn: "978-1736049112",
      pages: 322,
      publisher: "ByteByteGo",
      category: "System Design",
    },
    {
      id: 6,
      title: "Data Structures & Algorithms",
      author: "Michael Goodrich",
      year: 2021,
      price: 32000.0,
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop",
      description: "This book is designed to be easy to read and understand although the topic itself is complicated. Algorithms are described in English and in a pseudocode designed to be readable by anyone who has done a little programming.",
      isbn: "978-1118771334",
      pages: 736,
      publisher: "Wiley",
      category: "Computer Science",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/80 via-blue-200/50 to-blue-100/80"></div>
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-300/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold bg-gradient-to-r from-[#0842a6] to-blue-700 bg-clip-text text-transparent">
                Textbooks and Academic Resources
              </h1>
              <p className="text-muted-foreground mt-2">
                Click on any book to open detailed view in a new tab.
              </p>
            </div>

            {/* Book Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sampleBooks.map((book) => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Export components
export default Textbooks;
export { BookCard, BookDetailPage, type Book, type BookCardProps };

// Demo: How the BookDetailPage would be used in a route
// This would typically be in a separate file like BookDetailPage.tsx
export const BookDetailPageDemo: React.FC = () => {
  // This would normally get book data from URL params or API
  const sampleBook: Book = {
    id: 1,
    title: "Introduction to Algorithms",
    author: "Thomas H. Cormen",
    year: 2022,
    price: 45000.0,
    image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop",
    description: "This book provides a comprehensive introduction to the modern study of computer algorithms. It presents many algorithms and covers them in considerable depth, yet makes their design and analysis accessible to all levels of readers.",
    isbn: "978-0262046305",
    pages: 1312,
    publisher: "MIT Press",
    category: "Computer Science",
  };

  return <BookDetailPage book={sampleBook} />;
};

// import React from 'react';
// import PageLayout from '@/components/layout/PageLayout';

// // Step 1: Enhanced Book type with more fields
// interface Book {
//   id: number;
//   title: string;
//   author: string;
//   year: number;
//   price: number;
//   image: string;
// }

// // Step 2: BookCard props
// interface BookCardProps {
//   book: Book;
// }

// // Step 3: Enhanced BookCard component using your styling pattern
// const BookCard: React.FC<BookCardProps> = ({ book }) => {
//   return (

//     <article className="border rounded-lg p-md bg-card">
//       {/* Image section */}
//       <div className="relative mb-4">
//         <img
//           src={book.image}
//           alt={book.title}
//           className="w-full h-48 object-cover rounded-md"
//         />
//         {/* Price badge */}
//         <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-semibold">
//           ₦{book.price}
//         </div>
//       </div>

//       {/* Content section - matching your existing pattern */}
//       <h3 className="font-semibold mb-1">{book.title}</h3>
//       <p className="text-sm text-muted-foreground mb-2">
//         {book.author} · {book.year}
//       </p>

//       {/* Price display */}
//       <div className="flex items-center justify-between">
//         <span className="text-lg font-bold text-blue-600">
//           ₦{book.price}
//         </span>
//       </div>
//     </article>
//   );
// };

// // Step 4: Your Textbooks component but enhanced
// const Textbooks: React.FC = () => {
//   // Sample book data - this would come from your API/database
//   const sampleBooks: Book[] = [
//     {
//       id: 1,
//       title: "Introduction to Algorithms",
//       author: "Thomas H. Cormen",
//       year: 2022,
//       price: 50000,
//       image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=300&h=400&fit=crop"
//     },
//     {
//       id: 2,
//       title: "Clean Code",
//       author: "Robert Martin",
//       year: 2021,
//       price: 50000,
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=400&fit=crop"
//     },
//     {
//       id: 3,
//       title: "Design Patterns",
//       author: "Gang of Four",
//       year: 2020,
//       price: 50000,
//       image: "https://www.bing.com/th/id/OIP.bhSeF1pv0pYu920HiMQV3AHaE8?w=242&h=211&c=8&rs=1&qlt=90&o=6&cb=thwsc4&pid=3.1&rm=2&ucfimg=1"
//     },
//     {
//       id: 4,
//       title: "JavaScript: The Good Parts",
//       author: "Douglas Crockford",
//       year: 2023,
//       price: 50000,
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=400&fit=crop"
//     },
//     {
//       id: 5,
//       title: "System Design Interview",
//       author: "Alex Xu",
//       year: 2022,
//       price: 50000,
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop"
//     },
//     {
//       id: 6,
//       title: "Data Structures & Algorithms",
//       author: "Michael Goodrich",
//       year: 2021,
//       price: 50000,
//       image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=300&h=400&fit=crop"
//     }
//   ];

//   return (
//     <PageLayout title="Textbook Catalog" description="Browse textbooks and academic resources.">
//     <div className="min-h-screen bg-background p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header matching your PageLayout style */}
//         <div className="mb-8">
//           <h1 className="text-3xl font-bold mb-2">Textbook Catalog</h1>
//           <p className="text-muted-foreground">Browse textbooks and academic resources.</p>
//         </div>

//         {/* Grid using your exact pattern */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
//           {sampleBooks.map((book) => (
//             <BookCard key={book.id} book={book} />
//           ))}
//         </div>
//       </div>
//     </div>
//     </PageLayout>
//   );
// };

//  export default Textbooks;
//  export { BookCard, type Book, type BookCardProps };
// export default function Textbooks() {
//   return (
//     <PageLayout title="Textbook Catalog" description="Browse textbooks and academic resources.">
//       <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
//         {[...Array(6)].map((_, i) => (
//           <article key={i} className="border rounded-lg p-md bg-card">
//             <h3 className="font-semibold">Book Title {i + 1}</h3>
//             <p className="text-sm text-muted-foreground">Author · Year</p>
//           </article>
//         ))}
//       </div>
//     </PageLayout>
//   );
// }
