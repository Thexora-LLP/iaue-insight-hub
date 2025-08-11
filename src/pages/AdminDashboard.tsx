import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent } from '@/components/ui/card'
import { useQuery } from '@tanstack/react-query'
import { getAdminStats } from '@/lib/api'

export default function AdminDashboard() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-stats'], queryFn: getAdminStats })

  return (
    <PageLayout title="Admin Dashboard" description="System overview, metrics, and quick actions.">
      <div className="grid md:grid-cols-4 gap-lg">
        {[0,1,2,3].map((i) => (
          <Card key={i}>
            <CardContent className="p-md">
              {isLoading ? (
                <div className="h-8 w-24 rounded bg-muted animate-pulse" />
              ) : (
                <div className="space-y-1">
                  {i===0 && (<><p className="text-sm text-muted-foreground">Users</p><p className="text-2xl font-semibold">{data?.totalUsers.toLocaleString()}</p></>)}
                  {i===1 && (<><p className="text-sm text-muted-foreground">Manuscripts</p><p className="text-2xl font-semibold">{data?.manuscripts.toLocaleString()}</p></>)}
                  {i===2 && (<><p className="text-sm text-muted-foreground">Revenue</p><p className="text-2xl font-semibold">${data?.revenue.toLocaleString()}</p></>)}
                  {i===3 && (<><p className="text-sm text-muted-foreground">Bounce Rate</p><p className="text-2xl font-semibold">{data?.bounceRate}%</p></>)}
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </PageLayout>
  )
}
