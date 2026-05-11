import {
  FaFacebook,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navItems = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  { label: "Impact", path: "/impact" },
  { label: "Contact Us", path: "/contact-us" },
];

export const footerColumns = [
  {
    heading: "Product",
    links: [
      "How it works",
      "For Creators",
      "For Brands",
      "Campaign tools",
      "Analytics",
      "Marketplace",
    ],
  },
  {
    heading: "Creators",
    links: [
      "Join as Creator",
      "Verification",
      "Earn & Withdraw",
      "Creator dashboard",
      "Portfolio builder",
    ],
  },
  {
    heading: "Brands",
    links: [
      "Start a campaign",
      "Find talent",
      "Escrow payments",
      "Brand dashboard",
      "Case studies",
    ],
  },
  {
    heading: "Pricing",
    links: [
      "Plans overview",
      "Creator plans",
      "Brand plans",
      "Enterprise",
      "Compare plans",
    ],
  },
  {
    heading: "Company",
    links: ["About us", "Blog", "Careers", "Press kit", "Contact us"],
  },
  {
    heading: "Support",
    links: [
      "Help center",
      "Community",
      "System status",
      "Trust & Safety",
      "Report abuse",
    ],
  },
];

export const socials = [
  {
    label: "X",
    icon: FaXTwitter,
  },
  {
    label: "Li",
    icon: FaLinkedin,
  },
  {
    label: "Ig",
    icon: FaInstagram,
  },
  {
    label: "Yt",
    icon: FaYoutube,
  },
  {
    label: "Fb",
    icon: FaFacebook,
  },
  {
    label: "wh",
    icon: FaWhatsapp,
  },
];
