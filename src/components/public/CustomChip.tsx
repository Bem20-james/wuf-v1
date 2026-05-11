import { Box, Typography } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { type ReactNode } from "react";

interface CustomChipProps {
  label: string;
  icon?: ReactNode;
}

const CustomChip = ({ label, icon }: CustomChipProps) => {
  return (
    <Box
      sx={{
        backgroundColor: `${COLORS.offWhite}99`,
        padding: "5px 10px",
        borderRadius: "20px",
        width: "fit-content",
        display: "flex",
        alignItems: "center",
        gap: "6px",
      }}
    >
      {icon && (
        <Box sx={{ display: "flex", color: COLORS.primary }}>{icon}</Box>
      )}

      <Typography
        sx={{
          fontFamily: FontFamily.primary,
          fontWeight: 800,
          fontSize: ".7rem",
          color: COLORS.primary,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
};

export default CustomChip;
