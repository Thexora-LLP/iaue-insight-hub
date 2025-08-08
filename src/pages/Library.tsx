import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Library() {
  return (
    <PageLayout title="My Library" description="Access your downloaded and saved content.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[...Array(4)].map((_, i) => (
          <article key={i} className="border rounded-lg p-md bg-card">Item {i + 1}</article>
        ))}
      </div>
    </PageLayout>
  );
}
