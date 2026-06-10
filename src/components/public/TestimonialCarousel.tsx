import { useState, useEffect, useCallback, useRef } from "react";
import { Box, Typography, IconButton, Avatar } from "@mui/material";
import { ArrowBack, ArrowForward, FormatQuote } from "@mui/icons-material";
import { testimonials } from "./data";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";

const AUTO_SLIDE_INTERVAL = 10000;

function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDir, setSlideDir] = useState<"left" | "right">("left");
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const go = useCallback(
    (dir: "next" | "prev") => {
      if (animating) return;
      setAnimating(true);
      setSlideDir(dir === "next" ? "left" : "right");
      setTimeout(() => {
        setCurrent((prev) =>
          dir === "next"
            ? (prev + 1) % testimonials.length
            : (prev - 1 + testimonials.length) % testimonials.length,
        );
        setAnimating(false);
      }, 350);
    },
    [animating],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => go("next"), AUTO_SLIDE_INTERVAL);
  }, [go]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleManual = (dir: "next" | "prev") => {
    go(dir);
    resetTimer();
  };

  const handleDot = (i: number) => {
    if (i === current || animating) return;
    setAnimating(true);
    setSlideDir(i > current ? "left" : "right");
    setTimeout(() => {
      setCurrent(i);
      setAnimating(false);
    }, 350);
    resetTimer();
  };

  const t = testimonials[current];

  return (
    <Box
      sx={{
        bgcolor: "#EEF2F8",
        marginTop: { xs: 8, md: 12 },
        px: { xs: 3, md: 6 },
        py: { xs: 4, md: 5 },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: COLORS.primary,
            mb: 1,
          }}
        >
          Voices of Impact
        </Typography>
        <Typography
          component="h2"
          sx={{
            fontFamily: FontFamily.primary,
            fontSize: { xs: "2rem", md: "2.4rem" },
            fontWeight: 700,
            color: COLORS.secondary,
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            mb: 5,
          }}
        >
          What people are saying
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          alignItems: "center",
          gap: { xs: 3, md: 5 },
          width: "100%",
          maxWidth: 900,
          opacity: animating ? 0 : 1,
          transform: animating
            ? `translateX(${slideDir === "left" ? "-24px" : "24px"})`
            : "translateX(0)",
          transition: "opacity 0.35s ease, transform 0.35s ease",
        }}
      >
        <Box sx={{ flexShrink: 0 }}>
          <Avatar
            src={t.avatar}
            alt={t.name}
            sx={{
              width: { xs: 130, md: 200 },
              height: { xs: 130, md: 200 },
              bgcolor: t.color,
              border: "6px solid #fff",
              boxShadow: "0 4px 20px rgba(0,0,0,0.10)",
              transition: "all 0.3s ease",
              "& img": {
                objectFit: "cover",
              },
            }}
          />
        </Box>

        <Box sx={{ flex: 1 }}>
          <FormatQuote
            sx={{
              fontSize: "3rem",
              color: "#A8BFDC",
              mb: 1.5,
            }}
          />

          <Typography
            sx={{
              fontSize: { xs: "1rem", md: "1.5rem" },
              fontWeight: 700,
              fontStyle: "italic",
              color: "#1E2E45",
              lineHeight: 1.7,
              mb: 2.5,
              fontFamily: "Georgia, serif",
            }}
          >
            "{t.quote}"
          </Typography>

          <Box sx={{ borderTop: "1px solid rgba(100,140,200,0.2)", mb: 1.5 }} />

          <Typography
            sx={{
              fontWeight: 700,
              fontSize: "0.9rem",
              color: "#3A78C9",
            }}
          >
            {t.name}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.8rem",
              color: "#888",
              fontFamily: FontFamily.primary,
              mt: "2px",
            }}
          >
            {t.role} · {t.location}
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1.5,
          mt: { xs: 3, md: 4 },
        }}
      >
        <IconButton
          onClick={() => handleManual("prev")}
          size="small"
          sx={{
            border: "1.5px solid #A8BFDC",
            color: "#3A78C9",
            width: 38,
            height: 38,
            "&:hover": {
              bgcolor: "rgba(58,120,201,0.08)",
              borderColor: "#3A78C9",
            },
          }}
        >
          <ArrowBack fontSize="small" />
        </IconButton>

        {/* Dot indicators */}
        <Box sx={{ display: "flex", gap: 0.75, alignItems: "center" }}>
          {testimonials.map((_, i) => (
            <Box
              key={i}
              onClick={() => handleDot(i)}
              sx={{
                width: i === current ? 20 : 7,
                height: 7,
                borderRadius: 99,
                bgcolor: i === current ? "#3A78C9" : "#A8BFDC",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Box>

        <IconButton
          onClick={() => handleManual("next")}
          size="small"
          sx={{
            border: "1.5px solid #A8BFDC",
            color: "#3A78C9",
            width: 38,
            height: 38,
            "&:hover": {
              bgcolor: "rgba(58,120,201,0.08)",
              borderColor: "#3A78C9",
            },
          }}
        >
          <ArrowForward fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default TestimonialCarousel;
