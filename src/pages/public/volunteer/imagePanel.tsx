import { Box, Typography } from "@mui/material";
import { STATS } from "./data";
import { COLORS } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";

const ImagePanel = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        minHeight: "100vh",
        bgcolor: "#1C1917",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gridTemplateRows: "repeat(3, 1fr)",
          gap: "3px",
          opacity: 0.75,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: -330,
            height: "100%",
            width: { xs: "100%", md: "100%" },
            backgroundImage: "url('/home/hero-bg-img.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "100%",
            backgroundPosition: "center",
            opacity: 0.9,
            zIndex: 0,
            "@keyframes panSlowA": {
              from: { transform: "scale(1.08)" },
              to: { transform: "scale(1)" },
            },
            "@keyframes panSlowB": {
              from: { transform: "scale(1)" },
              to: { transform: "scale(1.08)" },
            },
          }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(28,25,23,0.55) 0%, rgba(28,25,23,0.2) 40%, rgba(28,25,23,0.85) 100%)",
        }}
      />
      {/* Amber side glow */}
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "45%",
          background:
            "linear-gradient(0deg, rgba(194,65,12,0.35) 0%, transparent 100%)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: { xs: 4, lg: 5 },
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Box
            sx={{
              width: 40,
              height: 3,
              bgcolor: "#C2410C",
              borderRadius: 2,
              mt: 2,
              mb: 3,
              animation: "growWidth 1s ease forwards 0.5s",
              transformOrigin: "left",
              "@keyframes growWidth": { from: { width: 0 }, to: { width: 40 } },
            }}
          />
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: "4rem", sm: "4rem", md: "6rem" },
              fontWeight: 700,
              color: COLORS.white,
              letterSpacing: "-0.03em",
              maxWidth: "1100px",
              fontFamily: FontFamily.primary,
              lineHeight: 1,
              mb: 1.5,
              animation: "fadeUp 0.8s ease forwards 0.3s",
              opacity: 0,
              "@keyframes fadeUp": {
                from: { opacity: 0, transform: "translateY(20px)" },
                to: { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Give your time.
            <br />
            <Box component="span" sx={{ color: "#FB923C" }}>
              Change a life.
            </Box>
          </Typography>
          <Typography
            sx={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "1rem",
              lineHeight: 1.7,
              maxWidth: 420,
              animation: "fadeUp 0.8s ease forwards 0.5s",
              opacity: 0,
            }}
          >
            Become part of a movement transforming communities across Nigeria —
            one act of service at a time.
          </Typography>
        </Box>

        {/* Middle: Stats */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            my: 4,
            animation: "fadeUp 0.8s ease forwards 0.7s",
            opacity: 0,
          }}
        >
          {STATS.map((s, i) => (
            <Box
              key={i}
              sx={{
                flex: 1,
                textAlign: "center",
                bgcolor: "rgba(255,255,255,0.08)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 3,
                p: 1.5,
              }}
            >
              <Box sx={{ color: "#FB923C", mb: 0.5 }}>{s.icon}</Box>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: 800,
                  fontSize: "1.1rem",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </Typography>
              <Typography
                sx={{
                  color: "rgba(255,255,255,0.6)",
                  fontSize: "0.68rem",
                  mt: 0.3,
                }}
              >
                {s.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ImagePanel;
