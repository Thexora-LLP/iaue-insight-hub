import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function Editor() {
  return (
    <PageLayout title="Editor Tools" description="Access editorial features and workflows.">
      <div className="grid md:grid-cols-2 gap-lg">
        <div className="border rounded-lg p-md bg-card">Tools</div>
        <div className="border rounded-lg p-md bg-card">Assignments</div>
      </div>
    </PageLayout>
  )
}
