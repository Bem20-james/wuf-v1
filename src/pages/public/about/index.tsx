import { Box, Container, Typography, Grid, Stack } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { CustomChip, CustomButton } from "../../../components/public";
import { RocketLaunch } from "@mui/icons-material";

const AboutUsPage = () => {
  return (
    <Box
      sx={{
        bgcolor: "#fff",
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(ellipse at top right, rgba(30, 136, 229, 0.43) 0%, transparent 65%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(30, 136, 229, 0.55) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={{ xs: 8, md: 12 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            <CustomChip
              label="Our Mission"
              icon={<RocketLaunch sx={{ fontSize: 14 }} />}
            />
            <Typography
              component="h1"
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: { xs: "40px", md: "54px", lg: "5rem" },
                fontWeight: 800,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: COLORS.dark,
                mb: 3,
                mt: 5,
              }}
            >
              Transforming Lives Through
              <Box component="br" />
              <Box component="span" sx={{ display: { md: "none" } }}>
                &nbsp;
              </Box>
              <Box component="span" sx={{ color: COLORS.primary }}>
                Strategic Action .
              </Box>
            </Typography>
            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: COLORS.neutral,
                maxWidth: "500px",
                mb: 3,
              }}
            >
              A modern and credible platform fighting extreme poverty in Nigeria
              through education, empowerment, and sustainable development.
            </Typography>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <CustomButton
                to={"/auth/onboarding"}
                variant="filled"
                btncolor="primary"
                radius="6px"
                sx={{ width: "200px", py: 2, fontSize: "15px" }}
              >
                Support our work
              </CustomButton>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                border: "1px solid #F3F4F6",
                borderRadius: "20px",
                bgcolor: "#FAFAFA",
              }}
            >
              <Box
                component="img"
                src="/about/about-hero.png"
                alt="wuf"
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: "auto" },
                  borderRadius: "10px",
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutUsPage;
