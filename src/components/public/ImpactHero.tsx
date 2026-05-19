import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { CustomButton } from "../../components/public";

const ImpactHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: "180px", sm: "200px", md: "150px" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: -330,
          height: "100%",
          width: { xs: "100%", md: "100%" },
          backgroundImage: "url('/impact/hero-bg-img.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
          backgroundColor: COLORS.primary,
          opacity: 1,
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: -330,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1, mt: 20 }}>
        <Stack
          spacing={4}
          sx={{
            justifyContent: "left",
            alignItems: "left",
            textAlign: "left",
          }}
        >
          <Typography
            data-aos="fade-down"
            data-aos-easing="linear"
            data-aos-duration="1000"
            variant="h1"
            sx={{
              fontSize: { xs: "4rem", sm: "4rem", md: "6rem" },
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: "-0.03em",
              lineHeight: 1,
              maxWidth: "800px",
              fontFamily: FontFamily.primary,
              textTransform: "capitalize",
            }}
          >
            <Box component="span" sx={{ color: COLORS.primary }}>
              Restoring Hope, {""}
            </Box>
            Empowering Lives Across Nigeria.
          </Typography>

          <Box data-aos="fade-up" data-aos-duration="500">
            <Typography
              sx={{
                color: COLORS.white,
                fontSize: { xs: "1rem", md: "1rem" },
                lineHeight: 1.6,
                maxWidth: "550px",
                fontWeight: 500,
                fontFamily: FontFamily.accent,
              }}
            >
              Support a cause you care about, we empower vulnerable communities
              through sustainable education, direct food intervention, and
              economic infrastructure projects.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              sx={{ width: "100%", mt: 3 }}
            >
              <CustomButton
                to={"/auth/onboarding"}
                variant="filled"
                btncolor="primary"
                radius="6px"
                sx={{ width: "200px", py: 2 }}
              >
                Get Started for free
              </CustomButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ImpactHero;
