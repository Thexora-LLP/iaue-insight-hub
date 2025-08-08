import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function MyRegistrations() {
  return (
    <PageLayout title="My Conference Registrations" description="View upcoming and past conference registrations.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[...Array(3)].map((_, i) => (
          <article key={i} className="border rounded-lg p-md bg-card">
            <h3 className="font-semibold">Conference {i + 1}</h3>
            <p className="text-sm text-muted-foreground">Dates · Location</p>
          </article>
        ))}
      </div>
    </PageLayout>
  );
}
