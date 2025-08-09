import { delay } from "./utils";

export type FAQItem = { q: string; a: string };

const faqs: FAQItem[] = [
  { q: "How do I submit a manuscript?", a: "Go to Submit Manuscript page and follow the steps." },
  { q: "How long is the review process?", a: "Typically 2-4 weeks depending on reviewers' availability." },
];

export async function getFAQs(): Promise<{ items: FAQItem[] }>{
  await delay();
  return { items: faqs };
}

export async function getSitemap(): Promise<{ urls: string[] }>{
  await delay();
  return { urls: ["/", "/about", "/journals", "/conferences", "/contact"] };
}
