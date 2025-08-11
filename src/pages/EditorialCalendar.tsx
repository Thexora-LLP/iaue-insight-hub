import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EditorialCalendar() {
  const items = [
    { date: '2024-02-01', title: 'Submission Deadline', desc: 'Final date for new submissions' },
    { date: '2024-02-10', title: 'Assign Reviewers', desc: 'Allocate reviewers to new manuscripts' },
    { date: '2024-02-20', title: 'Review Due', desc: 'First round reviews due' },
  ];

  return (
    <PageLayout title="Editorial Calendar" description="Deadlines and schedules for reviews.">
      <div className="grid gap-md md:grid-cols-2">
        {items.map((it, idx) => (
          <Card key={idx}>
            <CardHeader>
              <CardTitle>{it.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{it.date}</p>
              <p>{it.desc}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  );
}
