import React, { useState } from 'react';
import {
  ExternalLink,
  Github,
  Linkedin,
  Phone,
  MessageSquare,
  Mail,
  Copy,
  GraduationCap,
  Sparkles,
  ArrowUpRight,
  Code2,
  Terminal,
  Server,
  Layers,
  Atom,
  Palette,
  GitBranch,
  Briefcase,
  CheckCircle2,
  Globe,
  MapPin,
  Calendar,
  BookOpen,
  Send
} from 'lucide-react';
import { PERSONAL_DETAILS, CORE_SKILLS, FEATURED_PROJECTS, SkillItem } from '../data/portfolioData';

interface BentoCardsProps {
  onCopy: (text: string, label: string) => void;
  onOpenMessageModal: () => void;
}

export const BentoCards: React.FC<BentoCardsProps> = ({ onCopy, onOpenMessageModal }) => {
  const [activeSkillCategory, setActiveSkillCategory] = useState<'all' | 'frontend' | 'backend' | 'languages' | 'tools'>('all');
  const [imageLoaded, setImageLoaded] = useState(false);

  const filteredSkills = activeSkillCategory === 'all'
    ? CORE_SKILLS
    : CORE_SKILLS.filter(s => s.category === activeSkillCategory);

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Atom': return <Atom className="w-5 h-5 text-cyan-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      case 'Layers': return <Layers className="w-5 h-5 text-purple-400" />;
      case 'FileCode2': return <Code2 className="w-5 h-5 text-amber-400" />;
      case 'Terminal': return <Terminal className="w-5 h-5 text-blue-400" />;
      case 'Code2': return <Code2 className="w-5 h-5 text-orange-400" />;
      case 'Palette': return <Palette className="w-5 h-5 text-teal-400" />;
      case 'GitBranch': return <GitBranch className="w-5 h-5 text-rose-400" />;
      default: return <Code2 className="w-5 h-5 text-indigo-400" />;
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 pb-16">
      
      {/* =========================================================================
          BENTO GRID CONTAINER
          Layout: 1 column mobile -> 3 columns tablet -> 4 columns desktop
          ========================================================================= */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

        {/* -----------------------------------------------------------------------
            CARD 1: HERO MAIN CARD (Span 2 cols on lg, 2 cols on md)
            Prominently features: "Hi, I'm Srijan Singh — Full Stack Developer & Freelancer"
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-2 lg:col-span-2 rounded-3xl p-6 sm:p-8 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group">
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/15 transition-all duration-700" />

          <div>
            {/* Status kicker without static pill */}
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-500 dark:text-emerald-400 mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
              <span>Available for Client Projects & Opportunities</span>
              <span className="text-zinc-500" aria-hidden="true">·</span>
              <span className="text-zinc-400 dark:text-zinc-400 text-zinc-500">GLA University</span>
            </div>

            {/* MANDATORY HERO INTRO TEXT */}
            <h2 className="text-2xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-zinc-100 dark:text-zinc-100 text-zinc-900 leading-tight mb-4">
              Hi, I'm <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-teal-400 bg-clip-text text-transparent">Srijan Singh</span> — Full Stack Developer & Freelancer
            </h2>

            <p className="text-sm sm:text-base text-zinc-300 dark:text-zinc-300 text-zinc-600 leading-relaxed max-w-xl mb-6">
              I architect robust web applications with modern tech stacks, high-performance backends, and bespoke user experiences. From concept to deployment, I build digital products that drive real results.
            </p>
          </div>

          {/* Quick CTA Actions */}
          <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/5 dark:border-white/5 border-zinc-200">
            <a
              href={PERSONAL_DETAILS.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-indigo-600/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Message on WhatsApp</span>
            </a>

            <a
              href={PERSONAL_DETAILS.contact.phoneTel}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-zinc-800/80 dark:bg-zinc-800/80 bg-zinc-100 hover:bg-zinc-700/80 dark:hover:bg-zinc-700/80 hover:bg-zinc-200 text-zinc-200 dark:text-zinc-200 text-zinc-800 font-medium text-xs sm:text-sm border border-white/5 dark:border-white/5 border-zinc-200 transition-all"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call +91 7269068483</span>
            </a>

            <button
              onClick={() => onCopy(PERSONAL_DETAILS.contact.email, "Email address")}
              className="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-2xl bg-zinc-800/80 dark:bg-zinc-800/80 bg-zinc-100 hover:bg-zinc-700/80 dark:hover:bg-zinc-700/80 hover:bg-zinc-200 text-zinc-300 dark:text-zinc-300 text-zinc-700 text-xs sm:text-sm border border-white/5 dark:border-white/5 border-zinc-200 transition-all cursor-pointer"
              title="Copy Email to Clipboard"
            >
              <Copy className="w-3.5 h-3.5 text-zinc-400" />
              <span>Copy Email</span>
            </button>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 2: PROFILE IMAGE CARD
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-1 lg:col-span-1 rounded-3xl bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl overflow-hidden relative group min-h-[340px] flex flex-col justify-end">
          {/* High-Resolution Profile Image Container */}
          <div className="absolute inset-0 w-full h-full overflow-hidden bg-zinc-950">
            <img
              src="new-profile.jpg"
              alt="Srijan Singh"
              className="w-full h-full object-cover object-center rounded-2xl group-hover:scale-105 transition duration-500"
              style={{ imageRendering: '-webkit-optimize-contrast' as any }}
            />
            {/* Subtle Gradient Overlay for Text Legibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/30 to-transparent pointer-events-none" />
          </div>

          {/* Foreground Profile Tag */}
          <div className="relative z-10 p-5 sm:p-6 backdrop-blur-[2px]">
            <div className="flex items-center gap-2 text-xs font-medium text-indigo-300 mb-1">
              <MapPin className="w-3.5 h-3.5 text-indigo-400" />
              <span>Mathura & Remote Worldwide</span>
            </div>
            <h3 className="text-lg font-bold text-white flex items-center gap-1.5">
              <span>Srijan Singh</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
            </h3>
            <p className="text-xs text-zinc-300">
              Full Stack & Freelance Architect
            </p>

            <div className="mt-3 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-zinc-300">
              <span className="text-zinc-400">Status</span>
              <span className="font-medium text-emerald-400 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block animate-pulse" />
                Available to Hire
              </span>
            </div>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 3: EDUCATION & BACKGROUND (GLA University BCA 2nd Year)
            Dedicated card prominently displaying background
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-1 lg:col-span-1 rounded-3xl p-6 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-indigo-400 dark:text-indigo-400 text-indigo-600 bg-indigo-500/10 px-2.5 py-1 rounded-xl">
                2025 - 2028
              </span>
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Education & Background
            </div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-2 leading-snug">
              Bachelor of Computer Applications (BCA)
            </h3>

            <div className="text-xs font-semibold text-indigo-400 dark:text-indigo-400 text-indigo-600 mb-3">
              GLA University, Mathura — 2nd Year
            </div>

            <p className="text-xs text-zinc-300 dark:text-zinc-300 text-zinc-600 leading-relaxed mb-4">
              Pursuing 2nd Year BCA (Session 2025 - 2028) with focus on Data Structures & Algorithms, Object-Oriented System Design, Database Management, and Modern Web Engineering.
            </p>
          </div>

          <div className="pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200 text-xs text-zinc-400 dark:text-zinc-400 text-zinc-500 flex items-center justify-between">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-3.5 h-3.5 text-zinc-400" />
              GLA University, Mathura
            </span>
            <span className="text-zinc-300 dark:text-zinc-300 text-zinc-700 font-medium">BCA (2025 - 2028)</span>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 4: AGENCY & FREELANCE HUB (SrijanTech)
            https://www.srijantech.in
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-2 lg:col-span-2 rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-zinc-900/90 to-zinc-900/60 dark:from-zinc-900/90 dark:to-zinc-900/60 from-white to-zinc-50 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-teal-500/20 transition-all duration-500" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 flex items-center gap-2">
                    SrijanTech
                    <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-md bg-teal-500/15 text-teal-400 border border-teal-500/20">
                      Agency Hub
                    </span>
                  </h3>
                  <p className="text-xs text-zinc-400">Founder & Full Stack Lead</p>
                </div>
              </div>

              <a
                href={PERSONAL_DETAILS.socials.agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-teal-400 hover:text-teal-300 transition-colors p-2 rounded-xl bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/20"
              >
                <span>Visit Agency</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <p className="text-sm text-zinc-300 dark:text-zinc-300 text-zinc-600 leading-relaxed mb-4">
              Through <strong className="text-zinc-100 dark:text-zinc-100 text-zinc-900 font-semibold">SrijanTech</strong>, I build conversion-oriented digital products, scalable web apps, and customized client platforms. Helping businesses establish a formidable online presence.
            </p>

            {/* Metric counters / highlights */}
            <div className="grid grid-cols-3 gap-3 my-2 text-center">
              <div className="p-3 rounded-2xl bg-zinc-800/40 dark:bg-zinc-800/40 bg-zinc-100 border border-white/5 dark:border-white/5 border-zinc-200">
                <div className="text-base sm:text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900">100%</div>
                <div className="text-[11px] text-zinc-400">Custom Built</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-800/40 dark:bg-zinc-800/40 bg-zinc-100 border border-white/5 dark:border-white/5 border-zinc-200">
                <div className="text-base sm:text-lg font-bold text-teal-400">99+</div>
                <div className="text-[11px] text-zinc-400">Speed Score</div>
              </div>
              <div className="p-3 rounded-2xl bg-zinc-800/40 dark:bg-zinc-800/40 bg-zinc-100 border border-white/5 dark:border-white/5 border-zinc-200">
                <div className="text-base sm:text-lg font-bold text-indigo-400">24/7</div>
                <div className="text-[11px] text-zinc-400">Support</div>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200 flex items-center justify-between text-xs text-zinc-400">
            <span className="font-mono text-teal-400">https://www.srijantech.in</span>
            <a
              href={PERSONAL_DETAILS.socials.agency.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-white flex items-center gap-1 font-medium"
            >
              <span>Explore Services</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 5: LEETCODE CODING PROFILE CARD
            https://leetcode.com/u/Srijan3303/
            ----------------------------------------------------------------------- */}
        <a
          href={PERSONAL_DETAILS.socials.leetcode.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 lg:col-span-1 rounded-3xl p-6 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-amber-500/40 transition-all duration-300 cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-500 font-bold">
                <span className="text-base">LC</span>
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-amber-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Coding & DSA Profile
            </div>
            <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-1">
              LeetCode
            </h3>
            <p className="text-xs font-mono text-amber-400 mb-3">
              @{PERSONAL_DETAILS.socials.leetcode.handle}
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex justify-between items-center text-xs">
                <span className="text-zinc-400">Problems Solved</span>
                <span className="font-bold text-zinc-200 dark:text-zinc-200 text-zinc-800">200+</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-zinc-800 overflow-hidden">
                <div className="w-4/5 h-full bg-gradient-to-r from-amber-500 to-orange-500 rounded-full" />
              </div>
              <div className="flex justify-between text-[11px] text-zinc-400">
                <span>Arrays & Hash</span>
                <span>DP & Graphs</span>
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200 text-xs text-amber-400 font-medium flex items-center justify-between">
            <span>View LeetCode Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* -----------------------------------------------------------------------
            CARD 6: GITHUB & OPEN SOURCE
            https://github.com/ssrijan3303-stack
            ----------------------------------------------------------------------- */}
        <a
          href={PERSONAL_DETAILS.socials.github.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 lg:col-span-1 rounded-3xl p-6 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-zinc-500/50 transition-all duration-300 cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-zinc-800/80 border border-white/10 flex items-center justify-center text-zinc-100">
                <Github className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Source Code & Repos
            </div>
            <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-1">
              GitHub Profile
            </h3>
            <p className="text-xs font-mono text-zinc-400 mb-3">
              @{PERSONAL_DETAILS.socials.github.handle}
            </p>

            <div className="p-3 rounded-2xl bg-zinc-800/50 dark:bg-zinc-800/50 bg-zinc-100 border border-white/5 dark:border-white/5 border-zinc-200 mb-3">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="text-zinc-400">Repositories</span>
                <span className="font-semibold text-zinc-100 dark:text-zinc-100 text-zinc-900">25+ Projects</span>
              </div>
              <div className="flex items-center gap-1">
                {[4, 8, 3, 7, 5, 9, 6, 8, 4, 10, 7, 6].map((val, idx) => (
                  <div
                    key={idx}
                    className="flex-1 bg-emerald-500/60 rounded-sm"
                    style={{ height: `${val * 2}px` }}
                    title="Commit activity"
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200 text-xs text-zinc-300 dark:text-zinc-300 text-zinc-700 font-medium flex items-center justify-between">
            <span>Explore Repositories</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* -----------------------------------------------------------------------
            CARD 7: LINKEDIN PROFESSIONAL NETWORK
            https://www.linkedin.com/in/srijan-singh-402502439
            ----------------------------------------------------------------------- */}
        <a
          href={PERSONAL_DETAILS.socials.linkedin.url}
          target="_blank"
          rel="noopener noreferrer"
          className="md:col-span-1 lg:col-span-1 rounded-3xl p-6 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-blue-500/40 transition-all duration-300 cursor-pointer"
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="w-10 h-10 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Linkedin className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
              Professional Network
            </div>
            <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-1">
              LinkedIn
            </h3>
            <p className="text-xs text-zinc-400 mb-4">
              Connect for tech collaborations, hiring, and professional discussions.
            </p>

            <div className="flex items-center gap-2 text-xs text-zinc-300 dark:text-zinc-300 text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-blue-400 inline-block" />
              <span>Full Stack & BCA @ GLA</span>
            </div>
          </div>

          <div className="pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200 text-xs text-blue-400 font-medium flex items-center justify-between">
            <span>Connect on LinkedIn</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </div>
        </a>

        {/* -----------------------------------------------------------------------
            CARD 8: TECH STACK & SKILLS MATRIX (Span 2 cols on lg)
            Required: React.js, Node.js, Express.js, JavaScript, Python, HTML5, Tailwind CSS, Git & GitHub
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-3 lg:col-span-3 rounded-3xl p-6 sm:p-7 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-5">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-1">
                  Core Competencies & Frameworks
                </div>
                <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900">
                  Tech Stack & Engineering Skills
                </h3>
              </div>

              {/* Functional Segmented Filter Tabs (Zero-pill compliant) */}
              <div className="flex items-center gap-1 p-1 bg-zinc-800/70 dark:bg-zinc-800/70 bg-zinc-100 rounded-2xl border border-white/5 dark:border-white/5 border-zinc-200 overflow-x-auto">
                {(['all', 'frontend', 'backend', 'languages', 'tools'] as const).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveSkillCategory(cat)}
                    className={`px-3 py-1.5 text-xs font-medium rounded-xl transition-all cursor-pointer capitalize whitespace-nowrap ${
                      activeSkillCategory === cat
                        ? 'bg-indigo-600 text-white shadow-sm'
                        : 'text-zinc-400 hover:text-zinc-200 dark:hover:text-zinc-200 hover:text-zinc-800'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Grid of Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {filteredSkills.map((skill) => (
                <div
                  key={skill.name}
                  className="p-3.5 rounded-2xl bg-zinc-800/40 dark:bg-zinc-800/40 bg-zinc-50 border border-white/5 dark:border-white/5 border-zinc-200 hover:border-indigo-500/30 transition-all group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-8 h-8 rounded-xl bg-zinc-800 dark:bg-zinc-800 bg-white shadow-sm flex items-center justify-center">
                      {getSkillIcon(skill.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">{skill.level}</span>
                  </div>
                  <div className="font-semibold text-sm text-zinc-100 dark:text-zinc-100 text-zinc-900 group-hover:text-indigo-400 transition-colors">
                    {skill.name}
                  </div>
                  <p className="text-[11px] text-zinc-400 line-clamp-2 mt-1 leading-snug">
                    {skill.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 mt-4 border-t border-white/5 dark:border-white/5 border-zinc-200 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
            <span>Production-tested in freelance client delivery & algorithmic systems.</span>
            <span className="text-indigo-400 font-mono text-[11px]">8+ Core Technologies</span>
          </div>
        </div>

        {/* -----------------------------------------------------------------------
            CARD 9: CONTACT & REACH OUT (Direct links for Call, WhatsApp, Email)
            Mobile & WhatsApp: +91 7269068483
            ----------------------------------------------------------------------- */}
        <div className="md:col-span-1 lg:col-span-1 rounded-3xl p-6 bg-gradient-to-br from-indigo-900/40 via-zinc-900/80 to-zinc-900/80 dark:from-indigo-900/40 dark:via-zinc-900/80 dark:to-zinc-900/80 from-indigo-50 via-white to-zinc-50 border border-indigo-500/20 shadow-xl backdrop-blur-xl flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-4">
              <Phone className="w-5 h-5" />
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-1">
              Direct Contact
            </div>
            <h3 className="text-lg font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-2">
              Get in Touch
            </h3>
            <p className="text-xs text-zinc-300 dark:text-zinc-300 text-zinc-600 mb-4">
              Have an idea, project, or open role? Reach out directly via WhatsApp or call.
            </p>

            <div className="space-y-2.5">
              {/* WhatsApp direct */}
              <a
                href={PERSONAL_DETAILS.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 text-emerald-400 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-semibold">
                  <MessageSquare className="w-4 h-4 shrink-0" />
                  <span>WhatsApp Chat</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Direct Call */}
              <a
                href={PERSONAL_DETAILS.contact.phoneTel}
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-800/60 dark:bg-zinc-800/60 bg-zinc-100 hover:bg-zinc-700/60 text-zinc-200 dark:text-zinc-200 text-zinc-800 border border-white/5 dark:border-white/5 border-zinc-200 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium">
                  <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>+91 7269068483</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email direct */}
              <a
                href={PERSONAL_DETAILS.contact.emailMailto}
                className="flex items-center justify-between p-3 rounded-2xl bg-zinc-800/60 dark:bg-zinc-800/60 bg-zinc-100 hover:bg-zinc-700/60 text-zinc-200 dark:text-zinc-200 text-zinc-800 border border-white/5 dark:border-white/5 border-zinc-200 transition-all group"
              >
                <div className="flex items-center gap-2.5 text-xs font-medium truncate">
                  <Mail className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="truncate">{PERSONAL_DETAILS.contact.email}</span>
                </div>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          <div className="pt-3 mt-4 border-t border-white/5 dark:border-white/5 border-zinc-200 flex items-center justify-between">
            <button
              onClick={() => onCopy(PERSONAL_DETAILS.contact.phone, "Phone number")}
              className="text-xs text-zinc-400 hover:text-zinc-200 flex items-center gap-1 cursor-pointer"
            >
              <Copy className="w-3 h-3" />
              <span>Copy Number</span>
            </button>
            <button
              onClick={onOpenMessageModal}
              className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
            >
              <span>Quick Form</span>
              <Send className="w-3 h-3" />
            </button>
          </div>
        </div>

      </div>

      {/* =========================================================================
          FEATURED PROJECTS ROW
          ========================================================================= */}
      <div className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900">
              Featured Client & Engineering Work
            </h3>
            <p className="text-xs text-zinc-400">
              Selected projects built with full stack architecture and clean UI design.
            </p>
          </div>
          <a
            href={PERSONAL_DETAILS.socials.github.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-medium"
          >
            <span>View All on GitHub</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {FEATURED_PROJECTS.map((project) => (
            <div
              key={project.id}
              className="rounded-3xl p-6 bg-zinc-900/70 dark:bg-zinc-900/70 bg-white/80 border border-white/10 dark:border-white/10 border-zinc-200 shadow-xl backdrop-blur-xl flex flex-col justify-between group hover:border-indigo-500/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-0.5 rounded-lg border border-indigo-500/20">
                    {project.metrics}
                  </span>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white p-1"
                      title="Open live website"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>

                <h4 className="text-base font-bold text-zinc-100 dark:text-zinc-100 text-zinc-900 mb-1 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h4>
                <div className="text-xs text-zinc-400 mb-3">
                  {project.tagline}
                </div>
                <p className="text-xs text-zinc-300 dark:text-zinc-300 text-zinc-600 leading-relaxed mb-4">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Clean unboxed tags with typographic separators */}
                <div className="flex flex-wrap items-center gap-1.5 text-[11px] text-zinc-400 pt-3 border-t border-white/5 dark:border-white/5 border-zinc-200">
                  {project.tags.map((t, idx) => (
                    <React.Fragment key={t}>
                      <span>{t}</span>
                      {idx < project.tags.length - 1 && <span className="text-zinc-600" aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};
