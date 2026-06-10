import {
  Box,
  Container,
  Typography,
  Stack,
  Modal,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { useState } from "react";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Story {
  id: number;
  title: string;
  excerpt: string;
  fullText: string;
  category: string;
  date: string;
  image: string;
  hasVideo: boolean;
}

// ─── Mock Data ────────────────────────────────────────────────────────────────

const ALL_STORIES: Story[] = [
  {
    id: 1,
    category: "Family Empowerment",
    date: "Oct 12, 2023",
    title: "Q3 Progress Report: 50 Families Empowered",
    excerpt:
      "Our latest quarterly results show a significant increase in vocational training enrolment across three states.",
    fullText:
      "This quarter marked a turning point for our Family Empowerment programme. Fifty families across Enugu, Anambra, and Delta states completed our six-week vocational training module, with 38 of them already generating income from their new skills. The programme covers tailoring, food processing, and basic bookkeeping — skills chosen directly by community members during our listening sessions earlier in the year. Our facilitators note that the shift in confidence among participants is as significant as the economic gains. We will continue to scale this programme into the North-West in Q4.",
    image: "/impact/story-report.jpg",
    hasVideo: false,
  },
  {
    id: 2,
    category: "Educational Research",
    date: "Oct 10, 2023",
    title: "Understanding Barriers to Rural Education",
    excerpt:
      "New research highlights transportation as the leading cause of school dropouts in rural communities.",
    fullText:
      "A recent study we commissioned in partnership with three Nigerian universities reveals that over 60% of school-age children who drop out in rural areas cite distance and lack of transport as the primary reason. This finding reshapes how we approach our Education pillar. Going forward, we are piloting a bicycle grant scheme in Kogi and Niger states, providing 200 bicycles to children living more than 5km from the nearest school. Early results from the pilot show a 34% improvement in attendance rates within the first month. We are sharing this research openly so that other NGOs and government partners can act on the data.",
    image: "/impact/story-research.jpg",
    hasVideo: true,
  },
  {
    id: 3,
    category: "Program Milestone",
    date: "Oct 05, 2023",
    title: "A New Community Center Opens",
    excerpt:
      "This facility will serve as a hub for after-school tutoring and parent literacy programs.",
    fullText:
      "We are proud to announce the opening of the Nnewi Community Learning Center — our seventh facility built in partnership with local government authorities. The center houses four classrooms, a small library stocked with over 800 books, and a dedicated parents' room for adult literacy sessions held every Wednesday and Friday evening. The construction employed 24 local artisans over a four-month period. At the opening ceremony, the State Commissioner for Education described the center as a model for community-led development. We invite volunteers and donors to visit and see the impact of your contributions firsthand.",
    image: "/impact/story-center.jpg",
    hasVideo: true,
  },
  {
    id: 4,
    category: "Success Stories",
    date: "Sep 28, 2023",
    title: "The Power of Mentorship",
    excerpt:
      "How local college students are giving back by tutoring primary school children in their communities.",
    fullText:
      "In partnership with four universities in Lagos and Ogun states, we launched the Peer Mentorship Initiative — a structured programme that pairs university students with primary school pupils in underserved neighbourhoods. Over 120 university volunteers have committed two hours every Saturday to tutoring, homework help, and character mentorship sessions. The results after just one semester are remarkable: 89% of enrolled pupils improved their scores in Mathematics and English. For the university students, the programme is equally transformative. Many describe it as the most meaningful part of their academic experience.",
    image: "/impact/story-mentorship.jpg",
    hasVideo: false,
  },
  {
    id: 5,
    category: "Child Welfare",
    date: "Sep 22, 2023",
    title: "Health & Nutrition in Schools",
    excerpt:
      "Exploring the link between regular school meals and improved concentration levels among pupils.",
    fullText:
      "Our school feeding programme, now active in 22 partner schools, has produced striking evidence of the link between nutrition and academic performance. Teachers consistently report that pupils who receive our daily meal — a balanced portion of rice, beans, and vegetables — show markedly higher concentration levels and lower rates of absenteeism. One headmistress in Ibadan described it plainly: 'A hungry child cannot learn.' This programme costs just ₦450 per child per day. We are calling on corporate partners to sponsor entire schools, enabling us to scale to 50 schools by the end of the year.",
    image: "/impact/story-nutrition.jpg",
    hasVideo: true,
  },
  {
    id: 6,
    category: "Pilot Updates",
    date: "Sep 15, 2023",
    title: "Teacher Training Workshop 2023",
    excerpt:
      "Equipping 200 teachers with trauma-informed teaching practices to better support at-risk children.",
    fullText:
      "Two hundred primary school teachers from across Kaduna and Plateau states attended our three-day residential workshop on trauma-informed pedagogy. Many of the children in our partner schools have experienced displacement, family breakdown, or early labour — and standard classroom approaches often fail them. This workshop equips teachers with practical tools: how to identify signs of distress, how to de-escalate situations sensitively, and how to create a classroom culture of psychological safety. Participant feedback has been overwhelmingly positive, with 94% of attendees rating the training as 'highly applicable' to their daily work. We plan to train an additional 500 teachers in 2024.",
    image: "/impact/story-training.jpg",
    hasVideo: false,
  },
];

const CATEGORIES = [
  "All Updates",
  "Success Stories",
  "Pilot Updates",
  "Education",
  "Child Welfare",
  "Family Empowerment",
  "Educational Research",
  "Program Milestone",
];

// ─── Category chip colors ─────────────────────────────────────────────────────

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

// ─── Story Card ───────────────────────────────────────────────────────────────

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

// ─── Story Modal ──────────────────────────────────────────────────────────────

const StoryModal = ({
  story,
  onClose,
}: {
  story: Story;
  onClose: () => void;
}) => (
  <Modal
    open
    onClose={onClose}
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      p: 2,
    }}
  >
    <Box
      sx={{
        backgroundColor: "#fff",
        borderRadius: "20px",
        maxWidth: "720px",
        width: "100%",
        maxHeight: "92vh",
        overflowY: "auto",
        outline: "none",
        boxShadow: "0 32px 80px rgba(0,0,0,0.22)",
      }}
    >
      {/* Hero image / video area */}
      <Box
        sx={{
          position: "relative",
          aspectRatio: "16/9",
          backgroundColor: "#1a1a2e",
          borderRadius: "20px 20px 0 0",
          overflow: "hidden",
        }}
      >
        <Box
          component="img"
          src={story.image}
          alt={story.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
          onError={(e) => {
            (e.target as HTMLImageElement).style.opacity = "0";
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.28)",
          }}
        />

        {/* Play button overlay if has video */}
        {story.hasVideo && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 64,
              height: 64,
              borderRadius: "50%",
              backgroundColor: "rgba(255,255,255,0.95)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              boxShadow: "0 6px 24px rgba(0,0,0,0.25)",
              transition: "transform 0.2s ease",
              "&:hover": { transform: "translate(-50%, -50%) scale(1.1)" },
            }}
          >
            <PlayArrowIcon sx={{ color: COLORS.primary, fontSize: "2rem" }} />
          </Box>
        )}

        {/* Close button */}
        <IconButton
          onClick={onClose}
          sx={{
            position: "absolute",
            top: 14,
            right: 14,
            backgroundColor: "rgba(0,0,0,0.45)",
            color: "#fff",
            width: 36,
            height: 36,
            "&:hover": { backgroundColor: "rgba(0,0,0,0.7)" },
          }}
        >
          <CloseIcon sx={{ fontSize: "1.1rem" }} />
        </IconButton>

        {/* Chip */}
        <Box
          sx={{
            position: "absolute",
            top: 14,
            left: 14,
            backgroundColor: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(4px)",
            px: "10px",
            py: "4px",
            borderRadius: "20px",
            fontSize: "0.62rem",
            fontWeight: 700,
            fontFamily: FontFamily.primary,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: categoryColor(story.category),
          }}
        >
          {story.category}
        </Box>
      </Box>

      {/* Body */}
      <Box sx={{ p: { xs: "24px", md: "36px" } }}>
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between", mb: 2 }}
        >
          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: categoryColor(story.category),
            }}
          >
            {story.category}
          </Typography>
          <Typography
            sx={{
              fontSize: "0.78rem",
              color: "#aaa",
              fontFamily: FontFamily.primary,
            }}
          >
            {story.date}
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontWeight: 800,
            fontSize: { xs: "1.4rem", md: "1.75rem" },
            color: COLORS.secondary,
            lineHeight: 1.2,
            letterSpacing: "-0.03em",
            mb: 3,
          }}
        >
          {story.title}
        </Typography>

        <Divider sx={{ mb: 3 }} />

        <Typography
          sx={{
            fontFamily: FontFamily.accent ?? FontFamily.primary,
            fontSize: "0.95rem",
            color: "#555",
            lineHeight: 1.85,
          }}
        >
          {story.fullText}
        </Typography>
      </Box>
    </Box>
  </Modal>
);

// ─── Main Component ───────────────────────────────────────────────────────────

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
