// Modular API aggregator (mocked). Swap implementations to Supabase when connected.
// IMPORTANT: This is frontend-only. To enable real backend, connect Supabase (green button) and replace these mocks.

// Re-export types and endpoints from modular files
export * from "./api/types";
export * from "./api/utils";
export * from "./api/public";
export * from "./api/user";
export * from "./api/editor";
export * from "./api/admin";
export * from "./api/auth";
export * from "./api/payments";
export * from "./api/content";
