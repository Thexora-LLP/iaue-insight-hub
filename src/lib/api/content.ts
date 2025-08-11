import { delay } from "./utils";

export type FAQItem = { q: string; a: string };
export type HelpTopic = { category: string; items: FAQItem[] };
export type PolicySection = { title: string; content: string[] };

// Journal-focused FAQs
const faqs: FAQItem[] = [
  { q: "How do I submit a manuscript?", a: "Go to Submit Manuscript and follow the guided steps. Upload your PDF and complete metadata." },
  { q: "What are the publication fees?", a: "Makandu Consortium charges a publication fee of ₦50,000 after acceptance." },
  { q: "How long is the review process?", a: "Typical first decision in 2–4 weeks depending on reviewer availability." },
  { q: "What file formats do you accept?", a: "PDF for review. After acceptance, source files (DOCX/LaTeX) may be requested." },
  { q: "How do I track my manuscript?", a: "Use Dashboard > My Manuscripts to view status, reviewer comments, and timelines." },
  { q: "How do I become a reviewer?", a: "Contact support with your CV and areas of expertise. Editors will reach out if there's a match." },
  { q: "Do you assign DOIs?", a: "Yes, DOIs are minted upon publication for all articles." },
];

const helpTopics: HelpTopic[] = [
  {
    category: "Account & Access",
    items: [
      { q: "I didn't receive a verification email", a: "Check spam. Use Verify Email page to resend or contact support." },
      { q: "Reset my password", a: "Use Forgot Password. Admins can also trigger a reset from Admin > Users." },
    ],
  },
  {
    category: "Submissions",
    items: [
      { q: "Formatting guidelines", a: "Follow the journal template. Ensure figures/tables are high resolution." },
      { q: "Revision policy", a: "Provide a point-by-point rebuttal and highlight changes in your manuscript." },
    ],
  },
  {
    category: "Payments",
    items: [
      { q: "Which payment methods are supported?", a: "Paystack, Flutterwave, and Direct Bank Transfer (NGN)." },
      { q: "Can I get a receipt/invoice?", a: "Yes, download receipts in Payments. A receipt is emailed upon success." },
    ],
  },
  {
    category: "Conferences",
    items: [
      { q: "How to register?", a: "Open a conference and click Register. Early-bird pricing is shown on the page." },
      { q: "Refund policy", a: "Refunds follow the conference policy; contact support for assistance." },
    ],
  },
];

const privacyPolicy: PolicySection[] = [
  { title: "Introduction", content: [
    "Makandu Consortium respects your privacy and is committed to protecting your personal data.",
    "This policy explains what data we collect, how we use it, and your rights.",
  ]},
  { title: "Data We Collect", content: [
    "Account data (name, email, affiliation)",
    "Usage and analytics data for service improvement",
    "Payment confirmations (handled by providers; we do not store card details)",
  ]},
  { title: "How We Use Data", content: [
    "Provide and improve journal and conference services",
    "Communicate about submissions, reviews, and payments",
    "Security, fraud prevention, and legal compliance",
  ]},
  { title: "Your Rights", content: [
    "Access, update, or delete your data",
    "Opt-out of non-essential communications",
  ]},
  { title: "Contact", content: [
    "support@makandu.ng",
  ]},
];

const termsOfService: PolicySection[] = [
  { title: "Acceptance of Terms", content: [
    "By using the Makandu Consortium platform, you agree to these terms.",
  ]},
  { title: "Submissions", content: [
    "Authors warrant originality and appropriate permissions for figures and data.",
    "Plagiarism or duplicate submission may result in rejection or retraction.",
  ]},
  { title: "Peer Review", content: [
    "We operate a standard editorial review workflow with qualified reviewers.",
  ]},
  { title: "Fees", content: [
    "Publication fee is ₦50,000 after acceptance. Conference fees vary by event.",
  ]},
  { title: "Limitation of Liability", content: [
    "Platform provided \"as is\" without warranties; liability limited to the maximum extent permitted by law.",
  ]},
];

const allUrls: string[] = [
  "/",
  "/about",
  "/journals",
  "/conferences",
  "/contact",
  "/privacy",
  "/terms",
  "/faq",
  "/help",
  "/sitemap",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/verify-email",
  "/account-activated",
  "/dashboard",
  "/profile",
  "/settings",
  "/submit-manuscript",
  "/my-manuscripts",
  "/notifications",
  "/payments",
  "/payment-success",
  "/payment-failed",
  "/library",
  "/downloads",
  "/viewer",
  "/search",
  "/advanced-search",
  "/search-results",
  "/my-registrations",
  "/articles/:id",
  "/conferences/:id",
  "/journals/:id",
  "/editor",
  "/editor/dashboard",
  "/editor/review",
  "/editor/assignment",
  "/editor/comms",
  "/editorial-calendar",
  "/editorial-decisions",
  "/review-queue",
  "/reviewer-management",
  "/admin",
  "/admin/analytics",
  "/admin/content",
  "/admin/conferences",
  "/admin/journals",
  "/admin/manuscripts",
  "/admin/payments",
  "/admin/reports",
  "/admin/users",
  "/admin/users/:id",
  "/admin/emails",
  "/admin/settings",
  "/admin/roles",
  "/admin/textbooks",
  "/checkout",
];

export async function getFAQs(): Promise<{ items: FAQItem[] }>{
  await delay();
  return { items: faqs };
}

export async function getHelpContent(): Promise<{ topics: HelpTopic[] }>{
  await delay();
  return { topics: helpTopics };
}

export async function getPrivacyPolicy(): Promise<{ lastUpdated: string; sections: PolicySection[] }>{
  await delay();
  return { lastUpdated: "2025-01-01", sections: privacyPolicy };
}

export async function getTerms(): Promise<{ lastUpdated: string; sections: PolicySection[] }>{
  await delay();
  return { lastUpdated: "2025-01-01", sections: termsOfService };
}

export async function getSitemap(): Promise<{ urls: string[] }>{
  await delay();
  return { urls: allUrls };
}
