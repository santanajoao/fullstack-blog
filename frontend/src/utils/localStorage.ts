'use client';

export const get = <T>(key: string): T | null => {
  const json = localStorage.getItem(key);
  if (!json) return null;

  const data = JSON.parse(json) as T;
  return data;
};

export const set = <T>(key:string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
