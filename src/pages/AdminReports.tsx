import React, { useState } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'

export default function AdminReports() {
  const [type, setType] = useState('users')

  return (
    <PageLayout title="Reports" description="Generate and export system reports.">
      <Card>
        <CardHeader><CardTitle>Generate Report</CardTitle></CardHeader>
        <CardContent className="space-y-md">
          <div className="grid gap-md md:grid-cols-3">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Report Type</label>
              <Select value={type} onValueChange={setType}>
                <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="users">Users</SelectItem>
                  <SelectItem value="manuscripts">Manuscripts</SelectItem>
                  <SelectItem value="payments">Payments</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button>Export CSV</Button>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
