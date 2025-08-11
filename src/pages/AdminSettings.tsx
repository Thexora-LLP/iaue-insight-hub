import React, { useEffect } from 'react'
import PageLayout from '@/components/layout/PageLayout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Switch } from '@/components/ui/switch'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { getAppSettings, updateAppSettings } from '@/lib/api'

export default function AdminSettings() {
  const qc = useQueryClient()
  const { data } = useQuery({ queryKey: ['app-settings'], queryFn: getAppSettings })
  const mut = useMutation({
    mutationFn: updateAppSettings,
    onSuccess: () => qc.invalidateQueries({ queryKey: ['app-settings'] })
  })

  useEffect(() => { /* Ensure consistent SEO via PageLayout */ }, [])

  const settings = data ?? { language: 'en', theme: 'system', emailNotifications: true }

  return (
    <PageLayout title="System Settings" description="Global configurations and environment.">
      <Card>
        <CardHeader><CardTitle>Preferences</CardTitle></CardHeader>
        <CardContent className="space-y-md">
          <div className="grid gap-md md:grid-cols-3">
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Language</label>
              <Select value={settings.language} onValueChange={(v) => mut.mutate({ language: v })}>
                <SelectTrigger><SelectValue placeholder="Select language" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <label className="text-sm text-muted-foreground">Theme</label>
              <Select value={settings.theme} onValueChange={(v: any) => mut.mutate({ theme: v })}>
                <SelectTrigger><SelectValue placeholder="Select theme" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between border rounded p-sm">
              <div>
                <div className="font-medium">Email notifications</div>
                <div className="text-sm text-muted-foreground">Send system emails to admins</div>
              </div>
              <Switch checked={settings.emailNotifications} onCheckedChange={(v) => mut.mutate({ emailNotifications: v })} />
            </div>
          </div>
        </CardContent>
      </Card>
    </PageLayout>
  )
}
