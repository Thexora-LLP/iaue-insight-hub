import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function About() {
  return (
    <PageLayout title="About Us" description="Learn about IAUE Research Gate's mission, vision, and values.">
      <div className="grid md:grid-cols-2 gap-lg">
        <article className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-sm">Our Mission</h2>
          <p className="text-muted-foreground">Advancing academic excellence through innovative publishing and global scholarly communication.</p>
          <h2 className="text-xl font-semibold mt-lg mb-sm">Our Vision</h2>
          <p className="text-muted-foreground">To be the most trusted platform for researchers to publish, collaborate, and impact the world.</p>
        </article>
        <aside className="rounded-lg border bg-card p-lg shadow-academic">
          <h3 className="font-semibold mb-sm">At a glance</h3>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>20,000+ authors</li>
            <li>30+ countries</li>
            <li>15,000+ publications</li>
          </ul>
        </aside>
      </div>
    </PageLayout>
  );
}
