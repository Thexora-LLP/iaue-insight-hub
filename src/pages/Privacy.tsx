import PageLayout from "@/components/layout/PageLayout";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout
      title="Contact Us"
      description="Reach out for support, partnerships, or general inquiries."
    >
      <section className="max-w-6xl mx-auto py-16 px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

          {/* === Contact Form === */}
          <form
            className="space-y-6 bg-white shadow-md rounded-2xl p-8 border-l-4 border-blue-600"
          >
            <h2 className="text-2xl font-semibold text-blue-700 mb-2">
              Send Us a Message
            </h2>
            <p className="text-gray-600 text-sm mb-6">
              We’d love to hear from you! Fill out the form and our team will
              get back to you shortly.
            </p>

            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                id="name"
                type="text"
                required
                className="w-full h-11 rounded-lg border border-gray-300 px-4 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full h-11 rounded-lg border border-gray-300 px-4 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
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
                className="w-full rounded-lg border border-gray-300 px-4 py-3 bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
                rows={5}
                placeholder="How can we assist you?"
              />
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center rounded-lg bg-blue-600 text-white px-6 h-11 font-medium hover:bg-blue-700 shadow-md transition"
            >
              Send Message
            </button>
          </form>

          {/* === Contact Info & Map === */}
          <aside className="bg-blue-50 rounded-2xl p-8 shadow-md border-l-4 border-blue-600 space-y-6">
            <h2 className="text-2xl font-semibold text-blue-700">
              Our Location
            </h2>
            <p className="text-gray-700">
              Visit or contact us through any of the channels below.
            </p>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-3">
                <MapPin className="text-blue-600 w-5 h-5" />
                <span>Ignatius Ajuru University of Education</span>
              </p>

              <p className="flex items-center gap-3">
                <Mail className="text-blue-600 w-5 h-5" />
                <span>info@makandujournals.org</span>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="text-blue-600 w-5 h-5" />
                <span>+234 810 000 1234</span>
              </p>
            </div>

            <div className="w-full h-64 md:h-72 rounded-xl overflow-hidden shadow-lg border border-blue-100">
              <iframe
                title="Makandu Office Location"
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
      </section>
    </PageLayout>
  );
}
