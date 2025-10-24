import { delay } from "./utils";
import type { User } from "./types";

const mockUser: User = {
  id: "u-1",
  name: "Jane Doe",
  email: "jane.doe@example.com",
  role: "user",
};

export async function login(
  email: string,
  password: string
): Promise<{ user: User; token: string }> {
  await delay();
  if (!email || !password) {
    return Promise.reject({ message: "Email and password are required" });
  }
  // Simple mock validation
  if (email !== mockUser.email) {
    return Promise.reject({ message: "Invalid credentials" });
  }
  return { user: mockUser, token: "mock-token-123" };
}

// export async function register(
//   name: string,
//   email: string,
//   password: string
// ): Promise<{ userId: string }> {
//   await delay();
//   if (!name || !email || !password) {
//     return Promise.reject({ message: "All fields are required" });
//   }
//   return { userId: "u-new" };
// }
// src/lib/api/auth.ts
export async function register(
  name: string,
  email: string,
  password: string
): Promise<{ userId: string }> {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fullName: name, email, password }),
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({}));
    throw new Error(error.message || "Failed to register");
  }

  return res.json();
}


export async function requestPasswordReset(
  email: string
): Promise<{ ok: true }> {
  await delay();
  if (!email) return Promise.reject({ message: "Email is required" });
  return { ok: true };
}

export async function resetPassword(
  token: string,
  newPassword: string
): Promise<{ ok: true }> {
  await delay();
  if (!token || !newPassword)
    return Promise.reject({ message: "Invalid request" });
  return { ok: true };
}

export async function verifyEmail(token: string): Promise<{ ok: true }> {
  await delay();
  if (!token) return Promise.reject({ message: "Invalid token" });
  return { ok: true };
}
