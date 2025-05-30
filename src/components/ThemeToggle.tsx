// src/components/ThemeToggle.tsx
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const [dark, setDark] = useState(false);

    // 1. All’avvio, rispetta preferenza salvata o tema di sistema
    useEffect(() => {
        const saved = localStorage.getItem('theme');
        const prefers = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldDark = saved ? saved === 'dark' : prefers;

        setDark(shouldDark);
        document.documentElement.classList.toggle('dark', shouldDark);
        setMounted(true);
    }, []);

    // 2. Toggle + persistenza
    const toggle = () => {
        const next = !dark;
        setDark(next);
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('theme', next ? 'dark' : 'light');
    };

    if (!mounted) return null; // evita flicker iniziale

    return (
        <button
            onClick={toggle}
            aria-label={dark ? 'Passa al tema chiaro' : 'Passa al tema scuro'}
            className="inline-flex items-center justify-center rounded-full p-2
                 bg-slate-200/70 dark:bg-slate-700/70
                 hover:bg-slate-300 dark:hover:bg-slate-600
                 transition-colors focus:outline-none focus:ring-2
                 focus:ring-slate-400 dark:focus:ring-slate-500"
        >
            {dark ? (
                <Moon className="h-5 w-5 text-slate-900 dark:text-slate-100" />
            ) : (
                <Sun className="h-5 w-5 text-slate-900 dark:text-slate-100" />
            )}
        </button>
    );
}
