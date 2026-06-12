import {
  Box,
  Typography,
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { type InvolvementCard } from "./data";

const DetailDialog = ({
  open,
  onClose,
  card,
}: {
  open: boolean;
  onClose: () => void;
  card: InvolvementCard | null;
}) => {
  if (!card) return null;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      fullWidth
      slotProps={{
        paper: {
          sx: { borderRadius: 3, p: 0, overflow: "hidden" },
        },
      }}
    >
      {/* Image header */}
      <Box sx={{ position: "relative", height: 200, overflow: "hidden" }}>
        <Box
          component="img"
          src={card.image}
          alt={card.title}
          sx={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.55))",
          }}
        />
        <IconButton
          onClick={onClose}
          size="small"
          sx={{
            position: "absolute",
            top: 12,
            right: 12,
            bgcolor: "rgba(255,255,255,0.9)",
            "&:hover": { bgcolor: "#fff" },
          }}
        >
          <Close fontSize="small" />
        </IconButton>
      </Box>

      <DialogTitle
        sx={{
          fontFamily: "'Georgia', serif",
          fontWeight: 800,
          fontSize: "1.4rem",
          color: "#0D1B2A",
          pb: 0,
          pt: 3,
          px: 3.5,
        }}
      >
        {card.dialog.title}
      </DialogTitle>

      <DialogContent sx={{ px: 3.5, pt: 2, pb: 4 }}>
        {card.dialog.body.map((para, i) => (
          <Typography
            key={i}
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.9rem",
              color: "#4A5568",
              lineHeight: 1.75,
              mb: 1.5,
            }}
          >
            {para}
          </Typography>
        ))}

        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontWeight: 700,
            fontSize: "0.78rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "#0D1B2A",
            mt: 3,
            mb: 1.5,
          }}
        >
          How it works
        </Typography>

        <Box component="ol" sx={{ pl: 2.5, m: 0 }}>
          {card.dialog.steps.map((step, i) => (
            <Box
              component="li"
              key={i}
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: "0.875rem",
                color: "#4A5568",
                lineHeight: 1.7,
                mb: 0.75,
              }}
            >
              {step}
            </Box>
          ))}
        </Box>

        <Button
          variant="contained"
          fullWidth
          disableElevation
          sx={{
            mt: 3.5,
            bgcolor: COLORS.primary,
            color: "#fff",
            fontFamily: FontFamily.primary,
            fontWeight: 700,
            fontSize: "0.9rem",
            py: 1.4,
            borderRadius: 99,
            textTransform: "none",
            "&:hover": { bgcolor: "#1558C0" },
          }}
        >
          {card.ctaLabel}
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default DetailDialog;
