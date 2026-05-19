import { Box, Container, Typography, Grid } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { pillars, type Pillar } from "./data";

const PillarCard: React.FC<Pillar> = ({ icon: Icon, title, description }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      p: { xs: 3, md: 4 },
      borderRadius: "16px",
      backgroundColor: COLORS.white,
      boxShadow: "0 2px 20px rgba(0,0,0,0.06)",
      transition: "box-shadow 0.3s ease, transform 0.3s ease",
      cursor: "default",
      "&:hover": {
        boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
        transform: "translateY(-4px)",
        "& .pillar-icon-box": {
          backgroundColor: COLORS.primary,
          "& svg": {
            color: "#ffffff",
          },
        },
      },
    }}
  >
    <Box
      className="pillar-icon-box"
      sx={{
        width: "64px",
        height: "64px",
        borderRadius: "12px",
        backgroundColor: `${COLORS.primary}18`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        mb: 3,
        transition: "background-color 0.3s ease",
        "& svg": {
          fontSize: "1.6rem",
          color: COLORS.primary,
          transition: "color 0.3s ease",
        },
      }}
    >
      <Icon />
    </Box>

    <Typography
      variant="h6"
      sx={{
        fontFamily: FontFamily.primary,
        fontWeight: 700,
        fontSize: { xs: "1.1rem", md: "1rem" },
        color: COLORS.dark,
        mb: 1.5,
      }}
    >
      {title}
    </Typography>

    <Typography
      sx={{
        fontFamily: FontFamily.accent ?? FontFamily.primary,
        fontSize: "0.92rem",
        lineHeight: 1.75,
        color: COLORS.neutral ?? "#666",
        mb: 3,
        flexGrow: 1,
      }}
    >
      {description}
    </Typography>
  </Box>
);

const PillarSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F6F8",
        py: { xs: "64px", sm: "80px", md: "100px" },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 8 } }}>
          <Typography
            variant="h2"
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "2.4rem", sm: "3rem", md: "3.5rem" },
              fontWeight: 800,
              color: COLORS.dark,
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              mb: 2,
            }}
          >
            Our Core Values
          </Typography>

          <Typography
            sx={{
              fontFamily: FontFamily.accent ?? FontFamily.primary,
              fontSize: { xs: "0.95rem", md: "1rem" },
              color: COLORS.neutral ?? "#666",
              lineHeight: 1.75,
              maxWidth: "560px",
              mx: "auto",
            }}
          >
            The pillars that define our culture, guide our decisions, and ensure
            we remain true to our mission.
          </Typography>
        </Box>

        <Grid
          container
          spacing={3}
          sx={{
            justifyContent: "center",
          }}
        >
          {pillars.map((pillar) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={pillar.title}>
              <PillarCard {...pillar} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PillarSection;
