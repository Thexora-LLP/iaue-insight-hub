import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Profile() {
  return (
    <PageLayout title="My Profile" description="Manage your personal and academic information.">
      <div className="grid md:grid-cols-2 gap-lg">
        <form className="space-y-md">
          <div>
            <label className="text-sm font-medium">Full Name</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
          </div>
          <div>
            <label className="text-sm font-medium">Affiliation</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" />
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10">Save</button>
        </form>
        <aside className="border rounded-lg p-md bg-card">Avatar & quick stats</aside>
      </div>
    </PageLayout>
  );
}
