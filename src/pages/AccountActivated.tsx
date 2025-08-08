import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function AccountActivated() {
  return (
    <PageLayout title="Account Activated" description="Your account has been successfully activated.">
      <p className="text-muted-foreground">You can now sign in and access your dashboard.</p>
    </PageLayout>
  );
}
