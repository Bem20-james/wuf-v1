import { Box, Typography } from "@mui/material";
import { COLORS } from "../../config/colors";

interface StatCardProps {
  value: string;
  label: string;
}

const StatCard = ({ value, label }: StatCardProps) => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        py: 4,
        px: 2,
        textAlign: "center",
      }}
    >
      <Typography
        sx={{
          color: COLORS.primary,
          fontSize: { xs: "2.5rem", md: "3rem" },
          fontWeight: 800,
          lineHeight: 1,
          mb: 1,
        }}
      >
        {value}
      </Typography>

      <Typography
        sx={{
          color: COLORS.dark ?? "#1a1a1a",
          fontSize: "0.75rem",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.12em",
          mb: 1.5,
        }}
      >
        {label}
      </Typography>

      <Box
        sx={{
          width: "32px",
          height: "3px",
          backgroundColor: COLORS.accent,
          borderRadius: "2px",
        }}
      />
    </Box>
  );
};

export default StatCard;
