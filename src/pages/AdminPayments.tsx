import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listPayments } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

export default function AdminPayments() {
  const { data, isLoading } = useQuery({ queryKey: ['payments-all'], queryFn: listPayments })
  const items = data?.items ?? []

  const renderStatus = (s: string) => {
    const variant = s === 'failed' ? 'destructive' : s === 'pending' ? 'secondary' : 'default'
    return <Badge variant={variant as any} className="capitalize">{s}</Badge>
  }

  return (
    <PageLayout title="Payment Management" description="Monitor transactions and refunds.">
      <Card>
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={6}><div className="h-6 w-40 bg-muted animate-pulse rounded m-md"/></TableCell></TableRow>
              ) : items.length ? (
                items.map(p => (
                  <TableRow key={p.id} className="hover:bg-muted/40">
                    <TableCell>{p.id}</TableCell>
                    <TableCell>{p.description}</TableCell>
                    <TableCell>${p.amount} {p.currency}</TableCell>
                    <TableCell>{renderStatus(p.status)}</TableCell>
                    <TableCell>{p.createdAt}</TableCell>
                    <TableCell className="text-right"><Button size="sm" variant="outline">View</Button></TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground">No payments yet.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
