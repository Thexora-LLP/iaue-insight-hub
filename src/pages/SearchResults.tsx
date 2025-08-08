import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function SearchResults() {
  return (
    <PageLayout title="Search Results" description="Your query results.">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-lg">
        {[...Array(6)].map((_, i) => (
          <article key={i} className="border rounded-lg p-md bg-card">Result {i + 1}</article>
        ))}
      </div>
    </PageLayout>
  )
}
