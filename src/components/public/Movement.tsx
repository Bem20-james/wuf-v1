import { Box, Container, Typography, Stack } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import CustomButton from "./CustomButton";

const MovementSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        py: { xs: "40px", md: "60px" },
        px: { xs: 2, md: 0 },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            position: "relative",
            borderRadius: "20px",
            overflow: "hidden",
            minHeight: { xs: "320px", md: "360px" },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url('/about/img5.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: 0,
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: "rgba(11, 80, 218, 0.78)",
              zIndex: 1,
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 2,
              textAlign: "center",
              px: { xs: 3, md: 6 },
              maxWidth: "620px",
            }}
          >
            <Typography
              variant="h2"
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                color: "#FFFFFF",
                mb: 2,
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              Join the Movement
            </Typography>

            <Typography
              sx={{
                fontFamily: FontFamily.accent ?? FontFamily.primary,
                fontSize: { xs: "0.9rem", md: "0.975rem" },
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.75,
                mb: 4,
              }}
            >
              Whether through a donation, volunteering your skills, or spreading
              our message, you can play a part in rewriting the Nigerian story.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{
                justifyContent: "center",
              }}
            >
              <CustomButton
                to="/donate"
                variant="filled"
                btncolor="sky"
                radius="6px"
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: COLORS.dark,
                  fontWeight: 600,
                  "&:hover": { backgroundColor: "rgba(255,255,255,0.9)" },
                  minWidth: "140px",
                }}
              >
                Donate Now
              </CustomButton>

              <CustomButton
                to="/auth/onboarding"
                variant="outlined"
                btncolor="primary"
                radius="6px"
                sx={{
                  borderColor: "rgba(255,255,255,0.7)",
                  color: "#FFFFFF",
                  fontWeight: 600,
                  "&:hover": {
                    borderColor: "#FFFFFF",
                    backgroundColor: "rgba(255,255,255,0.08)",
                  },
                  minWidth: "160px",
                }}
              >
                Partner With Us
              </CustomButton>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default MovementSection;
