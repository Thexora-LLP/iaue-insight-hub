import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function Downloads() {
  return (
    <PageLayout title="Download Center" description="Manage your downloads and generated files.">
      <div className="space-y-sm">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="border rounded-md p-md bg-card">File {i + 1}</div>
        ))}
      </div>
    </PageLayout>
  )
}
