import { Box, Container, Stack, Typography } from "@mui/material";
import AwarenessCard from "./AwareCard";
import { COLORS } from "../../config/colors";

const AwareSection = ({
  label = "",
  desc = "",
  notext = false,
  noCards = false,
}: {
  label?: string;
  desc?: string;
  notext?: boolean;
  noCards?: boolean;
}) => {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          pt: { xs: "20px", sm: "30px", md: "50px" },
        }}
      >
        {!notext && (
          <Stack
            direction="column"
            sx={{
              mb: 5,
              textAlign: "center",
              px: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography
              component="h2"
              sx={{
                color: COLORS.secondary,
                fontSize: { xs: "32px", md: "3rem" },
                fontWeight: 700,
                letterSpacing: "-0.8px",
              }}
            >
              {label}
            </Typography>
            <Typography
              sx={{
                color: COLORS.secondary,
                maxWidth: 560,
                lineHeight: 1.75,
              }}
            >
              {desc}
            </Typography>
          </Stack>
        )}

        {!noCards && (
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr" },
              gap: 2,
              p: 2,
            }}
          >
            <AwarenessCard
              title="Support Our Mission"
              description="Help us take 1,000 kids off the streets and back into school. Every donation goes directly toward education, meals, and a safer future."
              bg="#1E88E5"
              cta="Donate Now"
              onCtaClick={() => {}}
            />
            <AwarenessCard
              title="Become a Volunteer"
              description="Give your time and skills to empower children and their families. Join our nationwide effort to create lasting, meaningful change in your community."
              bg="#2E7D32"
              cta="Get Involved"
              onCtaClick={() => {}}
            />
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default AwareSection;
