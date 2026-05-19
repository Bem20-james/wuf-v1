import { Box, Container, Grid, Typography } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
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
    }}
  >
    {/* Icon */}
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

    {/* Label */}
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

    {/* Value */}
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

const ImpactStats: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#F5F6F8",
        py: { xs: "48px", md: "64px" },
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={2.5}>
          {stats.map((stat) => (
            <Grid size={{ xs: 12, sm: 5, md: 3 }} key={stat.label}>
              <StatCard {...stat} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ImpactStats;
