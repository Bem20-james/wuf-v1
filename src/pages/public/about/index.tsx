import { Box, Container, Typography } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import {
  AboutHero,
  CommitmentSection,
  VisionSection,
  LeadershipSection,
  MovementSection,
  TrustSection,
} from "../../../components/public";
import { PillarSection } from "../../../components/public";

const AboutUsPage = () => {
  return (
    <Box>
      <AboutHero />

      <Box
        sx={{
          backgroundColor: COLORS.white,
          py: { xs: "64px", sm: "80px", md: "100px" },
        }}
      >
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "flex-start",
              gap: { xs: "40px", md: "80px" },
            }}
          >
            <Box
              sx={{
                flexShrink: 0,
                width: { xs: "100%", md: "420px" },
              }}
            >
              <Box
                component="img"
                src="/about/williams.jpg"
                alt="Williams Uchemba"
                sx={{
                  width: "100%",
                  height: { xs: "420px", md: "520px" },
                  objectFit: "cover",
                  objectPosition: "center top",
                  borderRadius: "16px",
                  display: "block",
                }}
              />
            </Box>

            <Box
              sx={{
                flex: 1,
                pt: { md: "12px" },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: { xs: "2rem", sm: "2.4rem", md: "2.75rem" },
                  fontWeight: 800,
                  color: COLORS.dark,
                  lineHeight: 1.15,
                  letterSpacing: "-0.025em",
                  mb: 4,
                }}
              >
                The Genesis: A Personal Mission Turned National Force
              </Typography>

              <Typography
                sx={{
                  fontFamily: FontFamily.accent ?? FontFamily.primary,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                  color: COLORS.neutral ?? "#555",
                  mb: 3,
                }}
              >
                What started as a personal conviction to help those in immediate
                need has evolved into a structured, national movement for social
                development. Witnessing the stark realities of poverty in
                Nigeria, I realized that temporary relief, while necessary, was
                not enough.
              </Typography>

              <Typography
                sx={{
                  fontFamily: FontFamily.accent ?? FontFamily.primary,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                  color: COLORS.neutral ?? "#555",
                  mb: 3,
                }}
              >
                The foundation was established to bridge the gap between intent
                and impact. By applying professional governance and strategic
                planning to grassroots initiatives, the WILLIAMS UCHEMBA
                FOUNDATION has grown into a trusted institution capable of
                executing large-scale projects across the country.
              </Typography>

              <Typography
                sx={{
                  fontFamily: FontFamily.accent ?? FontFamily.primary,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  lineHeight: 1.8,
                  color: COLORS.neutral ?? "#555",
                }}
              >
                Today, the WILLIAMS UCHEMBA FOUNDATION stands as a testament to
                what is possible when compassion meets institutional rigor. We
                don&apos;t just provide aid; we build systems that foster
                independence and dignity for every Nigerian we serve.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <PillarSection />

      <VisionSection />

      <LeadershipSection />

      <CommitmentSection />

      <TrustSection />

      <MovementSection />
    </Box>
  );
};

export default AboutUsPage;
