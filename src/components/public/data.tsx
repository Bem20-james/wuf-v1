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

export interface InvolvementCard {
  image: string;
  badge?: string;
  title: string;
  description: string;
  ctaLabel: string;
  highlighted?: boolean;
  dialog: {
    title: string;
    body: string[];
    steps: string[];
  };
}

export const cards: InvolvementCard[] = [
  {
    image: "/volunteer/volunteer3.png",
    title: "Individual Volunteers",
    description:
      "Give your time. Mentor a child, help with school supplies distribution, or assist in our local community centers.",
    ctaLabel: "Learn More",
    dialog: {
      title: "Volunteer as an Individual",
      body: [
        "Individual volunteers are the backbone of everything we do. Whether you can spare a few hours a week or commit to a full programme cycle, your time makes a direct and measurable difference in a child's life.",
        "We match every volunteer to a role that fits their schedule, skillset, and location — from mentoring and tutoring to logistics, administration, and community outreach.",
      ],
      steps: [
        "Fill out our volunteer interest form online",
        "Attend a brief orientation session (virtual or in-person)",
        "Get matched to a programme in your area",
        "Begin serving — with full support from our team",
      ],
    },
  },
  {
    image: "/volunteer/volunteer2.png",
    badge: "High Impact",
    title: "Corporate Partners",
    description:
      "Align your brand with change. Invest in sustainable education programs and help us scale our impact globally.",
    ctaLabel: "Partner With Us",
    highlighted: true,
    dialog: {
      title: "Corporate Partnership",
      body: [
        "Corporate partnerships go beyond writing a cheque. We work with your CSR team to design meaningful engagement — from staff volunteering days and skills transfer workshops to co-branded campaigns and long-term programme sponsorships.",
        "Every partnership is bespoke. We align your company's values and goals with the areas of our work where your contribution will have the highest impact.",
      ],
      steps: [
        "Schedule a partnership discovery call with our team",
        "Co-design a giving or volunteering package",
        "Sign a Memorandum of Understanding",
        "Launch your engagement and receive quarterly impact reports",
      ],
    },
  },
  {
    image: "/volunteer/volunteer1.png",
    title: "Community Organizers",
    description:
      "Lead the way. Start a local chapter, host a fundraising event, or coordinate donation drives in your neighborhood.",
    ctaLabel: "Organize Now",
    dialog: {
      title: "Become a Community Organiser",
      body: [
        "Community organisers are our eyes and ears on the ground. If you are passionate about change in your neighbourhood, city, or local government area, we will equip and empower you to lead.",
        "You can start a local chapter, run a donation drive, mobilise other volunteers, or advocate for beneficiaries in your community — all with the full backing of our national team.",
      ],
      steps: [
        "Express your interest via our organiser application form",
        "Attend our Community Leadership Training (2-day programme)",
        "Register your local chapter and receive a starter kit",
        "Begin organising with ongoing support and resources",
      ],
    },
  },
];

export interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullText: string;
  category: string;
  date: string;
  image: string;
  hasVideo: boolean;
}

