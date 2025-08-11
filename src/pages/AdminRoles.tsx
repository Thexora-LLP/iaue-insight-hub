import React, { useMemo, useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { useQuery } from '@tanstack/react-query'
import { listAdminUsers } from '@/lib/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useToast } from '@/hooks/use-toast'

export default function AdminRoles() {
  const { data } = useQuery({ queryKey: ['admin-users'], queryFn: listAdminUsers })
  const base = data?.items ?? []
  const [roles, setRoles] = useState<Record<string, 'user'|'editor'|'admin'>>({})
  const { toast } = useToast()

  const users = useMemo(() => base.map(u => ({ ...u, role: roles[u.id] ?? u.role })), [base, roles])

  const save = (id: string) => {
    toast({ title: 'Role updated', description: `Saved role: ${roles[id] || base.find(b=>b.id===id)?.role}` })
  }

  return (
    <PageLayout title="Role Management" description="Assign and manage user roles.">
      <Card>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Role</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map(u => (
                <TableRow key={u.id} className="hover:bg-muted/40">
                  <TableCell className="font-medium">{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>
                    <Select value={u.role} onValueChange={(v: any) => setRoles(r => ({ ...r, [u.id]: v }))}>
                      <SelectTrigger className="w-[160px]"><SelectValue placeholder="Select role" /></SelectTrigger>
                      <SelectContent>
                        <SelectItem value="user">User</SelectItem>
                        <SelectItem value="editor">Editor</SelectItem>
                        <SelectItem value="admin">Admin</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" onClick={() => save(u.id)}>Save</Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
