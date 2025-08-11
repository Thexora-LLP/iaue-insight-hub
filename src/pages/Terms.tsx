import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery } from '@tanstack/react-query';
import { getTerms } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Terms() {
  const { data, isLoading } = useQuery({ queryKey: ['terms-of-service'], queryFn: getTerms })
  const sections = data?.sections ?? []

  return (
    <PageLayout title="Terms & Conditions" description="Please review our terms and conditions.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : (
        <div className="space-y-md animate-fade-in">
          <div className="text-sm text-muted-foreground">Last updated: {data?.lastUpdated}</div>
          {sections.map((s, i) => (
            <Card key={i}>
              <CardHeader><CardTitle>{s.title}</CardTitle></CardHeader>
              <CardContent>
                <ul className="list-disc pl-6 space-y-1 text-sm text-muted-foreground">
                  {s.content.map((c, k) => (<li key={k}>{c}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </PageLayout>
  );
}
