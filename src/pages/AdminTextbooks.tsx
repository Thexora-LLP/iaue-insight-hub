import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminTextbooks() {
  const items = [
    { id: 't1', title: 'Linear Algebra', category: 'Mathematics' },
    { id: 't2', title: 'Operating Systems', category: 'Computer Science' },
  ]
  return (
    <PageLayout title="Textbook Management" description="Manage textbook catalog and categories.">
      <div className="grid gap-md md:grid-cols-2">
        {items.map(b => (
          <Card key={b.id}>
            <CardHeader><CardTitle>{b.title}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">{b.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}
