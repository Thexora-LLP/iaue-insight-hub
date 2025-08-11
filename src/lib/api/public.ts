import { delay } from "./utils";
import type { Conference, FeaturedArticle, JournalIssue, Pagination } from "./types";

// Mock data (Public)
const mockIssues: JournalIssue[] = [
  {
    id: "8-4",
    volume: 8,
    issue: 4,
    year: 2024,
    publishedDate: "2024-01-30",
    articles: 12,
    downloads: 2340,
    description: "Latest research in engineering and computer science",
  },
  {
    id: "8-3",
    volume: 8,
    issue: 3,
    year: 2024,
    publishedDate: "2024-01-15",
    articles: 15,
    downloads: 3120,
    description: "Special issue on artificial intelligence applications",
  },
];

const mockFeatured: FeaturedArticle[] = [
  {
    id: "fa-1",
    title: "Deep Learning in Medical Image Analysis: Current Trends and Future Prospects",
    authors: "Dr. Sarah Johnson, Dr. Michael Chen, Dr. Emily Rodriguez",
    abstract:
      "This comprehensive review examines the current state of deep learning applications in medical imaging...",
    volume: 8,
    issue: 4,
    pages: "45-67",
    doi: "10.5281/zenodo.1234567",
    downloads: 450,
    citations: 23,
    publishedDate: "2024-01-30",
  },
];

const mockConfs: Conference[] = [
  {
    id: "1",
    title: "International Conference on Artificial Intelligence & Machine Learning 2024",
    date: "March 15-17, 2024",
    location: "Lagos, Nigeria",
    type: "Hybrid",
    status: "Registration Open",
    price: "₦120,000",
    earlyBirdPrice: "₦90,000",
    deadline: "February 28, 2024",
    speakers: 25,
    sessions: 45,
    attendees: "500+",
    rating: 4.8,
    description:
      "Join leading researchers and practitioners in AI/ML for three days of cutting-edge presentations and networking.",
    topics: ["Deep Learning", "Computer Vision", "NLP", "Robotics"],
  },
];

// Endpoints (Public)
export async function listJournalIssues(params?: Pagination): Promise<{ items: JournalIssue[] }> {
  await delay();
  return { items: mockIssues };
}

export async function listFeaturedArticles(): Promise<{ items: FeaturedArticle[] }> {
  await delay();
  return { items: mockFeatured };
}

export async function getJournalIssue(id: string): Promise<JournalIssue | undefined> {
  await delay();
  return mockIssues.find((i) => i.id === id);
}

export async function listConferences(params?: Pagination): Promise<{ items: Conference[] }> {
  await delay();
  return { items: mockConfs };
}

export async function searchAll(q: string): Promise<{ articles: number; issues: number; conferences: number }>{
  await delay();
  return { articles: 25, issues: 6, conferences: 3 };
}
