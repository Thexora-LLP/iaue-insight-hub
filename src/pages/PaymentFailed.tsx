import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useNavigate, Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { XCircle } from 'lucide-react'

export default function PaymentFailed() {
  const navigate = useNavigate()
  return (
    <PageLayout title="Payment Failed" description="There was an issue processing your payment.">
      <div className="grid gap-md md:grid-cols-3">
        <Card className="md:col-span-2 order-2 md:order-1">
          <CardHeader>
            <CardTitle>We couldn’t complete your payment</CardTitle>
          </CardHeader>
          <CardContent className="space-y-md">
            <Alert variant="destructive">
              <XCircle className="h-4 w-4" />
              <AlertTitle>Payment error</AlertTitle>
              <AlertDescription>
                Your transaction was declined or interrupted. You can retry with a different method or contact support.
              </AlertDescription>
            </Alert>
            <div className="flex gap-sm">
              <Button onClick={() => navigate('/checkout')}>Retry Payment</Button>
              <Button variant="outline" asChild><Link to="/payments">View History</Link></Button>
            </div>
            <p className="text-sm text-muted-foreground">If you were charged, the transaction will auto-reverse by your provider.
              For assistance, email support@makandu.ng.</p>
          </CardContent>
        </Card>
        <Card className="order-1 md:order-2">
          <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
          <CardContent className="space-y-1 text-sm text-muted-foreground">
            <div className="flex items-center justify-between"><span>Item</span><span className="font-medium">Publication Fee</span></div>
            <div className="flex items-center justify-between"><span>Total</span><span className="font-semibold">₦50,000</span></div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  )
}
