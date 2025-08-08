import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function AdminDashboard() {
  return (
    <PageLayout title="Admin Dashboard" description="System overview, metrics, and quick actions.">
      <div className="grid md:grid-cols-4 gap-lg">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border rounded-lg p-md bg-card">Stat {i + 1}</div>
        ))}
      </div>
    </PageLayout>
  );
}
