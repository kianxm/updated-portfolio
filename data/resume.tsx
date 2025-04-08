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
      company: "Best Buy",
      href: "https://bestbuy.com/",
      badges: [],
      location: "Milpitas, CA",
      title: "Sales Specialist",
      logoUrl: "/bestbuy.jpg",
      start: "Oct 2022",
      end: "April 2023",
      description: `Drove memberships up by 30% through customer engagement and product knowledge. Trained incoming employees and managed the sales floor during peak hours. Recognized as the top sales specialist in the department for 3 consecutive months.`,
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
      title: "PairUp",
      badges: ["Beta"],
      href: "https://pairup-ai.vercel.app",
      dates: "September 2024 - Present",
      active: true,
      description:
        "Currently developing PairUp, a full stack MERN application that utilizes React.js and Typescript on the front end to create clean, versatile, and reusable components. Integrated a Node.js backend that connects to an embedded MongoDB database to perform semantic search using vector indexes.",
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
      image: "/pairup2.png",
      video: "",
    },
    {
      title: "Creative Portfolio",
      badges: ["New"],
      href: "https://shotbykian.com",
      dates: "Updated September 2024",
      active: true,
      description:
        "Improved my photography portfolio website with a new design and layout. Pictures range from landscapes, to commercial, to animals. Shot on both Sony and Canon. Go check it out!",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn"],
      links: {
        sourceUrl: "https://github.com/kianxm/photo-portfolio",
        websiteUrl: "https://shotbykian.com",
      },
      image: "/photoportfolio3.png",
      video: "",
    },
    {
      title: "STPR.AI",
      badges: [],
      href: "",
      dates: "Hack for Humanity 2023 Finalist",
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
    },
    {
      title: "VR Dorm Tours",
      badges: [],
      href: "",
      dates: "September 2022 - June 2023",
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
    },
    {
      title: "Chess AI",
      badges: [],
      href: "",
      dates: "May 2022",
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
    },
  ],
} as const;
