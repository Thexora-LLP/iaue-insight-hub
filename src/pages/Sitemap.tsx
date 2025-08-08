import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function Sitemap() {
  return (
    <PageLayout title="Site Map" description="Explore all pages of the platform.">
      <ul className="list-disc pl-6 text-sm text-muted-foreground space-y-1">
        <li>Public pages</li>
        <li>Authenticated pages</li>
        <li>Admin & Editor pages</li>
      </ul>
    </PageLayout>
  )
}
