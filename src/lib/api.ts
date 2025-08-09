// Centralized API layer (mocked). Swap implementations to Supabase when connected.
// IMPORTANT: This is frontend-only. To enable real backend, connect Supabase (green button) and replace these mocks.

// Common types
export type Pagination = { page?: number; pageSize?: number };

// Public
export type JournalIssue = {
  id: string;
  volume: number;
  issue: number;
  year: number;
  publishedDate: string;
  articles: number;
  downloads: number;
  description: string;
};

export type FeaturedArticle = {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  volume: number;
  issue: number;
  pages: string;
  doi: string;
  downloads: number;
  citations: number;
  publishedDate: string;
};

export type Conference = {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "Virtual" | "Physical" | "Hybrid";
  status: "Registration Open" | "Early Bird" | "Call for Papers" | "Coming Soon";
  price: string;
  earlyBirdPrice: string;
  deadline: string;
  speakers: number;
  sessions: number;
  attendees: string;
  rating: number;
  description: string;
  topics: string[];
};

// User
export type Manuscript = {
  id: string;
  title: string;
  status: "Accepted" | "In Production" | "Under Review" | "Revision Required" | "Submitted";
  submittedDate: string;
  lastUpdate: string;
  progress: number;
  category: string;
  type: string;
  reviewers: number;
  comments: number;
};

export type Notification = {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  read: boolean;
};

export type AdminStats = {
  totalUsers: number;
  manuscripts: number;
  revenue: number;
  bounceRate: number;
};

// Simulate latency
const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

// Mock database
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
    location: "MIT, Cambridge, MA",
    type: "Hybrid",
    status: "Registration Open",
    price: "$299",
    earlyBirdPrice: "$199",
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

const mockManuscripts: Manuscript[] = [
  {
    id: "MS-2024-001",
    title: "Deep Learning Approaches in Medical Diagnosis: A Comprehensive Study",
    status: "Under Review",
    submittedDate: "2024-01-15",
    lastUpdate: "2024-01-20",
    progress: 60,
    category: "Computer Science",
    type: "Research Article",
    reviewers: 2,
    comments: 3,
  },
  {
    id: "MS-2024-002",
    title: "Blockchain Technology in Supply Chain Management",
    status: "Revision Required",
    submittedDate: "2024-01-10",
    lastUpdate: "2024-01-25",
    progress: 40,
    category: "Engineering",
    type: "Research Article",
    reviewers: 3,
    comments: 8,
  },
];

const mockNotifications: Notification[] = [
  { id: "n1", title: "Review Assigned", message: "You have a new review to complete.", createdAt: "2024-02-01", read: false },
  { id: "n2", title: "Submission Received", message: "Your manuscript was received.", createdAt: "2024-01-29", read: true },
];

// Public endpoints
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

// User endpoints
export async function listMyManuscripts(): Promise<{ items: Manuscript[] }> {
  await delay();
  return { items: mockManuscripts };
}

export async function listNotifications(): Promise<{ items: Notification[] }> {
  await delay();
  return { items: mockNotifications };
}

// Editor endpoints
export async function getReviewQueue(): Promise<{ items: Manuscript[] }> {
  await delay();
  // reuse manuscripts as mock review queue
  return { items: mockManuscripts };
}

// Admin endpoints
export async function getAdminStats(): Promise<AdminStats> {
  await delay();
  return { totalUsers: 1280, manuscripts: 342, revenue: 52340, bounceRate: 12.4 };
}

// Search
export async function searchAll(q: string): Promise<{ articles: number; issues: number; conferences: number }>{
  await delay();
  return { articles: 25, issues: 6, conferences: 3 };
}
