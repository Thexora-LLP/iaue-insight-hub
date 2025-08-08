import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Terms() {
  return (
    <PageLayout title="Terms of Service" description="Please review our terms and conditions.">
      <article className="prose max-w-none">
        <h2>Agreement</h2>
        <p className="text-muted-foreground">This is a placeholder terms of service. Replace with actual legal content.</p>
      </article>
    </PageLayout>
  );
}
