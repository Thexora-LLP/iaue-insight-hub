import React from 'react'
import { useParams } from 'react-router-dom'
import PageLayout from '@/components/layout/PageLayout'

export default function AdminUserDetail() {
  const { id } = useParams()
  return (
    <PageLayout title={`User ${id || ''}`} description="Manage user profile, roles, and activity.">
      <div className="border rounded-lg p-md bg-card">User details placeholder.</div>
    </PageLayout>
  )
}
