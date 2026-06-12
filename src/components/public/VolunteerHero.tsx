import { Box, Typography, Stack } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import CustomButton from "./CustomButton";

const VolunteerHero = () => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        minHeight: "80vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        component="img"
        src="/volunteer/volunteer-hero.png"
        alt=""
        sx={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          pointerEvents: "none",
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

      {/* Content — centred */}
      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          px: { xs: 3, md: 6 },
          maxWidth: 980,
          mx: "auto",
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
            fontFamily: FontFamily.primary,
          }}
        >
          Empower a Generation
          <Box component="span">&nbsp;</Box>
          <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
          <Box component="span" sx={{ color: COLORS.primary }}>
            Join our Mission
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: { xs: "0.95rem", md: "1.05rem" },
            color: "rgba(255,255,255,0.9)",
            lineHeight: 1.75,
            mb: 4,
            maxWidth: 500,
            mx: "auto",
          }}
        >
          Whether you are an individual with a heart for service or a
          corporation looking to make a global impact, there is a place for you
          here.
        </Typography>
        <Stack
          direction={"column"}
          sx={{ justifyContent: "center", alignItems: "center" }}
        >
          <CustomButton
            to={"/auth/onboarding"}
            variant="filled"
            btncolor="primary"
            radius="30px"
            sx={{ width: "200px" }}
          >
            Start Today
          </CustomButton>
        </Stack>
      </Box>
    </Box>
  );
};

export default VolunteerHero;
