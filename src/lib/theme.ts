import { useCallback, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';
const KEY = 'emg:theme';

const systemTheme = (): Theme =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(() => {
    try {
      const s = localStorage.getItem(KEY);
      if (s === 'light' || s === 'dark') return s;
    } catch { /* ignore */ }
    return systemTheme();
  });
  useEffect(() => { document.documentElement.dataset.theme = theme; }, [theme]);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const n: Theme = t === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem(KEY, n); } catch { /* ignore */ }
      return n;
    });
  }, []);
  return { theme, toggle };
}
