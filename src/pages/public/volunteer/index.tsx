import { Box } from "@mui/material";
import { VolunteerHero, GetInvolved } from "../../../components/public";
import StatsCard from "./StatsCard";
import SignupSection from "./SignupSection";

const VolunteerPage = () => {
  return (
    <Box>
      <VolunteerHero />

      <StatsCard />

      <GetInvolved />

      <SignupSection />
    </Box>
  );
};

export default VolunteerPage;
