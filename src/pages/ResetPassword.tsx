import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function ResetPassword() {
  return (
    <PageLayout title="Reset Password" description="Create a new password for your account.">
      <form className="space-y-md max-w-md">
        <div>
          <label className="text-sm font-medium">New Password</label>
          <input type="password" className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
        </div>
        <div>
          <label className="text-sm font-medium">Confirm Password</label>
          <input type="password" className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
        </div>
        <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10">Update Password</button>
      </form>
    </PageLayout>
  );
}
