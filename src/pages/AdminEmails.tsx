import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminEmails() {
  const templates = [
    { id: 'welcome', name: 'Welcome Email', subject: 'Welcome to the Journal Platform' },
    { id: 'reset', name: 'Password Reset', subject: 'Reset Your Password' },
    { id: 'verify', name: 'Verify Email', subject: 'Confirm your email address' },
  ]
  return (
    <PageLayout title="Email Templates" description="Customize automated emails.">
      <div className="grid gap-md md:grid-cols-3">
        {templates.map(t => (
          <Card key={t.id}>
            <CardHeader><CardTitle>{t.name}</CardTitle></CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Subject</p>
              <p className="font-medium">{t.subject}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}
