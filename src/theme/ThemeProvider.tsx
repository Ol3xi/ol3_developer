import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';

type Theme = 'light' | 'dark';
type Ctx = { theme: Theme; setTheme: (t: Theme) => void; toggle: () => void };

const ThemeContext = createContext<Ctx | null>(null);

function applyTheme(name: Theme) {
  const root = document.documentElement;
  root.setAttribute('data-theme', name);          // <-- DaisyUI pilota tutto
  root.classList.toggle('dark', name === 'dark'); // <-- solo se usi `dark:`
  localStorage.setItem('theme', name);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') {
      applyTheme(saved);
      setThemeState(saved);
    } else {
      // se non c'è preferenza salvata, DaisyUI imposta già --prefersdark
      const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
      setThemeState(current);
    }
    setMounted(true);
  }, []);

  const setTheme = (t: Theme) => { applyTheme(t); setThemeState(t); };
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  if (!mounted) return null; // evita mismatch al primo paint
  return <ThemeContext.Provider value={{ theme, setTheme, toggle }}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
}
