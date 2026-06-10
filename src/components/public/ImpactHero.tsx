import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { CustomButton } from "../../components/public";
import { type StatItem, stats } from "./data";

const StatCard: React.FC<StatItem> = ({ icon: Icon, label, value }) => (
  <Box
    sx={{
      backgroundColor: COLORS.white,
      borderRadius: "12px",
      border: "1px solid #E8EBF0",
      p: { xs: "24px", md: "28px 32px" },
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      boxShadow: "0 6px 22px rgba(0,0,0,0.22)",
    }}
  >
    <Box
      sx={{
        color: COLORS.primary,
        fontSize: "1.4rem",
        display: "flex",
        alignItems: "center",
        mb: "2px",
      }}
    >
      <Icon />
    </Box>

    <Typography
      sx={{
        fontFamily: FontFamily.primary,
        fontSize: "0.85rem",
        color: COLORS.neutral ?? "#777",
        fontWeight: 400,
        lineHeight: 1,
      }}
    >
      {label}
    </Typography>

    <Typography
      sx={{
        fontFamily: FontFamily.primary,
        fontSize: { xs: "1.8rem", md: "2rem" },
        fontWeight: 700,
        color: COLORS.primary,
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}
    >
      {value}
    </Typography>
  </Box>
);

const ImpactHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "visible",
      }}
    >
      <Box
        sx={{
          backgroundColor: COLORS.white,
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          pt: { xs: 12, md: 0 },
          pb: { xs: "220px", sm: "200px", md: "140px" },
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: -330,
            height: "100%",
            width: "100%",
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
            inset: 0,
            bottom: -330,
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
                Restoring Hope,{" "}
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
                Support a cause you care about. We empower vulnerable
                communities through sustainable education, direct food
                intervention, and economic infrastructure projects.
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
                  Support our work
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
        <Grid container spacing={2.5}>
          {stats.map((stat) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={stat.label}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactHero;
