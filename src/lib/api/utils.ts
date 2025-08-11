// Shared API helpers (mocked)
export const delay = (ms = 500) => new Promise((res) => setTimeout(res, ms));

export function ok<T>(data: T): Promise<T> {
  return Promise.resolve(data);
}

export function err<T = never>(message: string): Promise<T> {
  return Promise.reject({ message });
}
