import { Container, Box, Typography, Button, Stack, Chip } from "@mui/material";
import { ArrowForward, MenuBook } from "@mui/icons-material";
import { Pallete } from "../../config/colors";

const stats = [
  { value: "1,000+", label: "Children Reached" },
  { value: "94%", label: "Back in School" },
  { value: "38", label: "Communities" },
];

export default function ImpactHeroBanner() {
  return (
    <Container>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          minHeight: { xs: 420, md: 380 },
          borderRadius: 3,
          overflow: "hidden",
          background: Pallete.dark,
          display: "flex",
          alignItems: "center",
          marginTop: { xs: 10, md: 20 },
        }}
      >
        <Box
          component="img"
          src="/impact/banner1.png"
          alt=""
          sx={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to right, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 60%, rgba(0,0,0,0.25) 100%)",
            pointerEvents: "none",
          }}
        />

        <Box
          sx={{
            position: "relative",
            zIndex: 2,
            px: { xs: 3, md: 6 },
            py: { xs: 4, md: 5 },
            maxWidth: { xs: "100%", md: "62%" },
          }}
        >
          <Chip
            label="2024 Impact Report"
            size="small"
            sx={{
              mb: 2.5,
              bgcolor: "rgba(255,255,255,0.12)",
              color: Pallete.light,
              fontWeight: 600,
              fontSize: "0.7rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              border: `1px solid ${Pallete.light}40`,
              backdropFilter: "blur(4px)",
            }}
          />

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.1,
              fontSize: { xs: "2rem", md: "2.6rem" },
              mb: 1.5,
              fontFamily: "'Georgia', serif",
              textShadow: "0 2px 12px rgba(0,0,0,0.3)",
            }}
          >
            1,000 Children.
            <br />
            One Future.
            <br />
            <Box component="span" sx={{ color: Pallete.light }}>
              Changed Forever.
            </Box>
          </Typography>

          <Typography
            sx={{
              color: "rgba(214,228,255,0.85)",
              fontSize: { xs: "0.88rem", md: "0.95rem" },
              lineHeight: 1.65,
              mb: 3,
              maxWidth: 380,
            }}
          >
            Over the past year, we reunited families and brought children back
            into classrooms across 38 communities. Here's what we achieved
            together.
          </Typography>

          <Stack
            direction="row"
            spacing={1.5}
            sx={{ flexWrap: "wrap" }}
            useFlexGap
          >
            {/* PRIMARY BUTTON */}
            <Button
              variant="contained"
              endIcon={<MenuBook fontSize="small" />}
              sx={{
                bgcolor: Pallete.main,
                color: "#fff",
                fontWeight: 700,
                fontSize: "0.82rem",
                px: 2.5,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                boxShadow: "0 4px 16px rgba(11,80,218,0.45)",
                "&:hover": {
                  bgcolor: Pallete.dark,
                  boxShadow: "0 6px 20px rgba(11,80,218,0.6)",
                },
              }}
            >
              Read Full Report
            </Button>

            {/* OUTLINED BUTTON */}
            <Button
              variant="outlined"
              endIcon={<ArrowForward fontSize="small" />}
              sx={{
                color: Pallete.light,
                borderColor: `${Pallete.light}80`,
                fontWeight: 600,
                fontSize: "0.82rem",
                px: 2.5,
                py: 1,
                borderRadius: 2,
                textTransform: "none",
                backdropFilter: "blur(4px)",
                "&:hover": {
                  borderColor: Pallete.light,
                  bgcolor: `${Pallete.main}20`,
                },
              }}
            >
              Our Story
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={3}
            sx={{
              mt: 4,
              pt: 3,
              borderTop: "1px solid rgba(255,255,255,0.15)",
            }}
          >
            {stats.map((s) => (
              <Box key={s.label}>
                <Typography
                  sx={{
                    color: Pallete.light,
                    fontWeight: 800,
                    fontSize: { xs: "1.25rem", md: "1.5rem" },
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </Typography>
                <Typography
                  sx={{
                    color: "rgba(214,228,255,0.7)",
                    fontSize: "0.72rem",
                    mt: 0.3,
                    lineHeight: 1.3,
                  }}
                >
                  {s.label}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>
    </Container>
  );
}
