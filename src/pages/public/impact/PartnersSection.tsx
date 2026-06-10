import { Box, Container, Typography, Stack } from "@mui/material";
import { COLORS } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";
import { type Partner, partners } from "./data";

const PartnerCard = ({ partner }: { partner: Partner }) => (
  <Box
    sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: { xs: 100, md: 150 },
      height: { xs: 100, md: 150 },
      borderRadius: 100,
      border: "1px solid #E8EBF0",
      bgcolor: "#ffffff",
      p: 2,
      flexShrink: 0,
      overflow: "hidden",
      transition: "all 0.22s ease",
      cursor: "default",
      userSelect: "none",
      "&:hover": {
        borderColor: partner.accent,
        boxShadow: `0 4px 20px ${partner.accent}28`,
      },
    }}
  >
    {partner.logo ? (
      <Box
        component="img"
        src={partner.logo}
        alt={partner.name}
        sx={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          objectPosition: "center",
          borderRadius: 100,

          display: "block",
          transition: "opacity 0.22s ease",
          opacity: 0.85,
          "&:hover": { opacity: 1 },
        }}
      />
    ) : (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 0.5,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: 28,
            height: 3,
            borderRadius: 99,
            bgcolor: partner.accent,
            opacity: 0.7,
          }}
        />
        <Typography
          sx={{
            fontFamily: FontFamily.primary,
            fontWeight: 700,
            fontSize: "0.68rem",
            color: "#191818",
            textAlign: "center",
            lineHeight: 1.3,
          }}
        >
          {partner.name}
        </Typography>
      </Box>
    )}
  </Box>
);

const PartnerSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 6, md: 8 },
        borderTop: "1px solid #E8EBF0",
        borderBottom: "1px solid #E8EBF0",
        backgroundColor: "#FAFBFC",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 5 } }}>
          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#B0B8C5",
              mb: 1,
            }}
          >
            Trusted by &amp; partnered with
          </Typography>
          <Typography
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "1.15rem", md: "1.35rem" },
              fontWeight: 700,
              color: COLORS.secondary,
              lineHeight: 1.3,
            }}
          >
            Global organisations backing our mission
          </Typography>
        </Box>

        <Stack
          direction="row"
          sx={{
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            gap: { xs: 2, md: 2.5 },
          }}
        >
          {partners.map((p) => (
            <PartnerCard key={p.name} partner={p} />
          ))}
        </Stack>

        <Typography
          sx={{
            textAlign: "center",
            mt: { xs: 4, md: 5 },
            fontFamily: FontFamily.primary,
            fontSize: "0.80rem",
            color: "#B0B8C5",
          }}
        >
          Interested in partnering with us?{" "}
          <Box
            component="a"
            href="/contact-us"
            sx={{
              color: COLORS.primary,
              fontWeight: 600,
              textDecoration: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            Get in touch →
          </Box>
        </Typography>
      </Container>
    </Box>
  );
};

export default PartnerSection;
