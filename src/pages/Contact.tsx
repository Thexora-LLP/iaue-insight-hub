import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Contact() {
  return (
    <PageLayout title="Contact Us" description="Reach out for support, partnerships, or inquiries.">
      <div className="grid md:grid-cols-2 gap-lg">
        <form className="space-y-md">
          <div>
            <label className="text-sm font-medium">Name</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" placeholder="Your name" />
          </div>
          <div>
            <label className="text-sm font-medium">Email</label>
            <input className="mt-1 w-full h-10 rounded-md border px-3 bg-background" placeholder="you@example.com" />
          </div>
          <div>
            <label className="text-sm font-medium">Message</label>
            <textarea className="mt-1 w-full rounded-md border px-3 py-2 bg-background" rows={5} placeholder="How can we help?" />
          </div>
          <button className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-4 h-10">Send</button>
        </form>
        <aside className="border rounded-lg p-md bg-card">
          <h3 className="font-semibold mb-sm">Head Office</h3>
          <p className="text-sm text-muted-foreground">Academic District, University City</p>
        </aside>
      </div>
    </PageLayout>
  );
}
