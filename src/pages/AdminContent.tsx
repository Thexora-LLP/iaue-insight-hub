import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getFAQs, getSitemap } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminContent() {
  const faqQ = useQuery({ queryKey: ['faqs'], queryFn: getFAQs })
  const mapQ = useQuery({ queryKey: ['sitemap'], queryFn: getSitemap })

  return (
    <PageLayout title="Content Management" description="Manage static pages, announcements, and assets.">
      <div className="grid gap-md md:grid-cols-2">
        <Card>
          <CardHeader><CardTitle>FAQs</CardTitle></CardHeader>
          <CardContent className="space-y-sm">
            {faqQ.isLoading ? (
              <div className="h-6 w-32 bg-muted animate-pulse rounded"/>
            ) : faqQ.data?.items.map((f, idx) => (
              <div key={idx} className="border rounded p-sm">
                <p className="font-medium">{f.q}</p>
                <p className="text-sm text-muted-foreground">{f.a}</p>
              </div>
            ))}
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Sitemap</CardTitle></CardHeader>
          <CardContent className="space-y-xs">
            {mapQ.isLoading ? (
              <div className="h-6 w-24 bg-muted animate-pulse rounded"/>
            ) : mapQ.data?.urls.map((u, idx) => (
              <div key={idx} className="text-sm text-muted-foreground">{u}</div>
            ))}
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
