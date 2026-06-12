import { Box, Container, Grid, Typography } from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { cards } from "./data";

const StatsCard = () => {
  return (
    <Box sx={{ py: { xs: 5, md: 7 }, bgcolor: "#F8F9FC" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Grid size={{ xs: 12, md: 6 }} key={card.label}>
                <Box
                  sx={{
                    position: "relative",
                    bgcolor: "#ffffff",
                    borderRadius: 3,
                    border: "1px solid #EDF0F7",
                    px: { xs: 3, md: 4 },
                    py: { xs: 3.5, md: 4 },
                    overflow: "hidden",
                    boxShadow: "0 2px 16px rgba(0,0,0,0.04)",
                    transition: "box-shadow 0.22s ease, transform 0.22s ease",
                    "&:hover": {
                      boxShadow: "0 8px 32px rgba(30,136,229,0.10)",
                      transform: "translateY(-2px)",
                    },
                  }}
                >
                  {/* Ghost icon — large background watermark */}
                  <Box
                    sx={{
                      position: "absolute",
                      right: -16,
                      bottom: -16,
                      opacity: 0.045,
                      pointerEvents: "none",
                      lineHeight: 0,
                    }}
                  >
                    <Icon size={160} color={COLORS.primary} />
                  </Box>

                  {/* Small coloured icon top-left */}
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: "#EEF5FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2.5,
                    }}
                  >
                    <Icon size={20} color={COLORS.primary} />
                  </Box>

                  {/* Label */}
                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: "0.68rem",
                      fontWeight: 700,
                      letterSpacing: "0.13em",
                      textTransform: "uppercase",
                      color: "#9BA8BE",
                      mb: 0.75,
                    }}
                  >
                    {card.label}
                  </Typography>

                  {/* Value */}
                  <Typography
                    sx={{
                      fontFamily: "'Georgia', serif",
                      fontWeight: 900,
                      fontSize: { xs: "2.4rem", md: "2.8rem" },
                      color: "#0D1B2A",
                      lineHeight: 1,
                      mb: 1.5,
                    }}
                  >
                    {card.value}
                  </Typography>

                  {/* Divider */}
                  <Box
                    sx={{
                      width: 36,
                      height: 3,
                      borderRadius: 99,
                      bgcolor: COLORS.primary,
                      mb: 1.75,
                      opacity: 0.7,
                    }}
                  />

                  {/* Subtext */}
                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      maxWidth: 340,
                    }}
                  >
                    {card.subtext}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsCard;
