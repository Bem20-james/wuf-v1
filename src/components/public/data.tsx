import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
  FaBookOpen,
  FaHandHoldingHeart,
  FaUsers,
  FaChartLine,
  FaMap,
  FaMoneyCheckAlt,
  FaHandshake,
  FaHeartbeat,
  FaHeart,
  FaLeaf,
  FaEye,
} from "react-icons/fa";
import { FaShield, FaXTwitter } from "react-icons/fa6";
import { COLORS } from "../../config/colors";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Impact", path: "/impact" },
  { label: "Contact Us", path: "/contact-us" },
];

export const footerColumns = [
  {
    heading: "Our Programmes",
    links: [
      "Poverty Alleviation",
      "Education for All",
      "Family Empowerment",
      "Community Development",
      "Healthcare Access",
    ],
  },
  {
    heading: "Get Involved",
    links: [
      "Donate Now",
      "Volunteer",
      "Corporate Partnerships",
      "Fundraise for Us",
      "Refer a Beneficiary",
    ],
  },
  {
    heading: "Organisation",
    links: [
      "About Us",
      "Our Impact",
      "Board & Governance",
      "Audited Financials",
      "Contact Us",
    ],
  },
];

export const socials = [
  { label: "X", icon: FaXTwitter },
  { label: "Li", icon: FaLinkedin },
  { label: "Ig", icon: FaInstagram },
  { label: "Yt", icon: FaYoutube },
  { label: "Fb", icon: FaFacebook },
  { label: "wh", icon: FaWhatsapp },
];

export interface ProgramStat {
  value: string;
  label: string;
}

export interface ProcessStep {
  step: string;
  tag: string;
  // Icon component from react-icons
  icon: React.ElementType;
  title: string;
  problem: string;
  approach: string;
  stats: ProgramStat[];
  ctaLabel: string;
  ctaPath: string;
  image: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    tag: "Poverty Alleviation",
    icon: FaHandHoldingHeart,
    title: "Poverty Alleviation",
    problem:
      "Millions face daily food insecurity and lack basic necessities, requiring immediate intervention to survive harsh economic conditions.",
    approach:
      'We provide rapid response through food distribution networks and emergency financial aid. Our "Zero Hunger" initiative targets the most vulnerable widows and orphans across 36 states.',
    stats: [
      { value: "1.2M+", label: "Meals Distributed" },
      { value: "40k+", label: "Relief Kits" },
    ],
    ctaLabel: "Support this Cause",
    ctaPath: "/auth/onboarding",
    image: "/home/img1.png",
  },
  {
    step: "02",
    tag: "Education",
    icon: FaBookOpen,
    title: "Education for All",
    problem:
      "Over 10 million Nigerian children are out of school, trapped in a cycle of poverty with no access to quality learning resources.",
    approach:
      "We build and equip schools in underserved communities, provide scholarships, and train teachers to deliver world-class education to every child regardless of background.",
    stats: [
      { value: "10k+", label: "Children in School" },
      { value: "200+", label: "Schools Supported" },
    ],
    ctaLabel: "Support this Cause",
    ctaPath: "/auth/onboarding",
    image: "/home/img2.jpg",
  },
  {
    step: "03",
    tag: "Family Empowerment",
    icon: FaChartLine,
    title: "Family Empowerment",
    problem:
      "Unemployment and lack of vocational skills leave millions unable to provide for their families or contribute to their local economies.",
    approach:
      "We run skills acquisition programs, provide seed funding for micro-enterprises, and connect beneficiaries with market opportunities to build sustainable livelihoods.",
    stats: [
      { value: "2k+", label: "Families Empowered" },
      { value: "500+", label: "Businesses Started" },
    ],
    ctaLabel: "Support this Cause",
    ctaPath: "/auth/onboarding",
    image: "/home/img3.png",
  },
  {
    step: "04",
    tag: "Community Development",
    icon: FaUsers,
    title: "Community Development",
    problem:
      "Underserved communities lack basic infrastructure — clean water, sanitation, and healthcare — making sustainable development nearly impossible.",
    approach:
      "We partner with local governments and community leaders to build infrastructure, establish health outposts, and create resilient systems that communities can own and maintain.",
    stats: [
      { value: "50+", label: "Communities Reached" },
      { value: "30+", label: "Projects Completed" },
    ],
    ctaLabel: "Support this Cause",
    ctaPath: "/auth/onboarding",
    image: "/home/img4.png",
  },

  {
    step: "05",
    tag: "Healthcare",
    icon: FaHeartbeat,
    title: "Healthcare Access",
    problem:
      "Millions in underserved Nigerian communities have no access to basic medical care — preventable diseases claim lives daily due to a lack of clinics, trained staff, and essential medicines.",
    approach:
      "We establish community health outposts, train local health workers, and run free medical outreach programmes targeting maternal care, malaria, and childhood nutrition across rural areas.",
    stats: [
      { value: "80k+", label: "Patients Treated" },
      { value: "25+", label: "Health Outposts Built" },
    ],
    ctaLabel: "Support this Cause",
    ctaPath: "/auth/onboarding",
    image: "/home/img4.png",
  },
];

