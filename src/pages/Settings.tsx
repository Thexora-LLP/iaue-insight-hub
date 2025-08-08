import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Settings() {
  return (
    <PageLayout title="Account Settings" description="Security, preferences, and notifications.">
      <div className="grid md:grid-cols-2 gap-lg">
        <section className="space-y-md">
          <h3 className="font-semibold">Security</h3>
          <div className="border rounded-md p-md bg-card">Password & 2FA</div>
        </section>
        <section className="space-y-md">
          <h3 className="font-semibold">Preferences</h3>
          <div className="border rounded-md p-md bg-card">Language & theme</div>
        </section>
      </div>
    </PageLayout>
  );
}
