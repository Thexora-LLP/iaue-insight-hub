import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery } from '@tanstack/react-query';
import { getPrivacyPolicy } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Privacy() {
  const { data, isLoading } = useQuery({ queryKey: ['privacy-policy'], queryFn: getPrivacyPolicy })
  const sections = data?.sections ?? []

  return (
    <PageLayout title="Privacy Policy" description="Understand how we handle your data.">
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
