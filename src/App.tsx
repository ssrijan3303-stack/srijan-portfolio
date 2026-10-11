/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BentoCards } from './components/BentoCards';
import { Toast } from './components/Toast';
import { MessageModal } from './components/MessageModal';

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMessageModalOpen, setIsMessageModalOpen] = useState(false);

  // Sync dark class on document element
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      document.body.className = 'bg-[#09090b] text-zinc-100 antialiased selection:bg-indigo-500/30 selection:text-indigo-200 transition-colors duration-300';
    } else {
      root.classList.remove('dark');
      document.body.className = 'bg-zinc-100 text-zinc-900 antialiased selection:bg-indigo-500/20 selection:text-indigo-800 transition-colors duration-300';
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'dark' ? 'light' : 'dark';
      triggerToast(next === 'dark' ? 'Switched to Dark Mode (#09090b)' : 'Switched to Light Mode');
      return next;
    });
  };

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3200);
  };

  const handleCopy = (text: string, label: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        triggerToast(`${label} copied to clipboard!`);
      }).catch(() => {
        triggerToast(`Copied: ${text}`);
      });
    } else {
      triggerToast(`Copied: ${text}`);
    }
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden transition-colors duration-300">
      
      {/* Ambient background light gradients */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 dark:bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-600/10 dark:bg-teal-600/15 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/5 dark:bg-violet-600/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      {/* Sticky Header */}
      <Header
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Bento Portfolio Grid */}
      <main>
        <BentoCards
          onCopy={handleCopy}
          onOpenMessageModal={() => setIsMessageModalOpen(true)}
        />
      </main>

      {/* Clean Footer */}
      <footer className="w-full max-w-7xl mx-auto px-4 sm:px-6 py-8 border-t border-white/5 dark:border-white/5 border-zinc-200 text-center text-xs text-zinc-500 dark:text-zinc-500 text-zinc-600">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} Srijan Singh · Full Stack Developer & Freelancer · GLA University, Mathura</p>
          <div className="flex items-center gap-4 text-xs font-mono">
            <a
              href="https://www.srijantech.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 hover:underline"
            >
              srijantech.in
            </a>
            <span className="text-zinc-700 dark:text-zinc-700">·</span>
            <a
              href="https://github.com/ssrijan3303-stack"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-zinc-200 hover:underline"
            >
              github.com/ssrijan3303-stack
            </a>
          </div>
        </div>
      </footer>

      {/* Toast Notification */}
      <Toast message={toastMessage} onClose={() => setToastMessage(null)} />

      {/* Message Inquiry Modal */}
      <MessageModal
        isOpen={isMessageModalOpen}
        onClose={() => setIsMessageModalOpen(false)}
        onSuccessToast={triggerToast}
      />

    </div>
  );
}

