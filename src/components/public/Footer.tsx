import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { COLORS } from "../../config/colors";
import { footerColumns, socials } from "./data";

const LinkItem = ({ label }: { label: string }) => (
  <Link
    href="#"
    underline="none"
    sx={{
      color: "#4b5563",
      fontSize: "13.5px",
      fontWeight: 400,
      display: "inline-block",
      width: "fit-content",
      position: "relative",
      transition: "color 0.15s",
      "&:hover": { color: "#1E88E5" },
      "&::after": {
        content: '""',
        position: "absolute",
        bottom: "-1px",
        left: 0,
        width: 0,
        height: "1px",
        bgcolor: "#1E88E5",
        transition: "width 0.18s ease",
      },
      "&:hover::after": { width: "100%" },
    }}
  >
    {label}
  </Link>
);

const Footer = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid #f0f0f0",
        bgcolor: "#fff",
        pt: { xs: 5, md: 7 },
        pb: 0,
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "40%",
          background:
            "linear-gradient(to bottom, rgba(30,136,229,0) 0%, rgba(30,136,229,0.06) 100%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 3, md: 2.5 }}
          sx={{ pb: { xs: 5, md: 6 } }}
        >
          {footerColumns.map((col) => (
            <Grid size={{ xs: 6, sm: 4, md: 2 }} key={col.heading}>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "#0D1B2A",
                  mb: 2,
                }}
              >
                {col.heading}
              </Typography>
              <Stack spacing={1.25}>
                {col.links.map((l) => (
                  <LinkItem key={l} label={l} />
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ borderColor: "#f0f0f0" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Box
            onClick={() => navigate("/")}
            sx={{
              cursor: "pointer",
              transition: "opacity 0.2s",
              "&:hover": { opacity: 0.85 },
            }}
          >
            <Box
              component="img"
              src="/logo/logo-light.png"
              alt="Vantoria"
              sx={{
                width: { xs: 40, md: 250 },
                height: { xs: "auto", md: "auto" },
              }}
            />
          </Box>

          <Stack direction="row" spacing={1.25}>
            {socials.map(({ label, icon: Icon }) => (
              <Box
                key={label}
                sx={{
                  width: 36,
                  height: 36,
                  borderRadius: "50%",
                  border: "1.5px solid #e5e7eb",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: "#1E88E5",
                    bgcolor: "#1E88E5",
                    color: "#fff",
                  },
                  "&:hover .soc-icon": {
                    color: "#fff",
                  },
                }}
              >
                <Icon
                  className="soc-icon"
                  size={16}
                  style={{
                    color: COLORS.secondary,
                    transition: "color 0.2s",
                  }}
                />
              </Box>
            ))}
          </Stack>
        </Box>

        <Divider sx={{ borderColor: "#f0f0f0" }} />

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            py: 2.25,
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          <Typography sx={{ color: "#9ca3af", fontSize: "12px" }}>
            © 2026 Vantoria. All rights reserved.
          </Typography>

          <Stack direction="row" spacing={2.5}>
            {[
              "Privacy policy",
              "Terms of service",
              "Cookie policy",
              "Sitemap",
            ].map((l) => (
              <Link
                key={l}
                href={`/${l.toLowerCase().replace(/\s+/g, "-")}/`}
                underline="none"
                sx={{
                  color: "#9ca3af",
                  fontSize: "12px",
                  transition: "color 0.15s",
                  "&:hover": { color: "#1E88E5" },
                }}
              >
                {l}
              </Link>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
