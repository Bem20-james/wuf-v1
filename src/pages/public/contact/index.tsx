import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { useState } from "react";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import {
  CustomInput,
  CustomChip,
  AwareSection,
} from "../../../components/public";
import ContactItem from "./ContactItem";

const ContactPage = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if (!form.name || !form.email || !form.message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1400);
  };

  if (submitted) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: COLORS.white,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
          px: 3,
        }}
      >
        <Box
          sx={{
            width: 72,
            height: 72,
            borderRadius: "50%",
            border: "2px solid #1E88E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 4,
            animation: "popIn 0.4s cubic-bezier(0.34,1.56,0.64,1)",
            "@keyframes popIn": {
              from: { transform: "scale(0)", opacity: 0 },
              to: { transform: "scale(1)", opacity: 1 },
            },
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path
              d="M5 13l4 4L19 7"
              stroke="#1E88E5"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Box>
        <Typography
          sx={{
            fontSize: { xs: "28px", md: "38px" },
            fontWeight: 700,
            color: COLORS.secondary,
            fontFamily: FontFamily.primary,
            letterSpacing: "-0.02em",
            mb: 1.5,
          }}
        >
          Message received.
        </Typography>
        <Typography
          sx={{
            color: "#6B7280",
            fontSize: "15px",
            lineHeight: 1.75,
            maxWidth: "380px",
          }}
        >
          We'll get back to you within 24 hours. Keep an eye on{" "}
          <Box component="span" sx={{ color: "#1E88E5" }}>
            {form.email}
          </Box>
        </Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(30, 136, 229, 0.47) 0%, transparent 65%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(30, 136, 229, 0.4) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid
          container
          spacing={{ xs: 8, md: 12 }}
          sx={{ alignItems: "flex-start" }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <CustomChip label="Get in touch" />

            <Typography
              component="h1"
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: { xs: "40px", md: "54px", lg: "62px" },
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: COLORS.dark,
                mb: 3,
                mt: 5,
              }}
            >
              Let's talk
              <br />
              <Box component="span" sx={{ color: COLORS.primary }}>
                about growth.
              </Box>
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: COLORS.black,
                maxWidth: "500px",
                mb: 6,
              }}
            >
              Whether you're a brand looking for verified creators, a creator
              ready to scale, or an agency exploring partnerships — we want to
              hear from you.
            </Typography>
            <ContactItem />
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                border: "1px solid #F3F4F6",
                borderRadius: "20px",
                p: { xs: 4, md: 5 },
                bgcolor: "#FAFAFA",
              }}
            >
              <Stack spacing={4}>
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <CustomInput
                      label="Full name"
                      placeholder="John Doe"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <CustomInput
                      label="Email address"
                      type="email"
                      placeholder="johndoe@gmail.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                    />
                  </Grid>
                </Grid>

                <CustomInput
                  label="Company (optional)"
                  placeholder="Acme Corp"
                  value={form.company}
                  onChange={(v) => setForm({ ...form, company: v })}
                />

                <CustomInput
                  label="Your message"
                  placeholder="Enter your message here..."
                  multiline
                  value={form.message}
                  onChange={(v) => setForm({ ...form, message: v })}
                />

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    gap: 2,
                    pt: 1,
                  }}
                >
                  <Typography
                    sx={{ fontSize: "12px", color: "#9CA3AF", maxWidth: 220 }}
                  >
                    We never share your data. Read our
                    <Box
                      component="span"
                      sx={{
                        color: "#1E88E5",
                        cursor: "pointer",
                        textDecoration: "underline",
                        textDecorationColor: "rgba(30,136,229,0.3)",
                      }}
                    >
                      privacy policy.
                    </Box>
                  </Typography>

                  <Box
                    onClick={handleSubmit}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 4,
                      py: 1.6,
                      borderRadius: "50px",
                      bgcolor: loading ? "#9CA3AF" : COLORS.secondary,
                      color: "#fff",
                      fontSize: "13px",
                      fontWeight: 600,
                      cursor: loading ? "not-allowed" : "pointer",
                      letterSpacing: "0.02em",
                      transition: "all 0.2s ease",
                      "&:hover": {
                        bgcolor: loading ? "#9CA3AF" : "#1E88E5",
                        transform: loading ? "none" : "translateY(-1px)",
                      },
                      "&:active": { transform: "translateY(0)" },
                    }}
                  >
                    {loading ? (
                      <>
                        <Box
                          component="span"
                          sx={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            border: "2px solid rgba(255,255,255,0.3)",
                            borderTopColor: "#fff",
                            display: "inline-block",
                            animation: "spin 0.7s linear infinite",
                            "@keyframes spin": {
                              to: { transform: "rotate(360deg)" },
                            },
                          }}
                        />
                        Sending…
                      </>
                    ) : (
                      <>
                        Send message
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M5 12h14M12 5l7 7-7 7"
                            stroke="white"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </Box>
                </Box>
              </Stack>
            </Box>
          </Grid>
        </Grid>

        <AwareSection />
      </Container>
    </Box>
  );
};

export default ContactPage;
