import { Box, Typography } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

interface ImageStatCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const ImageStatCard: React.FC<ImageStatCardProps> = ({
  icon,
  value,
  label,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        backgroundColor: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(12px)",
        borderRadius: "12px",
        px: "16px",
        py: "12px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
        minWidth: "170px",
        zIndex: 2,
      }}
    >
      {/* Icon bubble */}
      <Box
        sx={{
          width: "40px",
          height: "40px",
          borderRadius: "10px",
          backgroundColor: COLORS.primary,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
          color: "#fff",
          fontSize: "1.1rem",
        }}
      >
        {icon}
      </Box>

      {/* Text */}
      <Box>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: "1.2rem",
            fontWeight: 800,
            color: COLORS.dark,
            lineHeight: 1,
            mb: 0.25,
          }}
        >
          {value}
        </Typography>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: "0.65rem",
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: COLORS.neutral ?? "#888",
            lineHeight: 1,
          }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
};

export default ImageStatCard;
