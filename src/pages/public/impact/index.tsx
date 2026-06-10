import { Box } from "@mui/material";

import {
  ImpactHero,
  AwareSection,
  StoriesSection,
  ImpactBanner,
  TestimonialCarousel,
  TransparencySection,
} from "../../../components/public";
import PartnerSection from "./PartnersSection";

const ImpactPage = () => {
  return (
    <Box>
      <ImpactHero />

      <Box sx={{ mt: 10 }}>
        <ImpactBanner />
      </Box>

      <Box>
        <TransparencySection />
      </Box>
      <Box>
        <TestimonialCarousel />
      </Box>

      <StoriesSection />

      <PartnerSection />

      <Box sx={{ py: 6 }}>
        <AwareSection
          label="How You Can Help"
          desc="Every contribution — big or small — creates ripple effects that transform communities across Nigeria. Whether you donate, volunteer, or spread the word — every action you take helps us reach more children, feed more families, and build a more resilient Nigeria."
        />
      </Box>
    </Box>
  );
};

export default ImpactPage;
