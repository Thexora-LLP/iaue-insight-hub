import React from 'react';
import { useParams } from 'react-router-dom';
import PageLayout from '@/components/layout/PageLayout';

export default function EditorAssignment() {
  const { id } = useParams();
  return (
    <PageLayout title={`Assign Reviewers (${id || ''})`} description="Select and invite suitable reviewers.">
      <div className="border rounded-lg p-md bg-card">Reviewer selection UI placeholder.</div>
    </PageLayout>
  );
}
