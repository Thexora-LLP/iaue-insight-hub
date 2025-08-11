import React, { useState } from 'react';
import PageLayout from '@/components/layout/PageLayout';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getMyProfile, updateMyProfile, type UserProfile } from '@/lib/api';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export default function Profile() {
  const { data, isLoading } = useQuery({ queryKey: ['me'], queryFn: getMyProfile });
  const qc = useQueryClient();
  const { toast } = useToast();
  const [local, setLocal] = useState<Partial<UserProfile>>({});

  const mut = useMutation({
    mutationFn: (patch: Partial<UserProfile>) => updateMyProfile(patch),
    onSuccess: () => {
      toast({ title: 'Profile updated' });
      qc.invalidateQueries({ queryKey: ['me'] });
    },
    onError: (e: any) => toast({ title: 'Update failed', description: e?.message || 'Something went wrong', variant: 'destructive' })
  });

  const profile = data;

  return (
    <PageLayout title="My Profile" description="Manage your personal and academic information.">
      <div className="grid md:grid-cols-2 gap-lg">
        <Card>
          <CardHeader><CardTitle>Profile</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Full Name</Label>
              <Input value={local.name ?? profile?.name ?? ''} onChange={(e)=>setLocal((s)=>({ ...s, name: e.target.value }))} />
            </div>
            <div className="space-y-2">
              <Label>Email</Label>
              <Input value={profile?.email ?? ''} disabled />
            </div>
            <div className="space-y-2">
              <Label>Affiliation</Label>
              <Input value={local.affiliation ?? profile?.affiliation ?? ''} onChange={(e)=>setLocal((s)=>({ ...s, affiliation: e.target.value }))} />
            </div>
            <Button onClick={()=>mut.mutate(local)} disabled={mut.isPending || isLoading}>{mut.isPending ? 'Saving...' : 'Save changes'}</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader><CardTitle>At a glance</CardTitle></CardHeader>
          <CardContent>
            <div className="text-sm text-muted-foreground">Quick stats will appear here.</div>
          </CardContent>
        </Card>
      </div>
    </PageLayout>
  );
}
