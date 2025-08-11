import React from 'react';
import AuthShell from '@/components/auth/AuthShell';
import { BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function AccountActivated() {
  return (
    <AuthShell title="Account Activated" description="Your account has been successfully activated." icon={<BookOpen className="w-8 h-8 text-white" /> }>
      <p className="text-muted-foreground">You can now sign in and access your dashboard.</p>
      <div className="pt-2">
        <Button asChild className="w-full h-11"><Link to="/login">Go to Sign In</Link></Button>
      </div>
    </AuthShell>
  );
}
