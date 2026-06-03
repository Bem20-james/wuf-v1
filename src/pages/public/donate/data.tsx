import MenuBookIcon from "@mui/icons-material/MenuBook";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import Diversity3Icon from "@mui/icons-material/Diversity3";

export const DONATION_OPTIONS = [
  {
    amount: 5000,
    label: "₦5,000",
    icon: <MenuBookIcon sx={{ fontSize: 36 }} />,
    title: "Education",
    desc: "School supplies for one child",
    color: "#1A56DB",
    bg: "#EFF6FF",
  },
  {
    amount: 20000,
    label: "₦20,000",
    icon: <LocalHospitalIcon sx={{ fontSize: 36 }} />,
    title: "Healthcare",
    desc: "Monthly nutrition for a family",
    color: "#059669",
    bg: "#ECFDF5",
  },
  {
    amount: 50000,
    label: "₦50,000",
    icon: <Diversity3Icon sx={{ fontSize: 36 }} />,
    title: "Community",
    desc: "Medical outreach sponsorship",
    color: "#7C3AED",
    bg: "#F5F3FF",
  },
];
