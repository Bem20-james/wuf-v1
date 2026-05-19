import { Box, Typography } from "@mui/material";
import { COLORS } from "../../config/colors";

const ImagePanel: React.FC<{ src: string; alt: string; step: string }> = ({
  src,
  alt,
  step,
}) => (
  <Box
    sx={{
      position: "relative",
      width: "100%",
      height: { xs: "280px", sm: "360px", md: "460px" },
      borderRadius: "6px",
      overflow: "hidden",
      border: `1px solid ${COLORS.secondary}15`,
    }}
  >
    {[
      { top: 0, left: 0 },
      { top: 0, right: 0 },
      { bottom: 0, left: 0 },
      { bottom: 0, right: 0 },
    ].map((pos, i) => (
      <Box
        key={i}
        aria-hidden
        sx={{
          position: "absolute",
          ...pos,
          width: "20px",
          height: "20px",
          zIndex: 2,
          borderTop: i < 2 ? `1.5px solid ${COLORS.accent}80` : "none",
          borderBottom: i >= 2 ? `1.5px solid ${COLORS.accent}80` : "none",
          borderLeft: i % 2 === 0 ? `1.5px solid ${COLORS.accent}80` : "none",
          borderRight: i % 2 !== 0 ? `1.5px solid ${COLORS.accent}80` : "none",
        }}
      />
    ))}

    <Box
      sx={{
        position: "absolute",
        bottom: "20px",
        right: "20px",
        zIndex: 2,
        px: "12px",
        py: "6px",
        backgroundColor: `${COLORS.secondary}DD`,
        backdropFilter: "blur(8px)",
        border: `1px solid ${COLORS.accent}40`,
        borderRadius: "2px",
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "9px",
          letterSpacing: "0.25em",
          color: COLORS.accent,
          textTransform: "uppercase",
        }}
      >
        Step {step}
      </Typography>
    </Box>

    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        display: "block",
        transition: "transform 0.6s ease",
        "&:hover": { transform: "scale(1.03)" },
      }}
    />

    <Box
      aria-hidden
      sx={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${COLORS.secondary}20 0%, transparent 60%)`,
        pointerEvents: "none",
      }}
    />
  </Box>
);

export default ImagePanel;
