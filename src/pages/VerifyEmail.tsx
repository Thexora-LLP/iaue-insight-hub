import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function VerifyEmail() {
  return (
    <PageLayout title="Verify Your Email" description="We have sent a verification link to your email.">
      <p className="text-muted-foreground">Please check your inbox and follow the instructions to verify your account.</p>
    </PageLayout>
  );
}
