import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Notifications() {
  return (
    <PageLayout title="Notifications" description="Your system alerts and messages.">
      <div className="space-y-sm">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="border rounded-md p-md bg-card">Notification {i + 1}</div>
        ))}
      </div>
    </PageLayout>
  );
}
