import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery } from '@tanstack/react-query';
import { getReviewQueue } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';

export default function ReviewQueue() {
  const { data, isLoading } = useQuery({ queryKey: ['editor-review-queue'], queryFn: getReviewQueue })
  const items = data?.items ?? []

  return (
    <PageLayout title="Review Queue" description="Manage manuscripts awaiting review.">
      <div className="space-y-sm">
        {isLoading ? (
          <Card><CardContent className="p-md"><div className="h-5 w-40 bg-muted rounded animate-pulse"/></CardContent></Card>
        ) : (
          items.map((m) => (
            <Card key={m.id}><CardContent className="p-md flex items-center justify-between">
              <div>
                <p className="font-medium">{m.title}</p>
                <p className="text-sm text-muted-foreground">{m.id} • {m.status}</p>
              </div>
              <span className="text-sm text-muted-foreground">{m.submittedDate}</span>
            </CardContent></Card>
          ))
        )}
      </div>
    </PageLayout>
  );
}
