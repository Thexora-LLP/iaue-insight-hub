import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery } from '@tanstack/react-query';
import { listNotifications } from '@/lib/api';
import { Card, CardContent } from '@/components/ui/card';

export default function Notifications() {
  const { data, isLoading } = useQuery({ queryKey: ['notifications'], queryFn: listNotifications })
  const items = data?.items ?? []

  return (
    <PageLayout title="Notifications" description="Your system alerts and messages.">
      <div className="space-y-sm">
        {isLoading ? (
          <Card><CardContent className="p-md"><div className="h-5 w-40 bg-muted rounded animate-pulse"/></CardContent></Card>
        ) : (
          items.map((n) => (
            <Card key={n.id}><CardContent className="p-md">
              <p className="font-medium">{n.title}</p>
              <p className="text-sm text-muted-foreground">{n.message} • {n.createdAt}</p>
            </CardContent></Card>
          ))
        )}
      </div>
    </PageLayout>
  );
}
