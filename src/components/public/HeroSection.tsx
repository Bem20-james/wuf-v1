import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import CustomButton from "./CustomButton";
import StatCard from "./StatCard";

const stats = [
  { value: "50+", label: "Communities Reached" },
  { value: "10,000+", label: "Children in School" },
  { value: "2,000+", label: "Families Empowered" },
];

const HeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        position: "relative",
        overflow: "visible", // allow stats bar to bleed out
      }}
    >
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 12, md: 0 },
          pb: { xs: "220px", sm: "200px", md: "120px" },
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

        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, mt: 20 }}
        >
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
              <Box
                component="br"
                sx={{ display: { xs: "none", md: "block" } }}
              />
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

      <Container
        maxWidth="lg"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translate(-50%, 50%)",
          zIndex: 10,
          px: { xs: 2, md: 3 },
        }}
      >
        <Box
          sx={{
            backgroundColor: COLORS.white,
            borderRadius: "16px",
            boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            // Dividers between stat items
            "& > *:not(:last-child)": {
              borderRight: { sm: "1px solid rgba(0,0,0,0.08)" },
              borderBottom: { xs: "1px solid rgba(0,0,0,0.08)", sm: "none" },
            },
          }}
        >
          {stats.map((stat) => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
