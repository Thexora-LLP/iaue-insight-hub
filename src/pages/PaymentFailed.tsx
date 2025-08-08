import React from 'react'
import PageLayout from '@/components/layout/PageLayout'

export default function PaymentFailed() {
  return (
    <PageLayout title="Payment Failed" description="There was an issue processing your payment.">
      <div className="border rounded-lg p-md bg-card">Retry and support options placeholder.</div>
    </PageLayout>
  )
}
