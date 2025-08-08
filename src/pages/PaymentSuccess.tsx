import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function PaymentSuccess() {
  return (
    <PageLayout title="Payment Success" description="Your payment has been confirmed.">
      <div className="border rounded-lg p-md bg-card">Receipt and details placeholder.</div>
    </PageLayout>
  )
}
