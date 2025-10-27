import React from "react";
import PageLayout from "@/components/layout/PageLayout";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import sampleBooks from "@/Data/SampleBooks";

// Format Naira currency
const formatNaira = (amount: number): string => {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
  }).format(amount);
};

// Book type
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

// BookDetailPage component
const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const book = sampleBooks.find((b) => b.id === parseInt(id || "0"));

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = "https://placehold.co/300x400?text=Book+Cover+Not+Found";
  };

  if (!book) {
    return (
      <PageLayout title="Book Not Found" description="The requested book could not be found.">
        <div className="min-h-screen bg-background">
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-100/80 via-brand-200/50 to-brand-100/80"></div>
            <div className="container mx-auto px-4 py-8 relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h1 className="text-3xl font-bold text-[#0842a6] mb-4">
                  Book Not Found
                </h1>
                <p className="text-muted-foreground mb-6">
                  The book you are looking for does not exist or is unavailable.
                </p>
                <Button
                  onClick={() => navigate("/textbooks")}
                  className="bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Textbooks
                </Button>
              </div>
            </div>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout
      title={book.title}
      description={`Details for ${book.title} by ${book.author}.`}
    >
      <div className="min-h-screen bg-background">
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-100/80 via-brand-200/50 to-brand-100/80"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-brand-300/30 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-brand-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="container mx-auto px-4 py-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              {/* Back Button */}
              <Button
                variant="outline"
                onClick={() => navigate("/textbooks")}
                className="mb-6 border-[#0842a6]/50 text-[#0842a6] hover:bg-[#0842a6]/10 transform hover:scale-105 transition-all"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Textbooks
              </Button>

              {/* Book Details */}
              <div className="bg-brand-50/95 backdrop-blur-sm rounded-lg border border-brand-200 p-6 animate-float">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Book Image */}
                  <div>
                    <img
                      src={book.image}
                      alt={book.title}
                      className="w-full h-64 object-cover rounded-lg"
                      onError={handleImageError}
                    />
                  </div>

                  {/* Book Info */}
                  <div className="space-y-3">
                    <h1 className="text-3xl font-bold text-[#0842a6]">{book.title}</h1>
                    <h3 className="text-xl font-semibold text-[#0842a6]">{book.author}</h3>
                    <p className="text-lg text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-[#0842a6]">
                      {formatNaira(book.price)}
                    </p>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Publisher:</span>
                        <span>{book.publisher}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Year:</span>
                        <span>{book.year}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Pages:</span>
                        <span>{book.pages}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">ISBN:</span>
                        <span className="text-sm">{book.isbn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium text-muted-foreground">Category:</span>
                        <span>{book.category}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6">
                  <h3 className="text-xl font-bold text-[#0842a6] mb-3">Description</h3>
                  <p className="text-muted-foreground leading-relaxed">{book.description}</p>
                </div>

                {/* Action Buttons */}
                <div className="mt-8 flex gap-4">
                  <Button className="bg-gradient-to-r from-[#0842a6] to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white transform hover:scale-105 transition-all">
                    Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="border-[#0842a6]/50 text-[#0842a6] hover:bg-[#0842a6]/10 transform hover:scale-105 transition-all"
                  >
                    Add to Wishlist
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </PageLayout>
  );
};

export default BookDetailPage;