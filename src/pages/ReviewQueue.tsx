import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ReviewQueue() {
  return (
    <PageLayout title="Review Queue" description="Manage manuscripts awaiting review.">
      <div className="space-y-sm">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border rounded-md p-md bg-card">Submission {i + 1}</div>
        ))}
      </div>
    </PageLayout>
  );
}
