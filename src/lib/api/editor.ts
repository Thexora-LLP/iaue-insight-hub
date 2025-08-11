import { delay } from "./utils";
import { mockManuscripts } from "./user";
import type { Manuscript } from "./types";

export async function getReviewQueue(): Promise<{ items: Manuscript[] }> {
  await delay();
  return { items: mockManuscripts };
}
