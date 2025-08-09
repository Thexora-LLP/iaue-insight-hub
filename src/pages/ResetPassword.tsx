import React, { useState } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { resetPassword } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams, useNavigate } from 'react-router-dom';

export default function ResetPassword() {
  const [pwd1, setPwd1] = useState('');
  const [pwd2, setPwd2] = useState('');
  const [loading, setLoading] = useState(false);
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd1 !== pwd2) {
      toast({ title: 'Passwords do not match', variant: 'destructive' });
      return;
    }
    setLoading(true);
    try {
      await resetPassword(token, pwd1);
      toast({ title: 'Password updated', description: 'You can now sign in.' });
      navigate('/login');
    } catch (e: any) {
      toast({ title: 'Reset failed', description: e?.message || 'Something went wrong', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Reset Password" description="Create a new password for your account." icon={<BookOpen className="w-8 h-8 text-white" /> }>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Label htmlFor="pwd1">New Password</Label>
          <Input id="pwd1" type="password" value={pwd1} onChange={(e)=>setPwd1(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="pwd2">Confirm Password</Label>
          <Input id="pwd2" type="password" value={pwd2} onChange={(e)=>setPwd2(e.target.value)} className="h-11" />
        </div>
        <Button type="submit" className="w-full h-11" disabled={loading}>{loading ? 'Updating...' : 'Update Password'}</Button>
      </form>
    </AuthShell>
  );
}