export interface Pillar {
  icon: React.ElementType;
  title: string;
  description: string;
  path: string;
}

export const pillars: Pillar[] = [
  {
    icon: FaHeart,
    title: "Compassion",
    description:
      "We act with empathy, ensuring every individual is treated with the dignity they deserve.",
    path: "/programs/education",
  },
  {
    icon: FaShield,
    title: "Integrity",
    description:
      "Doing the right thing even when no one is watching is the bedrock of our foundation.",
    path: "/programs/poverty-alleviation",
  },
  {
    icon: FaLeaf,
    title: "Sustainability",
    description:
      "We focus on long-term solutions that empower communities to thrive independently.",
    path: "/programs/community-development",
  },
  {
    icon: FaEye,
    title: "Transparency",
    description:
      "Every Naira is accounted for. We maintain open-book governance for all our donors.",
    path: "/programs/economic-empowerment",
  },
];

export interface StatItem {
  icon: React.ElementType;
  label: string;
  value: string;
}

export const stats: StatItem[] = [
  {
    icon: FaUsers,
    label: "Lives Impacted",
    value: "1M+",
  },
  {
    icon: FaMap,
    label: "States Covered",
    value: "21 + FCT",
  },
  {
    icon: FaMoneyCheckAlt,
    label: "Funds Disbursed",
    value: "₦500M+",
  },
  {
    icon: FaHandshake,
    label: "Active Partners",
    value: "70+",
  },
];

export interface BoardMember {
  name: string;
  role: string;
  roleColor?: string;
  bio: string;
  image: string;
}

export const boardMembers: BoardMember[] = [
  {
    name: "Williams Uchemba",
    role: "Founder & CEO",
    roleColor: COLORS.primary,
    bio: "Visionary leader driving the foundation's strategic direction and high-impact initiatives across the federation.",
    image: "/about/williams.jpg",
  },
  {
    name: "Dr. Amara Okoro",
    role: "Director of Strategy",
    roleColor: COLORS.primary,
    bio: "Expert in public policy and social development with over 15 years of experience in NGO governance.",
    image: "/about/img3.png",
  },
  {
    name: "Engr. Tunde Bakare",
    role: "Trustee, Operations",
    roleColor: COLORS.primary,
    bio: "Specialist in infrastructural development and logistics management, ensuring project execution excellence.",
    image: "/about/img4.png",
  },
];

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  programme: string;
  color?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Before this programme, I was selling groundnuts by the roadside just to feed my children. They gave me a grant, training, and a support system. Today I run a small provisions store and my three children are all in school. I never imagined this was possible for someone like me.",
    name: "Adaeze Okoro",
    role: "Small Business Owner",
    location: "Enugu State",
    avatar: "/impact/user.png",
    programme: "Economic Infrastructure",
    color: "#F0C8D8",
  },
  {
    id: 2,
    quote:
      "My son was on the streets for two years. I had lost hope. After he was enrolled in the youth programme, I saw a completely different child — focused, fed, and with a future. This organisation gave us back something I thought was gone forever.",
    name: "Rashida Musa",
    role: "Parent & Community Volunteer",
    location: "Kano State",
    avatar: "/impact/user.png",
    programme: "Education & Youth",
    color: "#C8D8F0",
  },
  {
    id: 3,
    quote:
      "The food distribution programme didn't just feed us during a very hard season — it brought the whole community together. People started talking, cooperating, and eventually formed a cooperative. That cooperation is still going strong.",
    name: "Emmanuel Afolabi",
    role: "Cooperative Founder",
    location: "Ogun State",
    avatar: "/impact/user.png",
    programme: "Food Security",
    color: "#C8E6D0",
  },
  {
    id: 4,
    quote:
      "I had given up on ever seeing a doctor — the nearest clinic was 40 kilometres away. When the health outpost opened in our village, I was the first in line. They found a condition I didn't know I had and treated it. Today I am healthy and I volunteer there every weekend.",
    name: "Hajiya Bintu Sule",
    role: "Community Health Volunteer",
    location: "Kebbi State",
    avatar: "/impact/user.png",
    programme: "Healthcare Access",
    color: "#F0DCC8",
  },
  {
    id: 5,
    quote:
      "My daughter dropped out after JSS1 — we simply could not afford the fees. The scholarship programme not only paid her fees but provided books, uniforms, and mentorship. She just wrote her WAEC and scored distinctions. I wept the day the results came out.",
    name: "Peter Nwachukwu",
    role: "Father & Farmer",
    location: "Anambra State",
    avatar: "/impact/user.png",
    programme: "Education & Youth",
    color: "#DCC8F0",
  },
];
