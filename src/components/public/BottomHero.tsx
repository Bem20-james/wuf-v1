import { Box, Container, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import CustomButton from "./CustomButton";
import { COLORS } from "../../config/colors";

const BottomHero = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.primary,
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 12, md: 0 },
        pb: { xs: "18px", sm: "20px", md: "50px" },
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "55%",
          height: "55%",
          background:
            "radial-gradient(ellipse at bottom left, rgba(255, 255, 255, 0.9) 0%, transparent 70%)",
          zIndex: 0,
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Stack
          spacing={4}
          sx={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: "3rem", sm: "4rem", md: "4rem" },
              fontWeight: 700,
              color: "#FFFFFF",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              maxWidth: "1000px",
              fontFamily: FontFamily.primary,
            }}
          >
            Together We Can End the Cycle of &nbsp;
            <Box component="span" sx={{ color: COLORS.dark }}>
              Extreme Poverty.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: COLORS.white,
              fontSize: "1rem",
              fontFamily: FontFamily.accent,
              fontWeight: 500,
              lineHeight: 1.3,
              mb: 4,
              maxWidth: 650,
              mx: "auto",
            }}
          >
            Your support directly fuels our on-ground operations and changes
            lives in communities that need it most.
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            sx={{
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <CustomButton
              to={"/auth/onboarding"}
              variant="filled"
              btncolor="pure"
              radius="5px"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              Become a Partner
            </CustomButton>
            <CustomButton
              to={"/auth/onboarding"}
              variant="outlined"
              btncolor="pure"
              radius="5px"
              sx={{
                width: { xs: "100%", sm: "auto" },
                fontSize: "1rem",
                whiteSpace: "nowrap",
              }}
            >
              Donate Now
            </CustomButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default BottomHero;
