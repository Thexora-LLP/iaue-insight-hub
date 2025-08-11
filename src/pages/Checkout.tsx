import React, { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { checkout } from '@/lib/api'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const PUBLICATION_FEE = 50000

type Method = 'paystack' | 'flutterwave' | 'bank'

export default function Checkout() {
  const [method, setMethod] = useState<Method | undefined>()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const onPay = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!method) return toast({ title: 'Select a payment method', variant: 'destructive' })
    try {
      setLoading(true)
      const { paymentId } = await checkout(PUBLICATION_FEE)
      toast({ title: 'Redirecting…', description: 'Completing your secure payment.' })
      navigate(`/payment-success?paymentId=${paymentId}`)
    } catch (e: any) {
      toast({ title: 'Payment failed', description: e?.message || 'Please try again', variant: 'destructive' })
      navigate(`/payment-failed`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout title="Checkout" description="Choose a payment method and complete your order.">
      <form onSubmit={onPay} className="grid gap-lg md:grid-cols-3">
        <Card className="md:col-span-2 order-2 md:order-1">
          <CardHeader><CardTitle>Payment Method</CardTitle></CardHeader>
          <CardContent className="space-y-md">
            <RadioGroup value={method} onValueChange={(v) => setMethod(v as Method)} className="grid gap-sm">
              <label className="flex items-center gap-sm border rounded-md p-md cursor-pointer">
                <RadioGroupItem value="paystack" id="paystack" />
                <span className="font-medium">Paystack</span>
                <span className="ml-auto text-sm text-muted-foreground">Cards • Bank • USSD</span>
              </label>
              <label className="flex items-center gap-sm border rounded-md p-md cursor-pointer">
                <RadioGroupItem value="flutterwave" id="flutterwave" />
                <span className="font-medium">Flutterwave</span>
                <span className="ml-auto text-sm text-muted-foreground">Cards • Bank • Mobile Money</span>
              </label>
              <label className="flex items-center gap-sm border rounded-md p-md cursor-pointer">
                <RadioGroupItem value="bank" id="bank" />
                <span className="font-medium">Direct Bank Transfer</span>
                <span className="ml-auto text-sm text-muted-foreground">Manual confirmation</span>
              </label>
            </RadioGroup>
            <div className="pt-sm">
              <Button type="submit" disabled={loading || !method}>{loading ? 'Processing…' : 'Pay Now'}</Button>
            </div>
          </CardContent>
        </Card>
        <Card className="order-1 md:order-2">
          <CardHeader><CardTitle>Order Summary</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-sm">
            <div className="flex items-center justify-between">
              <span>Publication Fee</span>
              <span className="font-medium">₦{PUBLICATION_FEE.toLocaleString('en-NG')}</span>
            </div>
            <div className="flex items-center justify-between text-muted-foreground">
              <span>VAT</span>
              <span>₦0</span>
            </div>
            <div className="flex items-center justify-between font-semibold">
              <span>Total</span>
              <span>₦{PUBLICATION_FEE.toLocaleString('en-NG')}</span>
            </div>
          </CardContent>
        </Card>
      </form>
    </PageLayout>
  )
}
