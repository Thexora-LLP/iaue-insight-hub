import React from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listAdminUsers } from '@/lib/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Link } from 'react-router-dom'

export default function AdminUsers() {
  const { data, isLoading } = useQuery({ queryKey: ['admin-users'], queryFn: listAdminUsers })
  const items = data?.items ?? []
  return (
    <PageLayout title="User Management" description="Search, filter, and manage users.">
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead>Created</TableHead>
                <TableHead>Last Active</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {isLoading ? (
                <TableRow><TableCell colSpan={5}><div className="h-6 w-40 bg-muted animate-pulse rounded"/></TableCell></TableRow>
              ) : items.map(u => (
                <TableRow key={u.id} className="hover:bg-muted/40">
                  <TableCell><Link to={`/admin/users/${u.id}`} className="text-primary hover:underline">{u.name}</Link></TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell className="capitalize">{u.role}</TableCell>
                  <TableCell>{u.createdAt}</TableCell>
                  <TableCell>{u.lastActive}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
