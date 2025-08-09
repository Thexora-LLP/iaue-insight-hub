import React, { useState } from 'react';
import AuthShell from '@/components/auth/AuthShell';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { BookOpen } from 'lucide-react';
import { register as registerApi } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';
import { Link, useNavigate } from 'react-router-dom';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await registerApi(name, email, password);
      toast({ title: 'Account created', description: 'Please verify your email.' });
      navigate('/verify-email');
    } catch (e: any) {
      toast({ title: 'Registration failed', description: e?.message || 'Something went wrong', variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthShell title="Create Account" description="Join IAUE Research Gate to submit and manage your manuscripts." icon={<BookOpen className="w-8 h-8 text-white" /> }>
      <form className="space-y-4" onSubmit={onSubmit}>
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="h-11" />
        </div>
        <Button type="submit" className="w-full h-11" disabled={loading}>{loading ? 'Creating...' : 'Create Account'}</Button>
      </form>
      <div className="text-center text-sm text-muted-foreground">
        Already have an account? <Link to="/login" className="text-primary hover:underline font-medium">Sign in</Link>
      </div>
    </AuthShell>
  );
}
