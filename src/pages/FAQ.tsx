import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function FAQ() {
  return (
    <PageLayout title="Frequently Asked Questions" description="Common questions and answers.">
      <div className="space-y-md">
        {[...Array(5)].map((_, i) => (
          <details key={i} className="border rounded-md p-md bg-card">
            <summary className="font-medium">Question {i + 1}</summary>
            <p className="text-sm text-muted-foreground mt-sm">Answer placeholder.</p>
          </details>
        ))}
      </div>
    </PageLayout>
  )
}
