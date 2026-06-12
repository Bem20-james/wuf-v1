import { useState } from "react";
import { Box, Container, Typography, TextField, Button } from "@mui/material";
import { MailOutlineRounded } from "@mui/icons-material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // hook up API / mailing list here
    console.log("Subscribe:", email);
  };

  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: "#F0F4FB" }}>
      <Container maxWidth="md">
        <Box
          sx={{
            bgcolor: "#E8EEF8",
            borderRadius: 4,
            px: { xs: 3, md: 8 },
            py: { xs: 5, md: 6 },
            textAlign: "center",
            border: "1px solid #DDE5F4",
          }}
        >
          <Box
            sx={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              bgcolor: "#D0DEFA",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mx: "auto",
              mb: 3,
            }}
          >
            <MailOutlineRounded
              sx={{ color: COLORS.primary, fontSize: "1.5rem" }}
            />
          </Box>

          <Typography
            component="h2"
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 800,
              fontSize: { xs: "1.4rem", md: "1.7rem" },
              color: "#0D1B2A",
              mb: 1.25,
            }}
          >
            Get monthly impact reports
          </Typography>

          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "0.875rem", md: "0.925rem" },
              color: "#6B7280",
              lineHeight: 1.75,
              mb: 3.5,
              maxWidth: 460,
              mx: "auto",
            }}
          >
            Join 5,000+ supporters receiving updates on our progress and new
            stories of hope directly in their inbox.
          </Typography>

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              maxWidth: 480,
              mx: "auto",
              mb: 1.75,
              bgcolor: "#fff",
              borderRadius: 99,
              border: "1px solid #DDE5F4",
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(30,80,180,0.07)",
              pr: "5px",
            }}
          >
            <TextField
              fullWidth
              placeholder="Your email address"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
              variant="standard"
              sx={{
                px: 2.5,
                py: 0,
                "& .MuiInput-root": {
                  fontFamily: FontFamily.primary,
                  fontSize: "0.875rem",
                  color: "#0D1B2A",
                  "&:before, &:after": { display: "none" },
                },
                "& .MuiInputBase-input::placeholder": {
                  color: "#B0B8C5",
                  opacity: 1,
                },
              }}
              slotProps={{ input: { disableUnderline: true } }}
            />
            <Button
              variant="contained"
              disableElevation
              onClick={handleSubscribe}
              sx={{
                bgcolor: COLORS.primary,
                color: "#fff",
                fontFamily: FontFamily.primary,
                fontWeight: 700,
                fontSize: "0.85rem",
                px: 3,
                py: 1.15,
                borderRadius: 99,
                textTransform: "none",
                flexShrink: 0,
                "&:hover": { bgcolor: "#1558C0" },
              }}
            >
              Subscribe
            </Button>
          </Box>

          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.75rem",
              color: "#9BA8BE",
            }}
          >
            We respect your privacy. Unsubscribe at any time.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsletterSection;
