import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../config/fonts";

const stats = [
  { value: "36", label: "States Impacted" },
  { value: "500k+", label: "Lives Touched" },
  { value: "120+", label: "Projects\nCompleted" },
  { value: "100%", label: "Transparency\nRate" },
];

const CommitmentSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundColor: "#0F1923",
        overflow: "hidden",
        py: { xs: "60px", md: "80px" },
      }}
    >
      {/* Diagonal slash — right side */}
      <Box
        aria-hidden
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          // The slash is a pseudo-trapezoid: full height, ~35% wide, slanted left edge
          width: { xs: "40%", md: "35%" },
          background: "#1A2A1E", // slightly lighter dark-green tint
          clipPath: "polygon(18% 0%, 100% 0%, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box
          sx={{
            // Content occupies the left ~65%, slash covers the right
            maxWidth: { xs: "100%", md: "65%" },
          }}
        >
          {/* Heading */}
          <Typography
            variant="h2"
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "1.75rem", md: "2.25rem" },
              fontWeight: 700,
              color: "#FFFFFF",
              mb: 2.5,
              lineHeight: 1.2,
            }}
          >
            Our Commitment to Nigeria
          </Typography>

          {/* Body */}
          <Typography
            sx={{
              fontFamily: FontFamily.accent ?? FontFamily.primary,
              fontSize: { xs: "0.9rem", md: "0.975rem" },
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.65)",
              maxWidth: "560px",
              mb: { xs: 5, md: 6 },
            }}
          >
            Nigeria&apos;s challenges are systemic, and so are our solutions.
            WUF focuses on sustainable growth by targeting the root causes of
            poverty through education, healthcare, and economic empowerment. We
            are committed to a Nigeria where every citizen has the opportunity
            to reach their full potential.
          </Typography>

          {/* Stats row */}
          <Stack
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, 1fr)",
                sm: "repeat(4, auto)",
              },
              gap: { xs: "32px 24px", md: "0 38px" },
              alignItems: "flex-start",
            }}
          >
            {stats.map((stat) => (
              <Box key={stat.label}>
                <Typography
                  sx={{
                    fontFamily: FontFamily.primary,
                    fontSize: { xs: "2rem", md: "2.4rem" },
                    fontWeight: 800,
                    color: "#22C55E", // bright green accent matching reference
                    lineHeight: 1,
                    mb: 0.75,
                  }}
                >
                  {stat.value}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: FontFamily.primary,
                    fontSize: "0.65rem",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.5,
                  }}
                >
                  {stat.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default CommitmentSection;
