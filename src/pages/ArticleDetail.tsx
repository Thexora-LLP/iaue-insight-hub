import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function ArticleDetail() {
  const { id } = useParams();
  return (
    <PageLayout title={`Article ${id || ''}`} description="Read the abstract, authors, and view the PDF.">
      <div className="grid lg:grid-cols-3 gap-lg">
        <article className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-sm">Abstract</h2>
          <p className="text-muted-foreground">This is a placeholder abstract for the article. PDF viewer integrates here.</p>
        </article>
        <aside className="border rounded-lg p-md bg-card shadow-sm">
          <h3 className="font-semibold mb-sm">Article Info</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>DOI: 10.1234/placeholder</li>
            <li>Published: 2025</li>
            <li>Views/Downloads: —</li>
          </ul>
        </aside>
      </div>
    </PageLayout>
  );
}