export const ALL_STORIES: Story[] = [
  {
    id: 1,
    category: "Family Empowerment",
    date: "Oct 12, 2023",
    title: "Q3 Progress Report: 50 Families Empowered",
    excerpt:
      "Our latest quarterly results show a significant increase in vocational training enrolment across three states.",
    fullText:
      "This quarter marked a turning point for our Family Empowerment programme. Fifty families across Enugu, Anambra, and Delta states completed our six-week vocational training module, with 38 of them already generating income from their new skills. The programme covers tailoring, food processing, and basic bookkeeping — skills chosen directly by community members during our listening sessions earlier in the year. Our facilitators note that the shift in confidence among participants is as significant as the economic gains. We will continue to scale this programme into the North-West in Q4.",
    image: "/impact/story1.jpg",
    hasVideo: false,
  },
  {
    id: 2,
    category: "Educational Research",
    date: "Oct 10, 2023",
    title: "Understanding Barriers to Rural Education",
    excerpt:
      "New research highlights transportation as the leading cause of school dropouts in rural communities.",
    fullText:
      "A recent study we commissioned in partnership with three Nigerian universities reveals that over 60% of school-age children who drop out in rural areas cite distance and lack of transport as the primary reason. This finding reshapes how we approach our Education pillar. Going forward, we are piloting a bicycle grant scheme in Kogi and Niger states, providing 200 bicycles to children living more than 5km from the nearest school. Early results from the pilot show a 34% improvement in attendance rates within the first month. We are sharing this research openly so that other NGOs and government partners can act on the data.",
    image: "/impact/story2.jpg",
    hasVideo: true,
  },
  {
    id: 3,
    category: "Program Milestone",
    date: "Oct 05, 2023",
    title: "A New Community Center Opens",
    excerpt:
      "This facility will serve as a hub for after-school tutoring and parent literacy programs.",
    fullText:
      "We are proud to announce the opening of the Nnewi Community Learning Center — our seventh facility built in partnership with local government authorities. The center houses four classrooms, a small library stocked with over 800 books, and a dedicated parents' room for adult literacy sessions held every Wednesday and Friday evening. The construction employed 24 local artisans over a four-month period. At the opening ceremony, the State Commissioner for Education described the center as a model for community-led development. We invite volunteers and donors to visit and see the impact of your contributions firsthand.",
    image: "/impact/story3.jpg",
    hasVideo: true,
  },
  {
    id: 4,
    category: "Success Stories",
    date: "Sep 28, 2023",
    title: "The Power of Mentorship",
    excerpt:
      "How local college students are giving back by tutoring primary school children in their communities.",
    fullText:
      "In partnership with four universities in Lagos and Ogun states, we launched the Peer Mentorship Initiative — a structured programme that pairs university students with primary school pupils in underserved neighbourhoods. Over 120 university volunteers have committed two hours every Saturday to tutoring, homework help, and character mentorship sessions. The results after just one semester are remarkable: 89% of enrolled pupils improved their scores in Mathematics and English. For the university students, the programme is equally transformative. Many describe it as the most meaningful part of their academic experience.",
    image: "/impact/story4.jpg",
    hasVideo: false,
  },
  {
    id: 5,
    category: "Child Welfare",
    date: "Sep 22, 2023",
    title: "Health & Nutrition in Schools",
    excerpt:
      "Exploring the link between regular school meals and improved concentration levels among pupils.",
    fullText:
      "Our school feeding programme, now active in 22 partner schools, has produced striking evidence of the link between nutrition and academic performance. Teachers consistently report that pupils who receive our daily meal — a balanced portion of rice, beans, and vegetables — show markedly higher concentration levels and lower rates of absenteeism. One headmistress in Ibadan described it plainly: 'A hungry child cannot learn.' This programme costs just ₦450 per child per day. We are calling on corporate partners to sponsor entire schools, enabling us to scale to 50 schools by the end of the year.",
    image: "/impact/story5.jpg",
    hasVideo: true,
  },
  {
    id: 6,
    category: "Pilot Updates",
    date: "Sep 15, 2023",
    title: "Teacher Training Workshop 2023",
    excerpt:
      "Equipping 200 teachers with trauma-informed teaching practices to better support at-risk children.",
    fullText:
      "Two hundred primary school teachers from across Kaduna and Plateau states attended our three-day residential workshop on trauma-informed pedagogy. Many of the children in our partner schools have experienced displacement, family breakdown, or early labour — and standard classroom approaches often fail them. This workshop equips teachers with practical tools: how to identify signs of distress, how to de-escalate situations sensitively, and how to create a classroom culture of psychological safety. Participant feedback has been overwhelmingly positive, with 94% of attendees rating the training as 'highly applicable' to their daily work. We plan to train an additional 500 teachers in 2024.",
    image: "/impact/story6.jpg",
    hasVideo: false,
  },
];

export const CATEGORIES = [
  "All Updates",
  "Success Stories",
  "Pilot Updates",
  "Education",
  "Child Welfare",
  "Family Empowerment",
  "Educational Research",
  "Program Milestone",
];
