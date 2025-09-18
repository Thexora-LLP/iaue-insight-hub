import React from 'react';
import PageLayout from '@/components/layout/PageLayout';

export default function Contact() {
  return (    
  <PageLayout title="Contact Us" description="Reach out for support, partnerships, or inquiries.">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        <form 
          className="space-y-6 bg-white shadow-md rounded-2xl p-6 md:p-8 border order-1 md:order-1"
        >
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              className="w-full h-11 rounded-lg border border-gray-300 px-4 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              placeholder="Your name"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              className="w-full h-11 rounded-lg border border-gray-300 px-4 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              id="message"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition"
              rows={5}
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center rounded-lg bg-primary text-primary-foreground px-6 h-11 font-medium hover:bg-primary/90 shadow-md transition"
          >
            Send Message
          </button>
        </form>

        <aside className="border rounded-lg p-6 bg-card order-2 md:order-2 space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Head Office</h3>
            <p className="text-sm text-muted-foreground">
              Ignatius Ajuru University of Education
            </p>
          </div>

          <div className="w-full h-64 md:h-80 rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Head Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.673!2d3.3792!3d6.5244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf50c8c8b8f3%3A0x123456789abcdef!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1691234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </aside>

      </div>
    </PageLayout>
  );
}
