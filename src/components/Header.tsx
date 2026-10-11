import React, { useState, useEffect } from 'react';
import { Sun, Moon, Clock, Send } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface HeaderProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  theme,
  onToggleTheme,
}) => {
  const [istTime, setIstTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const options: Intl.DateTimeFormatOptions = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        };
        const formatter = new Intl.DateTimeFormat('en-IN', options);
        setIstTime(formatter.format(now));
      } catch {
        setIstTime(new Date().toLocaleTimeString());
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="sticky top-4 z-40 w-full max-w-7xl mx-auto mb-6 px-4 sm:px-6">
      <div className="flex items-center justify-between px-5 py-3.5 rounded-3xl bg-zinc-900/80 dark:bg-zinc-900/80 light:bg-white/90 backdrop-blur-xl border border-white/10 dark:border-white/10 border-zinc-200/80 shadow-lg shadow-black/5 dark:shadow-black/20 transition-all duration-300">
        
        {/* Brand & Moniker */}
        <div className="flex items-center gap-3">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-lg shadow-md shadow-indigo-500/20">
            SS
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-zinc-900 dark:border-zinc-900 rounded-full animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-sm sm:text-base font-bold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900">
                {PERSONAL_DETAILS.name}
              </h1>
              <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 dark:text-emerald-400 text-emerald-600 border border-emerald-500/20 font-medium">
                Available for Work
              </span>
            </div>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 text-zinc-500 hidden sm:block">
              {PERSONAL_DETAILS.title}
            </p>
          </div>
        </div>

        {/* Center / Time in India */}
        <div className="hidden md:flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-zinc-800/60 dark:bg-zinc-800/60 bg-zinc-100/90 border border-white/5 dark:border-white/5 border-zinc-200 text-xs font-mono text-zinc-300 dark:text-zinc-300 text-zinc-700">
          <Clock className="w-3.5 h-3.5 text-indigo-400" />
          <span>India (IST):</span>
          <span className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900">{istTime || '12:00:00 PM'}</span>
        </div>

        {/* Right Action buttons */}
        <div className="flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={onToggleTheme}
            aria-label="Toggle Dark / Light Theme"
            className="flex items-center justify-center w-10 h-10 rounded-2xl bg-zinc-800/80 dark:bg-zinc-800/80 bg-zinc-100 text-zinc-300 dark:text-zinc-300 text-zinc-700 hover:text-white dark:hover:text-white hover:bg-zinc-700/80 border border-white/5 dark:border-white/5 border-zinc-200 transition-all cursor-pointer"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 transition-transform rotate-0 hover:rotate-90 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 transition-transform rotate-0 hover:-rotate-12 duration-300" />
            )}
          </button>

          {/* Quick WhatsApp / Let's Talk */}
          <a
            href={PERSONAL_DETAILS.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-4 py-2 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-emerald-500/20 transition-all duration-300 transform active:scale-95"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Let's Talk</span>
          </a>
        </div>
      </div>
    </header>
  );
};

