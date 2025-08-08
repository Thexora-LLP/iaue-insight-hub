import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function JournalIssueView() {
  const { id } = useParams();
  return (
    <PageLayout title={`Journal Issue ${id || ''}`} description="Browse articles in this issue.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="border rounded-lg p-md bg-card shadow-sm">
            <h3 className="font-semibold">Article Title {i + 1}</h3>
            <p className="text-sm text-muted-foreground mt-xs">Abstract preview and metadata.</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
