import { Box, Typography } from "@mui/material";

const TagPill: React.FC<{
  label: string;
  accentColor: string;
}> = ({ label, accentColor }) => (
  <Box
    sx={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      px: "14px",
      py: "6px",
      border: `1px solid ${accentColor}33`,
      borderRadius: "2px",
      mb: 4,
    }}
  >
    <Box
      sx={{
        width: "6px",
        height: "6px",
        borderRadius: "50%",
        backgroundColor: accentColor,
        flexShrink: 0,
      }}
    />
    <Typography
      sx={{
        fontFamily: "'Space Mono', 'Courier New', monospace",
        fontSize: "9px",
        letterSpacing: "0.3em",
        textTransform: "uppercase",
        color: accentColor,
        lineHeight: 1,
      }}
    >
      {label}
    </Typography>
  </Box>
);

export default TagPill;
