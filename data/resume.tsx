import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";
import PythonOriginal from "devicons-react/lib/icons/PythonOriginal";
import TypescriptOriginal from "devicons-react/lib/icons/TypescriptOriginal";
import JavascriptOriginal from "devicons-react/lib/icons/JavascriptOriginal";
import GoOriginal from "devicons-react/lib/icons/GoOriginal";
import SwiftOriginal from "devicons-react/lib/icons/SwiftOriginal";
import Html5Original from "devicons-react/lib/icons/Html5Original";
import Css3Original from "devicons-react/lib/icons/Css3Original";

export const DATA = {
  name: "Kian Malakooti",
  initials: "KM",
  url: "https://kianjm.com",
  location: "Located in San Francisco, CA.",
  locationLink: "https://www.google.com/maps/place/san+francisco",
  resumeLink:
    "https://docs.google.com/document/d/17Kws6emmVtARqS_ByeapDyCkyzIdorpfNXZDr8C1hm4/export?format=pdf",
  description: "Passionate about code. Constantly curious.",
  summary:
    "Graduated from Santa Clara University in the summer of 2023 with a degree in Computer Science & Engineering. Through working in startups or big tech, I've gained lots of production level knowledge and am able to pick up any task and execute within a timely manner. Currently a Metamate and constantly looking for ways to expand my knowledge while working hard in a fast-paced environment.",
  avatarUrl: "/me2.PNG",
  codingLanguages: [
    {
      name: "Python",
      learnedIn: 2020,
      proficiency: "Advanced",
      icon: PythonOriginal,
    },
    {
      name: "Typescript",
      learnedIn: 2022,
      proficiency: "Proficient",
      icon: TypescriptOriginal,
    },
    {
      name: "Javascript",
      learnedIn: 2020,
      proficiency: "Proficient",
      icon: JavascriptOriginal,
    },
    {
      name: "Golang",
      learnedIn: 2021,
      proficiency: "Intermediate",
      icon: GoOriginal,
    },
    {
      name: "Hack",
      learnedIn: 2024,
      proficiency: "Proficient",
      icon: Html5Original,
    },
    {
      name: "Swift/UI",
      learnedIn: 2021,
      proficiency: "Intermediate",
      icon: SwiftOriginal,
    },
    {
      name: "HTML",
      learnedIn: 2018,
      proficiency: "Advanced",
      icon: Html5Original,
    },
    {
      name: "CSS",
      learnedIn: 2018,
      proficiency: "Advanced",
      icon: Css3Original,
    },
  ],
  frameworks: [
    "React",
    "Next.js",
    "Solid.js",
    "GraphQL",
    "Vue",
    "RESTful API",
    "Express",
    "TailwindCSS",
    "Git",
    "Agile",
    "XCode",
    "Photoshop",
    "Lightroom",
    "Figma",
  ],
  otherSkills: [],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    {
      href: "https://shotbykian.com",
      icon: Icons.Camera,
      label: "My Photography",
    },
  ],
  contact: {
    email: "kianjmalakooti@gmail.com",
    tel: "+14083914221",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://dub.sh/kian-github",
        icon: Icons.Github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://dub.sh/kian-linkedin",
        icon: Icons.Linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.Youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.Email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Meta",
      href: "https://meta.com",
      badges: [],
      location: "Hybrid",
      title: "Software Engineer",
      logoUrl: "/meta.png",
      start: "Oct 2024",
      end: "Present",
      description: "Unified Learning Platform (ULP) Human Review Team",
    },
    {
      company: "Torpago",
      href: "https://torpago.com",
      badges: [],
      location: "On-site",
      title: "Software Engineer",
      logoUrl: "/torpago.jpeg",
      start: "Feb 2024",
      end: "Aug 2024",
      description:
        "Utilized TypeScript and SolidJS to create reusable UI components and integrate APIs from the backend. Designed and implemented server-side APIs using Golang to optimize performance and ensured secure data transactions with PostgreSQL databases for 20K users. Worked on and maintained the integration of third-party ERP applications to refactor the legacy codebase into modern guidelines.",
    },
    {
      company: "Geopogo",
      badges: [],
      href: "https://geopogoar.com",
      location: "Hybrid",
      title: "Software Engineer Intern",
      logoUrl: "/geopogo.jpeg",
      start: "June 2023",
      end: "Dec 2023",
      description:
        "Collaborated with a cross-functional team to enhance the iOS app using the MVVM architecture in Swift. Resolved bugs, redesigned the user interface, and released impactful updates for 2.5K+ users. Deployed the project using AWS services such as S3 and EC2 instances for storage and computing.",
    },
    {
      company: "SCU HCI Lab",
      href: "https://scu.edu/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Developer",
      logoUrl: "/scuhci.jpeg",
      start: "Sept 2022",
      end: "June 2023",
      description: `Led the creation of a "digital twin" of university dorms using Matterport AR technology for 1K+ prospective students through ReactJS website. Managed a team of developers, coordinated daily scrum meetings, and implemented Matterport SDK with Javascript to create a centralized, easily-accessible online dorm tours.`,
    },
    {
      company: "Varian Medical Systems",
      href: "https://www.varian.com/",
      badges: [],
      location: "Santa Clara, CA",
      title: "Cybersecurity Researcher",
      logoUrl: "/varian.jpeg",
      start: "Sept 2021",
      end: "Sept 2022",
      description:
        "Conducted qualitative and quantitative research to provide data-driven cybersecurity recommendations for Varian Medical Systems. I also created an internal playbook for implementing cybersecurity measures in their Software as a Service (SaaS) business model. Additionally, I investigated the cloud computing industry's cybersecurity practices and standards. My research-driven approach strengthened cybersecurity for Varian Medical Systems and ensured alignment with industry best practices.",
    },
  ],
  education: [
    {
      school: "Santa Clara University",
      href: "https://scu.edu",
      degree: "B.S. Computer Science & Engineering",
      logoUrl: "/scu.jpeg",
      start: "2019",
      end: "2023",
    },
  ],
  projects: [
    {
      slug: "oryn",
      title: "Oryn",
      badges: ["Beta"],
      href: "https://orynapp.vercel.app",
      dates: "May 2026 - Present",
      year: "2026",
      role: "Founder",
      active: true,
      description: `Oryn is an iOS morning-briefing app that presents your day as a single scrollable card feed — a "personal newspaper" aggregating weather, financial/market data, bank balances (Plaid), news, email summaries (Gmail), health metrics (HealthKit), and AI-generated briefing text (Anthropic).`,
      technologies: [
        "React Native",
        "Expo SDK 54",
        "Anthropic",
        "Gmail",
        "HealthKit",
        "Plaid",
      ],
      links: {
        sourceUrl: "",
        websiteUrl: "https://orynapp.vercel.app",
      },
      image: "/oryn.png",
      video: "",
      gallery: ["/oryn.png", "/oryn-mockup-vertical.png"],
      caseStudy: {
        problem: `Mornings start with a dozen apps — weather, markets, bank balances, news, email, health. The signal is scattered and nobody reads ten dashboards before coffee.`,
        approach: `Built a single-screen Expo (React Native) card feed backed by Supabase. All third-party fetching runs server-side in Edge Functions on a cron, generating a pre-rendered daily 'brief' that an Anthropic model summarizes — so the app opens instantly with no client-side keys and offline-friendly caching.`,
        outcome: `A polished iOS 'personal newspaper' that fuses weather, finance, news, email, and health into one AI-summarized morning read, with a Stripe-style Pro tier via RevenueCat.`,
        body: `## Problem\n\nYour morning context lives in ten different apps. Each one is a separate open-check-close ritual, and the parts that actually matter — a market move, a flagged email, last night's sleep — are buried under everything that doesn't.\n\n## Approach\n\n- React Native + TypeScript on Expo SDK 54; one scrollable, memoized card feed (no router).\n- Supabase as the system of record with mandatory auth; all Anthropic/Polygon/NewsAPI/weather calls run server-side in Edge Functions — no API keys ship in the bundle.\n- A cron pre-generates each user's daily brief, summarized by an Anthropic model; cards read brief-first with local caching as fallback.\n- Plaid (bank balances), Gmail, and HealthKit integrations, with sensitive tokens encrypted at rest behind dedicated RPCs.\n- RevenueCat for a gated Pro tier.\n\n## Outcome\n\nA single-feed iOS app that turns a scattered morning routine into one AI-summarized read — fast cold-open, server-side security, and a working paid Pro tier.`,
      },
    },
    {
      slug: "parpics",
      title: "Parpics",
      badges: ["New"],
      href: "https://parpics.com",
      dates: "September 2025 - Present",
      year: "2025",
      role: "Founder",
      active: true,
      description: `Parpics is a platform for creating and sharing pictures with your clients with an easy proofing system and client delivery workflow.`,
      technologies: ["React", "Typescript", "Next.js", "TailwindCSS", "NeonDB"],
      links: {
        sourceUrl: "",
        websiteUrl: "https://parpics.com",
      },
      image: "/parpics-3.png",
      video: "",
      gallery: ["/parpics-1.png", "/parpics-2.png"],
      caseStudy: {
        problem: `Photographers and creatives need a way to share their work with their clients in a simple and easy way.`,
        approach: `Built a Next.js + NeonDB application that allows photographers and creatives to share their work with their clients in a simple and easy way.`,
        outcome: `A platform that allows photographers and creatives to share their work with their clients in a simple and easy way.`,
        body: `## Problem\n\nPhotographers and creatives need a way to share their work with their clients in a simple and easy way.\n\n## Approach\n\n- Next.js + NeonDB application that allows photographers and creatives to share their work with their clients in a simple and easy way.\n\n## Outcome\n\nA platform that allows photographers and creatives to share their work with their clients in a simple and easy way.`,
      },
    },
    {
      slug: "pairup",
      title: "PairUp",
      badges: ["Deprecated"],
      href: "https://pairup-ai.vercel.app",
      dates: "September 2024 - January 2025",
      year: "2024",
      role: "Full-stack engineer",
      active: true,
      description:
        "Developed PairUp, a full stack MERN application that utilizes React.js and Typescript on the front end to create clean, versatile, and reusable components. Integrated a Node.js backend that connects to an embedded MongoDB database to perform semantic search using vector indexes.",
      technologies: [
        "React.js",
        "Typescript",
        "MongoDB",
        "Apollo",
        "GraphQL",
        "TailwindCSS",
        "Stripe",
        "Shadcn",
      ],
      links: {
        sourceUrl: "https://github.com/kianxm/candidate-search-ui",
        websiteUrl: "https://pairup-ai.vercel.app",
      },
      image: "/pairup.png",
      video: "",
      gallery: ["/pairup.png", "/pairup2.png"],
      caseStudy: {
        problem:
          "Recruiters can't search candidate pools by what someone can actually do — keyword filters miss the signal.",
        approach:
          "Built a MERN stack with vector embeddings on Mongo Atlas, an Apollo/GraphQL layer, and a Stripe-gated UI. The semantic match score fuses vector similarity with structured filters so results stay explainable.",
        outcome:
          "Live beta with semantic match scoring across thousands of profiles — and a payments flow that converts.",
        body: `## Problem\n\nKeyword search treats a resume as a bag of strings. Recruiters end up sorting through false positives and missing strong candidates whose vocabulary doesn't match the JD.\n\n## Approach\n\n- React + TypeScript front-end with reusable Shadcn primitives.\n- GraphQL via Apollo for typed end-to-end contracts.\n- MongoDB Atlas vector index over candidate embeddings; structured filters layered on top for explainable ranking.\n- Stripe Checkout + webhooks for the paid tier.\n\n## Outcome\n\nLive beta. Semantic match scoring across thousands of profiles, paid conversion working, and a UX recruiters actually trust.`,
      },
    },
    {
      slug: "creative-portfolio",
      title: "Creative Portfolio",
      badges: ["New"],
      href: "https://shotbykian.com",
      dates: "Updated May 2026",
      year: "2019",
      role: "Design + build",
      active: true,
      description: "Shot on both Sony and Canon. Go check it out!",
      technologies: ["Next.js", "Typescript", "TailwindCSS"],
      links: {
        sourceUrl: "https://github.com/kianxm/photo-portfolio",
        websiteUrl: "https://shotbykian.com",
      },
      image: "/sbk-africa.jpg",
      video: "",
      gallery: [
        "/sbk-cover.jpg",
        // "/sbk-africa.jpg",
        "/sbk-vegas.jpg",
        // "/sbk-grad.jpg",
        "/sbk-concerts.jpg",
      ],
      caseStudy: {
        problem:
          "My photo work was scattered across socials. I wanted one place that respected the images and the story behind them.",
        approach:
          "Designed and shipped a Next.js gallery focused on a single column of large frames, minimal chrome, and category filters. Built it to ship quickly and update from a single content folder.",
        outcome:
          "Live at shotbykian.com — the canonical home for travel, commercial, and concert work.",
        body: `## Problem\n\nMy photography lived across Instagram, Lightroom exports, and a half-finished old site. None of them did the images justice.\n\n## Approach\n\nNext.js + Tailwind, with a deliberately quiet layout: one column of generous frames, mono captions, and category-based routing — Africa, Vegas, Grad, Commercial, Concerts.\n\n## Outcome\n\nshotbykian.com — the home for the work. Fast, image-first, and easy to update.`,
      },
    },
    {
      slug: "stpr-ai",
      title: "STPR.AI",
      badges: ["Hackathon"],
      href: "",
      dates: "Hack for Humanity 2023 Finalist",
      year: "2023",
      role: "Backend + integration",
      active: true,
      description:
        "Collaborated with a team to architect and deploy a website leveraging OpenAI’s GPT-3.5 API and Python, aimed at generating tailored step-by-step guidance for elderly users navigating technological challenges. Designed the frontend using HTML/CSS/JavaScript, and developed the backend with Node.js.",
      technologies: ["Javascript", "Node.js", "OpenAI"],
      links: {
        sourceUrl: "",
        websiteUrl: "https://devpost.com/software/tech-support-bot",
      },
      image: "/stprai.png",
      video: "",
      gallery: ["/stprai.png"],
      caseStudy: {
        problem:
          "Elderly users get stuck on tech tasks and the available 'help' is dense, jargon-heavy, and not patient enough.",
        approach:
          "Built a Node + GPT-3.5 service that converts vague problem descriptions into clear, numbered, age-appropriate steps. Kept the UI deliberately simple — large inputs, big type, one task at a time.",
        outcome:
          "Hack for Humanity 2023 Finalist. Working prototype demoed end-to-end on stage.",
        body: `## Problem\n\nThe people who most need patient, plain-language tech help are the ones least served by existing tools.\n\n## Approach\n\nGPT-3.5 with a tight system prompt that enforces short numbered steps and avoids jargon. Backend in Node, hand-rolled HTML/CSS/JS for the front-end.\n\n## Outcome\n\nFinalist at Hack for Humanity 2023, working demo, and a strong response from the judges.`,
      },
    },
    {
      slug: "vr-dorm-tours",
      title: "VR Dorm Tours",
      badges: ["Senior Design"],
      href: "",
      dates: "September 2022 - June 2023",
      year: "2023",
      role: "Lead developer",
      active: true,
      description:
        "Developed a platform for prospective students to virtually dorms on campus in a 3D environment.",
      technologies: ["Matterport", "Javascript", "HTML/CSS"],
      links: {
        sourceUrl: "",
        websiteUrl: "https://scudormtours.vercel.app/",
      },
      image: "/dorms.png",
      video: "",
      gallery: ["/dorms.png"],
      caseStudy: {
        problem:
          "Prospective students couldn't tour SCU dorms during COVID and the static photo galleries didn't convey the actual space.",
        approach:
          "Led a team to build a digital twin of every dorm using Matterport, then wrote a React shell with the Matterport SDK to centralize tours, hotspots, and metadata.",
        outcome:
          "Used by 1K+ prospective students. Now the canonical online tour for SCU housing.",
        body: `## Problem\n\nProspective students couldn't actually walk the dorms — and 2D galleries don't do scale or layout justice.\n\n## Approach\n\nLed a developer team to build Matterport-based digital twins for every dorm. Wrote a React shell with the Matterport SDK to centralize tours, hotspots, and metadata. Daily scrums kept the team aligned.\n\n## Outcome\n\n1K+ prospective students used it; SCU adopted it as the canonical online tour.`,
      },
    },
    {
      slug: "chess-ai",
      title: "Chess AI",
      badges: [],
      href: "",
      dates: "May 2022",
      year: "2022",
      role: "Solo project",
      active: true,
      description:
        "Fully functional chess game with an AI with alpha-beta pruning.",
      technologies: ["Python"],
      links: {
        sourceUrl: "https://github.com/kianxm/chessAI",
        websiteUrl: "",
      },
      image: "/chess.webp",
      video: "",
      gallery: ["/chess.webp"],
      caseStudy: {
        problem:
          "Wanted to actually understand how a chess engine prunes a search tree, not just read about it.",
        approach:
          "Hand-rolled board representation, move generation, and alpha-beta pruning in Python. Tuned the evaluation function until it stopped making blunders.",
        outcome:
          "A playable engine that beats casual players and made the algorithms click.",
        body: `## Problem\n\nMinimax is intuitive on paper. Alpha-beta pruning is the part that always felt magical.\n\n## Approach\n\nBuilt the engine in pure Python: bitboard-style representation, move generation, alpha-beta with iterative deepening, and a positional eval function.\n\n## Outcome\n\nIt plays a respectable game — and the algorithm finally feels intuitive.`,
      },
    },
  ],
} as const;
