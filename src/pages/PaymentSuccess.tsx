import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useSearchParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPayment } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'

export default function PaymentSuccess() {
  const [params] = useSearchParams()
  const paymentId = params.get('paymentId') || ''
  const { data, isLoading } = useQuery({ queryKey: ['payment', paymentId], queryFn: () => getPayment(paymentId), enabled: !!paymentId })

  const getContinuePath = (desc?: string) => {
    if (!desc) return '/payments'
    const d = desc.toLowerCase()
    if (d.includes('conference')) return '/my-registrations'
    if (d.includes('publication') || d.includes('manuscript') || d.includes('journal')) return '/my-manuscripts'
    return '/payments'
  }

  const downloadReceipt = () => {
    if (!data) return
    const lines = [
      'Makandu Consortium – Payment Receipt',
      `Payment ID: ${data.id}`,
      `Description: ${data.description}`,
      `Amount: ${formatCurrency(data.amount, data.currency)}`,
      `Status: ${data.status}`,
      `Date: ${data.createdAt}`,
    ]
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `receipt-${data.id}.txt`
    document.body.appendChild(a)
    a.click()
    a.remove()
    URL.revokeObjectURL(url)
  }

  return (
    <PageLayout title="Payment Success" description="Your payment has been confirmed.">
      <Card>
        <CardHeader>
          <CardTitle>Thank you!</CardTitle>
        </CardHeader>
        <CardContent className="space-y-sm">
          {isLoading ? (
            <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
          ) : data ? (
            <>
              <div className="grid md:grid-cols-2 gap-md">
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Payment ID</div>
                  <div className="font-medium">{data.id}</div>
                  <div className="text-sm text-muted-foreground">Description</div>
                  <div className="font-medium">{data.description}</div>
                </div>
                <div className="space-y-1">
                  <div className="text-sm text-muted-foreground">Amount</div>
                  <div className="font-medium">{formatCurrency(data.amount, data.currency)}</div>
                  <div className="text-sm text-muted-foreground">Status</div>
                  <div className="font-medium capitalize">{data.status}</div>
                </div>
              </div>
              <div className="pt-sm flex gap-sm">
                <Button onClick={downloadReceipt} variant="outline">Download Receipt</Button>
                <Button asChild><Link to={getContinuePath(data.description)}>Continue</Link></Button>
              </div>
            </>
          ) : (
            <div className="text-muted-foreground">Your payment was processed.</div>
          )}
        </CardContent>
      </Card>
    </PageLayout>
  )
}
