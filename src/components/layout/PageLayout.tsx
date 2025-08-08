import React from 'react';
import Navigation from '@/components/ui/navigation';
import Footer from '@/components/ui/footer';
import { useSEO } from '@/hooks/use-seo';

interface PageLayoutProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ title, description, children }) => {
  useSEO({ title, description });

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        <header className="border-b bg-gradient-subtle">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-lg">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">{title}</h1>
            {description && (
              <p className="mt-2 text-muted-foreground max-w-3xl">{description}</p>
            )}
          </div>
        </header>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-xl">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PageLayout;
