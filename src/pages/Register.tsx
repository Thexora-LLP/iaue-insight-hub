import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Register() {
  return (
    <PageLayout title="Create Account" description="Join IAUE Research Gate to submit and manage your manuscripts.">
      <div className="grid md:grid-cols-2 gap-lg">
        <form className="space-y-md">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
          </div>
          <div>
            <label className="text-sm font-medium">Password</label>
            <input type="password" className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10">Create Account</button>
        </form>
        <aside className="border rounded-lg p-md bg-card">
          <h3 className="font-semibold mb-sm">Why Join?</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
            <li>Submit manuscripts</li>
            <li>Track reviews</li>
            <li>Access your library</li>
          </ul>
        </aside>
      </div>
    </PageLayout>
  );
}
