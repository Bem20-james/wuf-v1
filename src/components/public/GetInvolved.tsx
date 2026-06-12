import { useState } from "react";
import { Box, Container, Grid, Typography, Button, Chip } from "@mui/material";
import { FontFamily } from "../../config/fonts";
import { COLORS } from "../../config/colors";
import { cards, type InvolvementCard } from "./data";
import DetailDialog from "./DetailsDialog";
import CustomButton from "./CustomButton";

const GetInvolved = () => {
  const [dialogCard, setDialogCard] = useState<InvolvementCard | null>(null);

  return (
    <Box sx={{ py: { xs: 6, md: 8 }, bgcolor: "#F8F9FC" }}>
      <Container maxWidth="lg">
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <Typography
            component="h2"
            sx={{
              fontFamily: "'Georgia', serif",
              fontWeight: 800,
              fontSize: { xs: "1.6rem", md: "2rem" },
              color: "#0D1B2A",
              mb: 0.75,
            }}
          >
            Ways to Get Involved
          </Typography>
          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.95rem",
              color: "#6B7280",
            }}
          >
            Choose the path that best fits your ability to help.
          </Typography>
        </Box>

        <Grid container spacing={3} sx={{ alignItems: "stretch" }}>
          {cards.map((card) => (
            <Grid size={{ xs: 12, md: 4 }} key={card.title}>
              <Box
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  bgcolor: "#fff",
                  borderRadius: 3,
                  border: card.highlighted
                    ? `1.5px solid ${COLORS.primary}`
                    : "1px solid #EDF0F7",
                  overflow: "hidden",
                  boxShadow: card.highlighted
                    ? `0 8px 32px rgba(30,136,229,0.14)`
                    : "0 2px 12px rgba(0,0,0,0.04)",
                  transition: "box-shadow 0.25s ease, transform 0.25s ease",
                  "&:hover": {
                    boxShadow: "0 12px 40px rgba(30,136,229,0.15)",
                    transform: "translateY(-3px)",
                  },
                  // scale image on card hover
                  "&:hover .card-img": {
                    transform: "scale(1.06)",
                  },
                }}
              >
                <Box
                  sx={{
                    height: 200,
                    overflow: "hidden",
                    flexShrink: 0,
                    bgcolor: "#EEF3FF",
                  }}
                >
                  <Box
                    component="img"
                    className="card-img"
                    src={card.image}
                    alt={card.title}
                    sx={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "center top",
                      display: "block",
                      transition: "transform 0.45s ease",
                    }}
                  />
                </Box>

                <Box
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    px: { xs: 2.5, md: 3 },
                    pt: 2.5,
                    pb: 3,
                  }}
                >
                  {card.badge && (
                    <Chip
                      label={card.badge}
                      size="small"
                      sx={{
                        alignSelf: "flex-start",
                        mb: 1.25,
                        bgcolor: "#EEF5FF",
                        color: COLORS.primary,
                        fontFamily: FontFamily.primary,
                        fontWeight: 700,
                        fontSize: "0.65rem",
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        height: 22,
                        border: `1px solid ${COLORS.primary}22`,
                      }}
                    />
                  )}

                  <Typography
                    sx={{
                      fontFamily: "'Georgia', serif",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      color: "#0D1B2A",
                      mb: 1,
                    }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: FontFamily.primary,
                      fontSize: "0.875rem",
                      color: "#6B7280",
                      lineHeight: 1.7,
                      flex: 1,
                      mb: 3,
                    }}
                  >
                    {card.description}
                  </Typography>
                  <CustomButton
                    to={"/auth/onboarding"}
                    variant={card.highlighted ? "filled" : "outlined"}
                    btncolor="primary"
                    radius="90px"
                    fullWidth
                    onClick={() => {}}
                    sx={{
                      width: "100%",
                      fontFamily: FontFamily.primary,
                      fontWeight: 700,
                      fontSize: "0.85rem",
                    }}
                  >
                    {card.ctaLabel}
                  </CustomButton>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Detail dialog */}
      <DetailDialog
        open={!!dialogCard}
        onClose={() => setDialogCard(null)}
        card={dialogCard}
      />
    </Box>
  );
};

export default GetInvolved;
