import React, { useState } from 'react';
import { X, Send, MessageSquare, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_DETAILS } from '../data/portfolioData';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccessToast: (msg: string) => void;
}

export const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  onSuccessToast,
}) => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState<'whatsapp' | 'email'>('whatsapp');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    if (method === 'whatsapp') {
      const formattedText = encodeURIComponent(
        `Hi Srijan!\nMy Name: ${name || 'A prospective client'}\nContact: ${contactInfo || 'Not specified'}\n\nProject details:\n${message}`
      );
      const url = `https://wa.me/917269068483?text=${formattedText}`;
      window.open(url, '_blank');
      onSuccessToast("Redirecting to WhatsApp with your message!");
    } else {
      const subject = encodeURIComponent(`Project Inquiry from ${name || 'Portfolio Visitor'}`);
      const body = encodeURIComponent(
        `Hi Srijan,\n\nName: ${name}\nContact: ${contactInfo}\n\nMessage:\n${message}`
      );
      window.open(`mailto:${PERSONAL_DETAILS.contact.email}?subject=${subject}&body=${body}`, '_blank');
      onSuccessToast("Opening your email client with your message!");
    }

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-3xl bg-zinc-900 border border-white/10 p-6 sm:p-8 shadow-2xl text-zinc-100">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2.5 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-2">
          <Sparkles className="w-4 h-4" />
          <span>Quick Inquiry</span>
        </div>
        
        <h3 className="text-xl font-bold mb-1 text-white">
          Send a Message to Srijan
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Whether you want to build a full-stack platform, hire for freelance work, or discuss an internship.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Your Name
            </label>
            <input
              type="text"
              placeholder="e.g. John Doe / Tech Lead"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Your Email or Phone
            </label>
            <input
              type="text"
              placeholder="e.g. client@company.com or +91 ..."
              value={contactInfo}
              onChange={(e) => setContactInfo(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-zinc-300 mb-1.5">
              Project Description / Message *
            </label>
            <textarea
              required
              rows={3}
              placeholder="Tell me about what you're building, budget, timeline, or requirements..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-zinc-800/80 border border-white/10 text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 resize-none"
            />
          </div>

          <div className="pt-2">
            <label className="block text-xs font-medium text-zinc-300 mb-2">
              Send Via:
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setMethod('whatsapp')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  method === 'whatsapp'
                    ? 'bg-emerald-600/20 border-emerald-500 text-emerald-400'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+91 7269068483)</span>
              </button>

              <button
                type="button"
                onClick={() => setMethod('email')}
                className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                  method === 'email'
                    ? 'bg-indigo-600/20 border-indigo-500 text-indigo-400'
                    : 'bg-zinc-800/60 border-zinc-700 text-zinc-400 hover:text-zinc-200'
                }`}
              >
                <Mail className="w-4 h-4" />
                <span>Email (ssrijan3303@gmail.com)</span>
              </button>
            </div>
          </div>

          <div className="pt-3">
            <button
              type="submit"
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send Message</span>
            </button>
          </div>
        </form>

      </div>
    </div>
  );
};
