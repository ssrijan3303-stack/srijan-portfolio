export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'languages' | 'tools';
  icon: string;
  level: string;
  description: string;
  color: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  metrics?: string;
}

export const PERSONAL_DETAILS = {
  name: "Srijan Singh",
  title: "Full Stack Developer & Freelancer",
  heroHeading: "Hi, I'm Srijan Singh — Full Stack Developer & Freelancer",
  bio: "Passionate Full Stack Developer specializing in modern web ecosystems, scalable backends, and human-centered user interfaces. Building digital solutions for startups and businesses.",
  avatarUrl: "https://i.postimg.cc/hh2SVTxP/image.jpg",
  avatarFallback: "https://i.postimg.cc/hh2SVTxP/image.jpg",
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    year: "2nd Year",
    institution: "GLA University, Mathura",
    session: "2025 - 2028",
    status: "Currently Pursuing (2025 - 2028)",
    focus: "Data Structures & Algorithms, Web Technologies, Database Management, and Full-Stack Engineering.",
    location: "Mathura, Uttar Pradesh, India"
  },
  contact: {
    phone: "+91 7269068483",
    phoneTel: "tel:+917269068483",
    whatsappUrl: "https://wa.me/917269068483?text=Hi%20Srijan%2C%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!",
    email: "ssrijan3303@gmail.com",
    emailMailto: "mailto:ssrijan3303@gmail.com?subject=Project%20Inquiry%20via%20Portfolio",
    location: "India (Available Worldwide Remote)"
  },
  socials: {
    leetcode: {
      url: "https://leetcode.com/u/Srijan3303/",
      handle: "Srijan3303",
      label: "LeetCode",
      problemsSolved: "200+",
      streak: "Active Solver",
      rating: "Top Percentile"
    },
    github: {
      url: "https://github.com/ssrijan3303-stack",
      handle: "ssrijan3303-stack",
      label: "GitHub",
      reposCount: "25+",
      stars: "Open Source"
    },
    linkedin: {
      url: "https://www.linkedin.com/in/srijan-singh-402502439",
      handle: "Srijan Singh",
      label: "LinkedIn",
      connections: "500+"
    },
    agency: {
      url: "https://www.srijantech.in",
      name: "SrijanTech",
      role: "Founder & Lead Developer",
      tagline: "Custom Web Solutions, High-Converting Landing Pages & Scalable Web Apps",
      badge: "Agency & Freelance Hub"
    }
  }
};

export const CORE_SKILLS: SkillItem[] = [
  {
    name: "React.js",
    category: "frontend",
    icon: "Atom",
    level: "Advanced",
    description: "Component architecture, Hooks, Context, State management, Next.js",
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-400"
  },
  {
    name: "Node.js",
    category: "backend",
    icon: "Server",
    level: "Proficient",
    description: "Event-driven asynchronous runtime, RESTful APIs, Microservices",
    color: "from-emerald-500/20 to-green-500/10 text-emerald-400"
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "Layers",
    level: "Proficient",
    description: "Robust HTTP middleware, route handling, authentication, JWT security",
    color: "from-gray-500/20 to-neutral-500/10 text-neutral-300"
  },
  {
    name: "JavaScript",
    category: "languages",
    icon: "FileCode2",
    level: "Expert",
    description: "ES6+, Async/Await, closures, DOM manipulation, functional programming",
    color: "from-yellow-500/20 to-amber-500/10 text-amber-400"
  },
  {
    name: "Python",
    category: "languages",
    icon: "Terminal",
    level: "Proficient",
    description: "DSA problem solving, automation scripts, backend scripting",
    color: "from-blue-500/20 to-indigo-500/10 text-blue-400"
  },
  {
    name: "HTML5",
    category: "frontend",
    icon: "Code2",
    level: "Expert",
    description: "Semantic markup, modern accessibility standards (a11y), SEO architecture",
    color: "from-orange-500/20 to-red-500/10 text-orange-400"
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "Palette",
    level: "Expert",
    description: "Utility-first design systems, responsive layouts, Bento Grid UI, dark mode",
    color: "from-teal-500/20 to-cyan-500/10 text-teal-400"
  },
  {
    name: "Git & GitHub",
    category: "tools",
    icon: "GitBranch",
    level: "Proficient",
    description: "Version control, feature branching, merge workflows, GitHub Actions CI/CD",
    color: "from-rose-500/20 to-pink-500/10 text-rose-400"
  }
];

export const FEATURED_PROJECTS: ProjectItem[] = [
  {
    id: "srijantech",
    title: "SrijanTech Web Solutions",
    tagline: "Freelance Agency & Development Studio",
    description: "Official agency portal delivering enterprise-grade web development, responsive branding, and conversion-optimized websites for startups and small businesses.",
    tags: ["React.js", "Tailwind CSS", "Node.js", "SEO Optimization"],
    liveUrl: "https://www.srijantech.in",
    featured: true,
    metrics: "Production Live"
  },
  {
    id: "fullstack-dashboard",
    title: "OmniMetrics Analytics Platform",
    tagline: "Full Stack Dashboard & API System",
    description: "Comprehensive data dashboard featuring real-time state tracking, RESTful backend with Express.js and Node.js, and clean Bento UI analytics visualizer.",
    tags: ["React", "Express.js", "Node.js", "Tailwind CSS"],
    githubUrl: "https://github.com/ssrijan3303-stack",
    featured: true,
    metrics: "Scalable API"
  },
  {
    id: "dsa-algorithmic-vault",
    title: "Algorithmic Code Vault",
    tagline: "Problem Solving & DSA Architecture",
    description: "Curated collection of 200+ optimized algorithmic solutions, dynamic programming patterns, and graph algorithms verified on LeetCode.",
    tags: ["Python", "JavaScript", "Algorithms", "Data Structures"],
    liveUrl: "https://leetcode.com/u/Srijan3303/",
    githubUrl: "https://github.com/ssrijan3303-stack",
    featured: true,
    metrics: "200+ Solved"
  }
];
