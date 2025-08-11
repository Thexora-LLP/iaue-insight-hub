import { delay } from "./utils";
import type { Manuscript, Notification, UserProfile, AppSettings } from "./types";

// Mock data (User)
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

let mockProfile: UserProfile = {
  id: "u-1",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  affiliation: "IAUE",
  avatarUrl: undefined,
  bio: "Researcher in AI/ML",
};

let mockSettings: AppSettings = {
  language: "en",
  theme: "system",
  emailNotifications: true,
};

// Endpoints (User)
export async function listMyManuscripts(): Promise<{ items: Manuscript[] }> {
  await delay();
  return { items: mockManuscripts };
}

export async function listNotifications(): Promise<{ items: Notification[] }> {
  await delay();
  return { items: mockNotifications };
}

export async function getMyProfile(): Promise<UserProfile> {
  await delay();
  return mockProfile;
}

export async function updateMyProfile(patch: Partial<UserProfile>): Promise<UserProfile> {
  await delay();
  mockProfile = { ...mockProfile, ...patch };
  return mockProfile;
}

export async function getAppSettings(): Promise<AppSettings> {
  await delay();
  return mockSettings;
}

export async function updateAppSettings(patch: Partial<AppSettings>): Promise<AppSettings> {
  await delay();
  mockSettings = { ...mockSettings, ...patch };
  return mockSettings;
}

// Downloads (mock)
export type DownloadItem = {
  id: string;
  title: string;
  kind: 'Article' | 'Issue' | 'Conference' | 'Textbook' | 'Manuscript';
  route: string; // where to view the item
  size: string;
  createdAt: string;
};

let mockDownloads: DownloadItem[] = [
  { id: 'd1', title: 'AI in Healthcare (Article)', kind: 'Article', route: '/articles/a-1', size: '2.4 MB', createdAt: '2025-01-10' },
  { id: 'd2', title: 'Journal Vol. 12 Issue 1 (Issue)', kind: 'Issue', route: '/journals/j-12-1', size: '18.1 MB', createdAt: '2025-01-05' },
  { id: 'd3', title: 'Operating Systems (Textbook)', kind: 'Textbook', route: '/textbooks/t2', size: '5.7 MB', createdAt: '2025-01-02' },
];

export async function listDownloads(): Promise<{ items: DownloadItem[] }> {
  await delay();
  return { items: mockDownloads };
}

export async function deleteDownload(id: string): Promise<{ ok: true }>{
  await delay();
  mockDownloads = mockDownloads.filter((d) => d.id !== id);
  return { ok: true };
}

export async function getDownloadUrl(id: string): Promise<{ url: string }>{
  await delay();
  // In real app this would be a signed URL in storage. For now, use placeholder.
  return { url: '/placeholder.svg' };
}

// Re-exports for editor queue mock reuse
export { mockManuscripts };