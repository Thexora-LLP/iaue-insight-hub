import React, { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { checkout } from '@/lib/api'
import { useToast } from '@/hooks/use-toast'
import { useNavigate } from 'react-router-dom'

export default function Checkout() {
  const [amount, setAmount] = useState<number>(50000)
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const navigate = useNavigate()

  const onPay = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { paymentId } = await checkout(amount)
      toast({ title: 'Redirecting…', description: 'Completing your secure payment.' })
      navigate(`/payment-success?paymentId=${paymentId}`)
    } catch (e: any) {
      toast({ title: 'Payment failed', description: e?.message || 'Please try again', variant: 'destructive' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <PageLayout title="Payment Processing" description="Securely complete your payment.">
      <Card>
        <CardHeader>
          <CardTitle>Checkout</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={onPay} className="space-y-md">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Amount (NGN)</label>
              <Input type="number" min={1} value={amount} onChange={(e) => setAmount(parseFloat(e.target.value || '0'))} />
            </div>
            <Button type="submit" disabled={loading || amount <= 0}>{loading ? 'Processing…' : 'Pay Now'}</Button>
          </form>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
