import React, { useEffect, useState } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import { BookOpen } from 'lucide-react';
import { verifyEmail as verifyEmailApi } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { useSearchParams } from 'react-router-dom';

export default function VerifyEmail() {
  const [params] = useSearchParams();
  const token = params.get('token') || '';
  const { toast } = useToast();
  const [status, setStatus] = useState<'idle'|'success'|'error'>('idle');

  useEffect(() => {
    const run = async () => {
      try {
        await verifyEmailApi(token);
        setStatus('success');
        toast({ title: 'Email verified', description: 'Your account is now active.' });
      } catch (e: any) {
        setStatus('error');
        toast({ title: 'Verification failed', description: e?.message || 'Invalid or expired link', variant: 'destructive' });
      }
    };
    if (token) run();
  }, [token, toast]);

  return (
    <AuthShell title="Verify Your Email" description={status==='success' ? 'Your email has been verified.' : 'We have sent a verification link to your email.'} icon={<BookOpen className="w-8 h-8 text-white" /> }>
      <p className="text-muted-foreground">{status==='success' ? 'You can close this window or proceed to sign in.' : 'Please check your inbox and follow the instructions to verify your account.'}</p>
    </AuthShell>
  );
}
