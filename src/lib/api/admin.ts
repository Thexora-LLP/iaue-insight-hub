import { delay } from "./utils";
import type { AdminStats, AdminUser } from "./types";

const adminUsers: AdminUser[] = [
  { id: "u-1", name: "Jane Doe", email: "jane.doe@example.com", role: "admin", createdAt: "2024-01-01", lastActive: "2024-02-01" },
  { id: "u-2", name: "John Smith", email: "john.smith@example.com", role: "editor", createdAt: "2024-01-10", lastActive: "2024-02-03" },
  { id: "u-3", name: "Mary Johnson", email: "mary.j@example.com", role: "user", createdAt: "2024-01-15", lastActive: "2024-02-02" },
];

export async function getAdminStats(): Promise<AdminStats> {
  await delay();
  return { totalUsers: 1280, manuscripts: 342, revenue: 52340, bounceRate: 12.4 };
}

export async function listAdminUsers(): Promise<{ items: AdminUser[] }> {
  await delay();
  return { items: adminUsers };
}

export async function getAdminUserById(id: string): Promise<AdminUser | undefined> {
  await delay();
  return adminUsers.find((u) => u.id === id);
}
