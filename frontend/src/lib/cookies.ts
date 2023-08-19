import nookies from 'nookies';

export const getCookie = (key: string): string | undefined => {
  const cookies = nookies.get();
  return cookies[key];
};

export const setCookie = (
  key: string,
  value: string,
  expirationSeconds: number,
): void => {
  nookies.set(null, key, value, {
    maxAge: expirationSeconds,
  });
};

export const destroyCookie = (key: string): void => {
  nookies.destroy(null, key);
};
