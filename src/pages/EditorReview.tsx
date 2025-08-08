import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function EditorReview() {
  const { id } = useParams();
  return (
    <PageLayout title={`Review Manuscript ${id || ''}`} description="Read the manuscript and complete review form.">
      <div className="grid lg:grid-cols-3 gap-lg">
        <section className="lg:col-span-2 border rounded-lg p-md bg-card">Manuscript Viewer</section>
        <aside className="border rounded-lg p-md bg-card">Review Form</aside>
      </div>
    </PageLayout>
  );
}
