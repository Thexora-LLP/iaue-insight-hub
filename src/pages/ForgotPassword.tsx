import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ForgotPassword() {
  return (
    <PageLayout title="Forgot Password" description="Request a password reset link.">
      <form className="space-y-md max-w-md">
        <div>
          <label className="text-sm font-medium">Email</label>
          <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" placeholder="you@example.com" />
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10">Send Reset Link</button>
      </form>
    </PageLayout>
  );
}
