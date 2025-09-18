import React, { useMemo } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getSitemap } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function Sitemap() {
  const { data, isLoading } = useQuery({ queryKey: ['sitemap-all'], queryFn: getSitemap })
  const urls = data?.urls ?? []

  const groups = useMemo(() => {
    const map: Record<string, string[]> = { Public: [], User: [], Editor: [], Admin: [], Dynamic: [] }
    urls.forEach((u) => {
      if (u.startsWith('/admin')) map.Admin.push(u)
      else if (u.startsWith('/editor') || u.startsWith('/review') || u.startsWith('/editorial')) map.Editor.push(u)
      else if ([ '/dashboard',
    '/profile',
    '/settings',
    '/submit-manuscript',
    '/my-manuscripts',
    '/notifications',
    '/payments',
    '/payment-success',
    '/payment-failed',
    '/library',
    '/downloads',
    '/viewer',
    '/search',
    '/advanced-search',
    '/search-results',
    '/my-registrations' ]
    .some(p => u.startsWith(p))) map.User.push(u)
      else if (u.includes(':')) map.Dynamic.push(u)
      else map.Public.push(u)
    })
    return map
  }, [urls])

  const renderList = (title: string, items: string[]) => (
    <Card key={title}>
      <CardHeader><CardTitle>{title}</CardTitle></CardHeader>
      <CardContent>
        <ul className="space-y-1 text-sm text-muted-foreground">
          {items.map((u) => (
            <li key={u}>
              {u.includes(':') ? (
                <span className="font-mono">{u}</span>
              ) : (
                <Link to={u} className="story-link">{u}</Link>
              )}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )

  return (
    <PageLayout title="Site Map" description="Explore all pages of the platform.">
      {isLoading ? (
        <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
      ) : (
        <div className="grid gap-md md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
          {Object.entries(groups).map(([k, v]) => renderList(k, v))}
        </div>
      )}
    </PageLayout>
  )
}
