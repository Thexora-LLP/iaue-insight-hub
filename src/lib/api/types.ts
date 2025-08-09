// Shared API Types
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

// Auth / User models
export type User = {
  id: string;
  name: string;
  email: string;
  role: "user" | "editor" | "admin";
};

export type UserProfile = {
  id: string;
  name: string;
  email: string;
  affiliation: string;
  avatarUrl?: string;
  bio?: string;
};

export type AppSettings = {
  language: string;
  theme: "light" | "dark" | "system";
  emailNotifications: boolean;
};

export type Payment = {
  id: string;
  amount: number;
  currency: string;
  status: "pending" | "succeeded" | "failed";
  createdAt: string;
  description: string;
};

export type AdminUser = User & { createdAt: string; lastActive: string };

export type ApiError = { message: string };
