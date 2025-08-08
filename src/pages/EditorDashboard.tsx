import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function EditorDashboard() {
  return (
    <PageLayout title="Editor Dashboard" description="Overview of editorial tasks and metrics.">
      <div className="grid md:grid-cols-3 gap-lg">
        <div className="border rounded-lg p-md bg-card">Pending Reviews</div>
        <div className="border rounded-lg p-md bg-card">Assignments</div>
        <div className="border rounded-lg p-md bg-card">Performance</div>
      </div>
    </PageLayout>
  );
}
