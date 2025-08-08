import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function ManuscriptDetail() {
  const { id } = useParams();
  return (
    <PageLayout title={`Manuscript ${id || ''}`} description="Track status, view timeline, and respond to reviews.">
      <div className="grid lg:grid-cols-3 gap-lg">
        <section className="lg:col-span-2 space-y-md">
          <h2 className="text-xl font-semibold">Status Timeline</h2>
          <div className="border rounded-lg p-md bg-card">Timeline appears here.</div>
        </section>
        <aside className="border rounded-lg p-md bg-card">
          <h3 className="font-semibold">Actions</h3>
          <ul className="text-sm text-muted-foreground list-disc pl-5 mt-sm">
            <li>Upload revision</li>
            <li>Send message</li>
          </ul>
        </aside>
      </div>
    </PageLayout>
  );
}
