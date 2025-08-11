import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listMyManuscripts } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'

export default function AdminManuscripts() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-manuscripts'], queryFn: listMyManuscripts })
  const items = data?.items ?? []

  return (
    <PageLayout title="Manuscript Overview" description="All manuscripts across the system.">
      <Card>
        <CardHeader><CardTitle>Manuscripts</CardTitle></CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Progress</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={6}><div className="h-6 w-40 bg-muted animate-pulse rounded m-md"/></TableCell></TableRow>
              ) : items.map(m => (
                <TableRow key={m.id} className="hover:bg-muted/40">
                  <TableCell>{m.id}</TableCell>
                  <TableCell className="font-medium">{m.title}</TableCell>
                  <TableCell>{m.status}</TableCell>
                  <TableCell>{m.category}</TableCell>
                  <TableCell>{m.type}</TableCell>
                  <TableCell>{m.progress}%</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
