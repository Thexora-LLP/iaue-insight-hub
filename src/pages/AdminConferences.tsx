import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listConferences } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminConferences() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-confs'], queryFn: listConferences })
  const items = data?.items ?? []

  return (
    <PageLayout title="Conference Management" description="Create and manage conferences.">
      <Card>
        <CardHeader><CardTitle>All Conferences</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Title</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Location</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={5}><div className="h-6 w-40 bg-muted animate-pulse rounded m-md"/></TableCell></TableRow>
              ) : items.map(c => (
                <TableRow key={c.id} className="hover:bg-muted/40">
                  <TableCell className="font-medium">{c.title}</TableCell>
                  <TableCell>{c.type}</TableCell>
                  <TableCell>{c.status}</TableCell>
                  <TableCell>{c.date}</TableCell>
                  <TableCell>{c.location}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
