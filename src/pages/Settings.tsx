import React from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getAppSettings, updateAppSettings, type AppSettings } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Settings() {
  const { data } = useQuery({ queryKey: ['settings'], queryFn: getAppSettings });
  const qc = useQueryClient();
  const { toast } = useToast();
  const mut = useMutation({
    mutationFn: (patch: Partial<AppSettings>) => updateAppSettings(patch),
    onSuccess: () => { toast({ title: 'Settings updated' }); qc.invalidateQueries({ queryKey: ['settings'] }); },
    onError: (e: any) => toast({ title: 'Update failed', description: e?.message || 'Something went wrong', variant: 'destructive' })
  });

  return (
    <PageLayout title="Account Settings" description="Security, preferences, and notifications.">
      <div className="grid md:grid-cols-2 gap-lg">
        <Card>
          <CardHeader><CardTitle>Preferences</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="text-sm font-medium">Language</div>
              <Select value={data?.language} onValueChange={(v)=>mut.mutate({ language: v })}>
                <SelectTrigger className="w-56"><SelectValue placeholder="Select language"/></SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="fr">French</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-medium">Email notifications</div>
                <div className="text-xs text-muted-foreground">Receive important updates</div>
              </div>
              <Switch checked={!!data?.emailNotifications} onCheckedChange={(v)=>mut.mutate({ emailNotifications: v })} />
            </div>
            <div className="space-y-2">
              <div className="text-sm font-medium">Theme</div>
              <div className="flex gap-2">
                <Button variant={data?.theme==='light'?'default':'outline'} onClick={()=>mut.mutate({ theme: 'light' })}>Light</Button>
                <Button variant={data?.theme==='dark'?'default':'outline'} onClick={()=>mut.mutate({ theme: 'dark' })}>Dark</Button>
                <Button variant={data?.theme==='system'?'default':'outline'} onClick={()=>mut.mutate({ theme: 'system' })}>System</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>Security</CardTitle></CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Password and 2FA settings will appear here.</div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
