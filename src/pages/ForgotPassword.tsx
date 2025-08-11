import React, { useState } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { requestPasswordReset } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await requestPasswordReset(email);
      toast({ title: 'Email sent', description: 'Check your inbox for the reset link.' });
    } catch (e: any) {
      toast({ title: 'Request failed', description: e?.message || 'Something went wrong', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Forgot Password" description="Request a password reset link." icon={<BookOpen className="w-8 h-8 text-white" /> }>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="h-11" placeholder="you@example.com" />
        </div>
        <Button type="submit" className="w-full h-11" disabled={loading}>{loading ? 'Sending...' : 'Send Reset Link'}</Button>
      </form>
    </AuthShell>
  );
}
