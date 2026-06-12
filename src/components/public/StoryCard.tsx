import { Box, Typography, Stack } from "@mui/material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { type Story } from "./data";

const categoryColor = (cat: string): string => {
  const map: Record<string, string> = {
    "Family Empowerment": "#1E88E5",
    "Educational Research": "#00897B",
    "Program Milestone": "#5E35B1",
    "Success Stories": "#E53935",
    "Child Welfare": "#FB8C00",
    "Pilot Updates": "#43A047",
    Education: "#1E88E5",
  };
  return map[cat] ?? COLORS.primary;
};

const StoryCard = ({
  story,
  onClick,
}: {
  story: Story;
  onClick: () => void;
}) => (
  <Box
    onClick={onClick}
    sx={{
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      "&:hover .card-img": { transform: "scale(1.04)" },
      "&:hover .card-title": { color: COLORS.primary },
    }}
  >
    {/* Image */}
    <Box
      sx={{
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        aspectRatio: "4/3",
        backgroundColor: "#E8EBF0",
        mb: "14px",
        flexShrink: 0,
      }}
    >
      <Box
        component="img"
        className="card-img"
        src={story.image}
        alt={story.title}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.45s ease",
        }}
        onError={(e) => {
          const el = e.target as HTMLImageElement;
          el.style.display = "none";
        }}
      />

      {/* Small chip — pill style, top-left */}
      <Box
        sx={{
          position: "absolute",
          top: 10,
          left: 10,
          zIndex: 2,
          backgroundColor: "rgba(255,255,255,0.92)",
          backdropFilter: "blur(4px)",
          px: "8px",
          py: "3px",
          borderRadius: "20px",
          fontSize: "0.6rem",
          fontWeight: 700,
          fontFamily: FontFamily.primary,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: categoryColor(story.category),
          border: `1px solid ${categoryColor(story.category)}33`,
          lineHeight: 1.4,
        }}
      >
        {story.category}
      </Box>
    </Box>

    {/* Meta row: category label + date */}
    <Stack
      direction="row"
      sx={{ mb: "6px", alignItems: "center", justifyContent: "space-between" }}
    >
      <Typography
        sx={{
          fontFamily: FontFamily.primary,
          fontSize: "0.68rem",
          fontWeight: 700,
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: categoryColor(story.category),
        }}
      >
        {story.category}
      </Typography>
      <Typography
        sx={{
          fontFamily: FontFamily.primary,
          fontSize: "0.72rem",
          color: "#aaa",
          fontWeight: 400,
        }}
      >
        {story.date}
      </Typography>
    </Stack>

    {/* Title */}
    <Typography
      className="card-title"
      sx={{
        fontFamily: FontFamily.primary,
        fontWeight: 700,
        fontSize: "1rem",
        color: COLORS.secondary,
        lineHeight: 1.35,
        letterSpacing: "-0.01em",
        mb: "8px",
        transition: "color 0.2s ease",
      }}
    >
      {story.title}
    </Typography>

    {/* Excerpt — 2-line clamp */}
    <Typography
      sx={{
        fontFamily: FontFamily.accent ?? FontFamily.primary,
        fontSize: "0.82rem",
        color: "#777",
        lineHeight: 1.65,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}
    >
      {story.excerpt}
    </Typography>
  </Box>
);

export default StoryCard;
