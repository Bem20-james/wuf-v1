import {
  Box,
  Typography,
  Stack,
  Modal,
  IconButton,
  Divider,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
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

export default StoryModal;
