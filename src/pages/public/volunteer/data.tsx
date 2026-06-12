import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import GroupsIcon from "@mui/icons-material/Groups";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  FaHandsHelping,
  FaBuilding,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

export const STATS = [
  { icon: <GroupsIcon />, num: "2,400+", label: "Active volunteers" },
  {
    icon: <VolunteerActivismIcon />,
    num: "180+",
    label: "Communities reached",
  },
  { icon: <EmojiEventsIcon />, num: "6 yrs", label: "Of field impact" },
];

interface StatCard {
  icon: React.ElementType;
  label: string;
  value: string;
  subtext: string;
}

export const cards: StatCard[] = [
  {
    icon: FaHandsHelping,
    label: "Active Volunteers",
    value: "500+",
    subtext:
      "Dedicated individuals giving their time across 21 states to serve communities in need.",
  },
  {
    icon: FaBuilding,
    label: "Corporate Partners",
    value: "120",
    subtext:
      "Organisations co-funding programmes and deploying staff as skilled volunteers on the ground.",
  },
];

export const trustPoints = [
  {
    icon: FaShieldAlt,
    title: "Verified Impact",
    body: "100% of your efforts go directly to community programmes — tracked, reported, and independently audited.",
  },
  {
    icon: FaUserFriends,
    title: "Ongoing Support",
    body: "Dedicated coordinators are assigned to every volunteer and corporate partner from day one.",
  },
];

export const interestOptions = [
  "Individual Volunteering",
  "Corporate Partnership",
  "Community Organising",
  "Fundraising",
  "Skills-Based Volunteering",
];
