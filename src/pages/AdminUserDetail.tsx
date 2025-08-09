import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { getAdminUserById } from '@/lib/api'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminUserDetail() {
  const { id = '' } = useParams()
  const { data, isLoading } = useQuery({ queryKey: ['admin-user', id], queryFn: () => getAdminUserById(id) })
  return (
    <PageLayout title={data ? data.name : `User ${id}`} description="Manage user profile, roles, and activity.">
      <Card>
        <CardHeader><CardTitle>User Details</CardTitle></CardHeader>
        <CardContent className="space-y-2">
          {isLoading ? (
            <div className="h-6 w-40 bg-muted animate-pulse rounded"/>
          ) : data ? (
            <>
              <div><span className="text-sm text-muted-foreground">Email: </span><span className="font-medium">{data.email}</span></div>
              <div><span className="text-sm text-muted-foreground">Role: </span><span className="font-medium capitalize">{data.role}</span></div>
              <div className="text-sm text-muted-foreground">Created: {data.createdAt} • Last Active: {data.lastActive}</div>
            </>
          ) : (
            <div className="text-sm text-muted-foreground">User not found.</div>
          )}
        </CardContent>
      </Card>
    </PageLayout>
  )
}
