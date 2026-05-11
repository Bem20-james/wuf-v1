import { Box, Typography, Stack } from "@mui/material";

const SlashOverlay = () => (
  <Box
    sx={{
      position: "absolute",
      top: 0,
      right: 0,
      bottom: 0,
      width: "55%",
      pointerEvents: "none",
    }}
  >
    <Box
      sx={{
        position: "absolute",
        top: "-20%",
        right: "-10%",
        width: "100%",
        height: "140%",
        background: "rgba(255,255,255,0.07)",
        transform: "skewX(-14deg)",
        borderRadius: "8px",
      }}
    />
    <Box
      sx={{
        position: "absolute",
        top: "-20%",
        right: "18%",
        width: "60%",
        height: "140%",
        background: "rgba(255,255,255,0.04)",
        transform: "skewX(-14deg)",
        borderRadius: "8px",
      }}
    />
  </Box>
);

const ArrowIcon = () => (
  <Box
    className="arrow-btn"
    sx={{
      width: 36,
      height: 36,
      borderRadius: "50%",
      border: "1.5px solid rgba(255,255,255,0.4)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      transition: "all 0.3s ease",
      ".card:hover &": {
        transform: "rotate(-45deg) scale(1.08)",
        background: "rgba(255,255,255,0.15)",
        borderRadius: "10px",
      },
    }}
  >
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  </Box>
);

interface CardProps {
  title: string;
  description: string;
  bg?: string;
  cta?: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
}

const AwarenessCard = ({
  title,
  description,
  bg = "#1E88E5",
  cta,
  onCtaClick,
  children,
}: CardProps) => (
  <Box
    className="card"
    sx={{
      borderRadius: "20px",
      padding: "32px 28px",
      background: bg,
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      minHeight: 220,
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      transition: "transform 0.3s ease",
      "&:hover": { transform: "translateY(-4px)" },
      "&:hover .card-title": { transform: "scale(1.04)" },
    }}
  >
    <SlashOverlay />
    <Stack
      direction="row"
      sx={{
        position: "relative",
        zIndex: 2,
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <Box>
        <Typography
          className="card-title"
          sx={{
            color: "#fff",
            fontSize: "22px",
            fontWeight: 600,
            lineHeight: 1.2,
            maxWidth: 500,
            transformOrigin: "left top",
            transition: "transform 0.3s ease",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "13px",
            lineHeight: 1.6,
            mt: 1,
            maxWidth: 300,
          }}
        >
          {description}
        </Typography>
      </Box>
      <ArrowIcon />
    </Stack>

    <Box sx={{ position: "relative", zIndex: 2 }}>
      {children}
      {cta && (
        <Box
          component="button"
          onClick={onCtaClick}
          sx={{
            mt: 3,
            px: "20px",
            py: "9px",
            background: "rgba(255,255,255,0.15)",
            border: "1.5px solid rgba(255,255,255,0.4)",
            borderRadius: "999px",
            color: "#fff",
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.03em",
            cursor: "pointer",
            transition: "all 0.25s ease",
            "&:hover": {
              background: "rgba(255,255,255,0.28)",
              borderColor: "rgba(255,255,255,0.7)",
            },
          }}
        >
          {cta}
        </Box>
      )}
    </Box>
  </Box>
);

export default AwarenessCard;
