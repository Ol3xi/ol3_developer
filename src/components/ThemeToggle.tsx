// src/components/ThemeToggle.tsx
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../theme/ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
      className="inline-flex items-center justify-center rounded-full p-2
                 bg-slate-200/70 dark:bg-slate-700/70
                 hover:bg-slate-300 dark:hover:bg-slate-600
                 transition-colors focus:outline-none focus:ring-2
                 focus:ring-slate-400 dark:focus:ring-slate-500"
    >
      {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
}
