import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Textbooks() {
  return (
    <PageLayout title="Textbook Catalog" description="Browse textbooks and academic resources.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="border rounded-lg p-md bg-card">
            <h3 className="font-semibold">Book Title {i + 1}</h3>
            <p className="text-sm text-muted-foreground">Author · Year</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
