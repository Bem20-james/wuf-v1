import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";
import { ALL_STORIES, CATEGORIES, type Story } from "./data";
import StoryCard from "./StoryCard";
import StoryModal from "./StoryModal";

const StoriesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Updates");
  const [activeStory, setActiveStory] = useState<Story | null>(null);

  const filtered =
    activeCategory === "All Updates"
      ? ALL_STORIES
      : ALL_STORIES.filter((s) => s.category === activeCategory);

  return (
    <Box sx={{ backgroundColor: "#F7F9FC", py: { xs: 6, md: 10 } }}>
      <Container maxWidth="lg">
        {/* Section header */}
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
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
            Real People. Real Change.
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "2rem", md: "2.6rem" },
              fontWeight: 700,
              color: COLORS.secondary,
              letterSpacing: "-0.04em",
              lineHeight: 1.1,
            }}
          >
            Stories of Change
          </Typography>
        </Box>

        {/* Category tabs */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 1,
            flexWrap: "wrap",
            mb: { xs: 4, md: 5 },
            pb: 3,
            borderBottom: "1px solid #E0E4EA",
          }}
        >
          {CATEGORIES.map((cat) => {
            const isActive = cat === activeCategory;
            return (
              <Box
                key={cat}
                onClick={() => setActiveCategory(cat)}
                sx={{
                  px: "16px",
                  py: "7px",
                  borderRadius: "20px",
                  fontSize: "0.82rem",
                  fontWeight: isActive ? 700 : 500,
                  fontFamily: FontFamily.primary,
                  cursor: "pointer",
                  transition: "all 0.18s ease",
                  backgroundColor: isActive ? COLORS.primary : "transparent",
                  color: isActive ? "#fff" : COLORS.secondary,
                  border: isActive
                    ? `1.5px solid ${COLORS.primary}`
                    : "1.5px solid transparent",
                  userSelect: "none",
                  "&:hover": {
                    backgroundColor: isActive ? COLORS.primary : "#E8EBF0",
                  },
                }}
              >
                {cat}
              </Box>
            );
          })}
        </Box>

        {/* 3-column grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "1fr 1fr",
              md: "1fr 1fr 1fr",
            },
            gap: { xs: 4, md: "36px 28px" },
          }}
        >
          {filtered.map((story) => (
            <StoryCard
              key={story.id}
              story={story}
              onClick={() => setActiveStory(story)}
            />
          ))}
        </Box>

        {/* Empty state */}
        {filtered.length === 0 && (
          <Box sx={{ textAlign: "center", py: 10 }}>
            <Typography
              sx={{
                color: "#aaa",
                fontFamily: FontFamily.primary,
                fontSize: "0.95rem",
              }}
            >
              No stories in this category yet.
            </Typography>
          </Box>
        )}
      </Container>

      {/* Story modal */}
      {activeStory && (
        <StoryModal story={activeStory} onClose={() => setActiveStory(null)} />
      )}
    </Box>
  );
};

export default StoriesSection;
