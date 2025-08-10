import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listJournalIssues } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminJournals() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-issues'], queryFn: () => listJournalIssues() })
  const items = data?.items ?? []

  return (
    <PageLayout title="Journal Management" description="Create and edit journal volumes and issues.">
      <Card>
        <CardHeader><CardTitle>Issues</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Issue</TableHead>
                <TableHead>Year</TableHead>
                <TableHead>Published</TableHead>
                <TableHead>Articles</TableHead>
                <TableHead>Downloads</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={7}><div className="h-6 w-40 bg-muted animate-pulse rounded m-md"/></TableCell></TableRow>
              ) : items.map(i => (
                <TableRow key={i.id} className="hover:bg-muted/40">
                  <TableCell>{i.id}</TableCell>
                  <TableCell>{i.volume}</TableCell>
                  <TableCell>{i.issue}</TableCell>
                  <TableCell>{i.year}</TableCell>
                  <TableCell>{i.publishedDate}</TableCell>
                  <TableCell>{i.articles}</TableCell>
                  <TableCell>{i.downloads}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
