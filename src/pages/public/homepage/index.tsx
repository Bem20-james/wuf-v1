import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { CustomButton } from "../../../components/public";

const HomePage = () => {
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
          backgroundImage: "url('/home/hero-bg-img.png')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          backgroundPosition: "center",
          opacity: 0.9,
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
            sx={{
              color: COLORS.accent,
              fontSize: { xs: "1rem", md: "1rem" },
              maxWidth: "500px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            Empowering nigeria&apos;s future.
          </Typography>
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
              maxWidth: "1100px",
              fontFamily: FontFamily.primary,
            }}
          >
            Building Pathways Out of
            <Box component="span">&nbsp;</Box>
            <Box component="span" sx={{ color: COLORS.primary }}>
              Extreme Poverty
            </Box>
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            <Box component="span" sx={{ color: COLORS.white }}>
              Across Nigeria
            </Box>
          </Typography>

          <Box data-aos="fade-up" data-aos-duration="500">
            <Typography
              sx={{
                color: COLORS.white,
                fontSize: { xs: "1rem", md: "1rem" },
                lineHeight: 1.6,
                maxWidth: "500px",
                fontWeight: 500,
              }}
            >
              We empower vulnerable communities through sustainable education,
              direct food intervention, and economic infrastructure projects.
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
                sx={{ width: "200px" }}
              >
                Become a volunteer
              </CustomButton>
              <CustomButton
                to={"/auth/onboarding"}
                variant="outlined"
                btncolor="primary"
                radius="6px"
                onClick={() => {}}
                sx={{ width: "150px" }}
              >
                Donate Today
              </CustomButton>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default HomePage;
