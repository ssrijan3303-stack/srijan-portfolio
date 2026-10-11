import React from 'react';
import { CheckCircle2, Copy } from 'lucide-react';

interface ToastProps {
  message: string | null;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-zinc-900/95 dark:bg-zinc-100/95 text-zinc-100 dark:text-zinc-900 border border-zinc-700/50 dark:border-zinc-300 rounded-2xl shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
};
