import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function ConferenceDetail() {
  const { id } = useParams();
  return (
    <PageLayout title={`Conference ${id || ''}`} description="Event details, agenda, and registration.">
      <div className="grid lg:grid-cols-3 gap-lg">
        <section className="lg:col-span-2 space-y-md">
          <h2 className="text-xl font-semibold">Agenda</h2>
          <div className="border rounded-lg p-md bg-card">Schedule will appear here.</div>
        </section>
        <aside className="border rounded-lg p-md bg-card shadow-sm">
          <h3 className="font-semibold">Registration</h3>
          <p className="text-sm text-muted-foreground">Pricing and deadlines.</p>
        </aside>
      </div>
    </PageLayout>
  );
}
