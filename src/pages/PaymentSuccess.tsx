import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useSearchParams, Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getPayment } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function PaymentSuccess() {
  const [params] = useSearchParams()
  const paymentId = params.get('paymentId') || ''
  const { data, isLoading } = useQuery({ queryKey: ['payment', paymentId], queryFn: () => getPayment(paymentId), enabled: !!paymentId })

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
              <div className="text-sm text-muted-foreground">Payment ID</div>
              <div className="font-medium">{data.id}</div>
              <div className="text-sm text-muted-foreground">Amount</div>
              <div className="font-medium">${data.amount} {data.currency}</div>
              <div className="text-sm text-muted-foreground">Status</div>
              <div className="font-medium capitalize">{data.status}</div>
              <div className="pt-sm">
                <Button asChild><Link to="/payments">Back to Payments</Link></Button>
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
