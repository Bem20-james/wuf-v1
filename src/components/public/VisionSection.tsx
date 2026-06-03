import { Box, Container, Typography } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { FaHeart } from "react-icons/fa";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import CustomChip from "./CustomChip";
import ImageStatCard from "./ImageStatCard";

const VisionSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        py: { xs: "64px", sm: "80px", md: "100px" },
      }}
    >
      <Container maxWidth="lg">
        <CustomChip
          label="Our Vision"
          icon={<Visibility sx={{ fontSize: 14 }} />}
        />
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
              sx={{
                position: "relative",
                mt: 5,
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <Box
                component="img"
                src="/impact/hero-bg-img.png"
                alt="Williams Uchemba Foundation"
                sx={{
                  width: "100%",
                  height: { xs: "420px", md: "550px" },
                  objectFit: "cover",
                  objectPosition: "center top",
                  display: "block",
                }}
              />

              <ImageStatCard
                icon={<FaHeart />}
                value="250k+"
                label="Lives Impacted"
              />
            </Box>
          </Box>

          <Box sx={{ flex: 1, pt: { md: "12px" } }}>
            <Typography
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
              variant="h1"
              sx={{
                fontSize: { xs: "2rem", sm: "3rem", md: "3rem" },
                fontWeight: 700,
                color: COLORS.dark,
                letterSpacing: "-0.03em",
                lineHeight: 1.1,
                maxWidth: "800px",
                fontFamily: FontFamily.primary,
                textTransform: "capitalize",
                mb: 3,
              }}
            >
              Empowering Lives {""}
              <Box component="span" sx={{ color: COLORS.primary }}>
                Restoring Hope.
              </Box>
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
              Our vision is a Nigeria where every citizen — regardless of
              geography, gender, or circumstance — has access to the
              opportunities, resources, and dignity they deserve. We believe
              poverty is not inevitable; it is a condition that deliberate,
              sustained action can reverse.
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
              development. Witnessing the stark realities of poverty in Nigeria,
              Williams Uchemba recognised that temporary relief, while
              necessary, was never going to be enough to break the cycle.
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
              planning to grassroots initiatives, the Williams Uchemba
              Foundation has grown into a trusted institution capable of
              executing large-scale programmes across all 36 states.
            </Typography>

            <Typography
              sx={{
                fontFamily: FontFamily.accent ?? FontFamily.primary,
                fontSize: { xs: "0.95rem", md: "1rem" },
                lineHeight: 1.8,
                color: COLORS.neutral ?? "#555",
              }}
            >
              Today, the Williams Uchemba Foundation stands as a testament to
              what is possible when compassion meets institutional rigour. We
              don&apos;t just provide aid — we build systems that foster
              independence, resilience, and lasting dignity for every Nigerian
              we serve. Our north star remains unchanged: a generation of
              Nigerians who inherit opportunity, not poverty.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default VisionSection;
