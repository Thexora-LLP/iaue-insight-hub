import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getAdminStats } from '@/lib/api'

export default function AdminAnalytics() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-stats'], queryFn: getAdminStats })

  const StatCard = ({ label, value }: { label: string; value?: string }) => (
    <Card>
      <CardContent className="p-md">
        {isLoading ? (
          <div className="h-8 w-24 rounded bg-muted animate-pulse" />
        ) : (
          <div className="space-y-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )

  return (
    <PageLayout title="Analytics Dashboard" description="Visualize system metrics and trends.">
      <div className="grid md:grid-cols-4 gap-lg">
        <StatCard label="Users" value={data?.totalUsers?.toLocaleString()} />
        <StatCard label="Manuscripts" value={data?.manuscripts?.toLocaleString()} />
        <StatCard label="Revenue" value={`$${data?.revenue?.toLocaleString()}`} />
        <StatCard label="Bounce Rate" value={`${data?.bounceRate}%`} />
      </div>
    </PageLayout>
  )
}
