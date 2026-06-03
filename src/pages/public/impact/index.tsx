import { Box } from "@mui/material";

import { ImpactHero, AwareSection } from "../../../components/public";

const ImpactPage = () => {
  return (
    <Box>
      <ImpactHero />
      <Box sx={{ mt: 10 }}>
        <AwareSection />
      </Box>
    </Box>
  );
};

export default ImpactPage;
