import { Box, Container, Typography, Button, Stack, Grid } from "@mui/material";
import { SchoolRounded } from "@mui/icons-material";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

const TransparencySection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "transparent",
        py: { xs: 6, md: 0 },
        overflow: "hidden",
        marginTop: { xs: 5, md: 10 },
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={0}
          sx={{ minHeight: { md: 420 }, alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ py: { md: 8 }, pr: { md: 6 } }}>
              <Typography
                component="h2"
                sx={{
                  fontFamily: "'Georgia', serif",
                  fontWeight: 900,
                  fontSize: { xs: "2.2rem", md: "2.9rem" },
                  lineHeight: 1.08,
                  color: "#0D1B2A",
                  mb: 0,
                }}
              >
                Radical Honesty.
              </Typography>
              <Typography
                component="h2"
                sx={{
                  fontFamily: FontFamily.primary,
                  fontWeight: 900,
                  fontSize: { xs: "2.2rem", md: "2.9rem" },
                  lineHeight: 1.08,
                  color: COLORS.primary,
                  mb: 2.5,
                }}
              >
                Measurable Change.
              </Typography>

              <Typography
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: { xs: "0.93rem", md: "1rem" },
                  color: "#4A5568",
                  lineHeight: 1.75,
                  mb: 4,
                }}
              >
                We believe every donor deserves full transparency — to see
                clearly how their contributions help children return to school
                and how we empower communities, families, and young people.
                That&apos;s why 90% of every naira goes directly into our
                programs and initiatives, driving real and lasting impact where
                it matters most.
              </Typography>

              <Stack
                direction="row"
                spacing={1.5}
                sx={{ flexWrap: "wrap" }}
                useFlexGap
              >
                <Button
                  variant="contained"
                  disableElevation
                  sx={{
                    bgcolor: COLORS.primary,
                    color: "#fff",
                    fontFamily: FontFamily.primary,
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    px: 3,
                    py: 1.25,
                    borderRadius: 99,
                    textTransform: "none",
                    "&:hover": { bgcolor: "#1558C0" },
                  }}
                >
                  View 2024 Report
                </Button>
                <Button
                  variant="outlined"
                  disableElevation
                  sx={{
                    borderColor: "#C8D4E8",
                    color: "#0D1B2A",
                    fontFamily: FontFamily.primary,
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    px: 3,
                    py: 1.25,
                    borderRadius: 99,
                    textTransform: "none",
                    bgcolor: "#fff",
                    "&:hover": {
                      borderColor: COLORS.primary,
                      bgcolor: "#F0F4FF",
                    },
                  }}
                >
                  See Audited Financials
                </Button>
              </Stack>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: "relative",
                display: "flex",
                justifyContent: { xs: "center", md: "flex-end" },
                alignItems: "center",
                py: { xs: 4, md: 5 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { xs: "100%", md: "100%" },
                  borderRadius: 4,
                  overflow: "hidden",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.10)",
                  bgcolor: "#D9E4F5",
                }}
              >
                <Box
                  component="img"
                  src="/impact/banner3.png"
                  alt="Children in classroom"
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center top",
                    display: "block",
                  }}
                />
              </Box>

              {/* Floating stat card */}
              <Box
                sx={{
                  position: "absolute",
                  bottom: { xs: 12, md: 24 },
                  left: { xs: 12, md: -16 },
                  bgcolor: "#fff",
                  borderRadius: 3,
                  px: 2.5,
                  py: 2,
                  boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  minWidth: 220,
                  zIndex: 2,
                }}
              >
                <Box sx={{ flex: 1 }}>
                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: "0.65rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: COLORS.primary,
                      mb: 0.4,
                    }}
                  >
                    Last Month's Impact
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontWeight: 800,
                      fontSize: "1.25rem",
                      color: "#0D1B2A",
                      lineHeight: 1.1,
                    }}
                  >
                    450 New Students
                  </Typography>
                </Box>
                <Box
                  sx={{
                    width: 40,
                    height: 40,
                    borderRadius: 2,
                    bgcolor: "#EEF3FF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <SchoolRounded
                    sx={{ color: COLORS.primary, fontSize: "1.3rem" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TransparencySection;
