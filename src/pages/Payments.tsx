import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listPayments } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'

export default function Payments() {
  const { data, isLoading } = useQuery({ queryKey: ['my-payments'], queryFn: listPayments })
  const items = data?.items ?? []

  const statusBadge = (s: string) => {
    const variant = s === 'failed' ? 'destructive' : s === 'pending' ? 'secondary' : 'default'
    return <Badge variant={variant as any} className="capitalize">{s}</Badge>
  }

  const downloadReceipt = (p: any) => {
    const lines = [
      'Makandu Consortium – Payment Receipt',
      `Payment ID: ${p.id}`,
      `Description: ${p.description}`,
      `Amount: ${formatCurrency(p.amount, p.currency)}`,
      `Status: ${p.status}`,
      `Date: ${p.createdAt}`,
    ]
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `receipt-${p.id}.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <PageLayout title="Payment History" description="View your transactions and download receipts.">
      <Card>
        <CardHeader>
          <CardTitle>Your Transactions</CardTitle>
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
                <TableHead className="text-right">Receipt</TableHead>
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
                    <TableCell>{formatCurrency(p.amount, p.currency)}</TableCell>
                    <TableCell>{statusBadge(p.status)}</TableCell>
                    <TableCell>{p.createdAt}</TableCell>
                    <TableCell className="text-right"><Button size="sm" variant="outline" onClick={() => downloadReceipt(p)}>Download</Button></TableCell>
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
