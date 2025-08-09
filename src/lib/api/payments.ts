import { delay } from "./utils";
import type { Payment } from "./types";

const payments: Payment[] = [
  { id: "p-1", amount: 299, currency: "USD", status: "succeeded", createdAt: "2024-01-22", description: "Conference registration" },
  { id: "p-2", amount: 49, currency: "USD", status: "pending", createdAt: "2024-01-28", description: "Article processing fee" },
];

export async function listPayments(): Promise<{ items: Payment[] }> {
  await delay();
  return { items: payments };
}

export async function getPayment(id: string): Promise<Payment | undefined> {
  await delay();
  return payments.find((p) => p.id === id);
}

export async function checkout(amount: number): Promise<{ paymentId: string }>{
  await delay();
  if (amount <= 0) return Promise.reject({ message: "Amount must be greater than zero" });
  return { paymentId: "p-new" };
}
