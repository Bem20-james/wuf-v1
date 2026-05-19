import { Box, Container, Typography, Stack } from "@mui/material";
import { FaCheckCircle, FaFileAlt } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

const checkItems = [
  "CAC Registration: IT 109283",
  "Annual Social Audit Reports",
  "Direct Impact Tracking Systems",
];

const TrustSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.white,
        py: { xs: "60px", md: "80px" },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            borderRadius: "20px",
            border: "1px solid rgba(0,0,0,0.07)",
            p: { xs: "32px", md: "48px" },
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: { xs: "flex-start", md: "center" },
            gap: { xs: "40px", md: "64px" },
          }}
        >
          <Box
            sx={{
              flexShrink: 0,
              width: { xs: "100%", md: "360px" },
              border: "1.5px dashed rgba(0,0,0,0.15)",
              borderRadius: "14px",
              p: { xs: "24px", md: "28px" },
            }}
          >
            <Stack
              direction="row"
              spacing={1.25}
              sx={{ mb: 2.5, alignItems: "center" }}
            >
              <Box
                sx={{
                  color: "#16a34a",
                  fontSize: "1.4rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdVerified />
              </Box>
              <Typography
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: COLORS.dark,
                }}
              >
                Registered &amp; Audited
              </Typography>
            </Stack>

            <Typography
              sx={{
                fontFamily: FontFamily.accent ?? FontFamily.primary,
                fontSize: "0.85rem",
                lineHeight: 1.75,
                color: COLORS.neutral ?? "#666",
                mb: 3,
              }}
            >
              WUF is a fully registered Non-Governmental Organization (NGO) in
              Nigeria. We publish annual audited financial reports to maintain
              the trust of our global community of donors.
            </Typography>

            <Stack spacing={1.5}>
              {checkItems.map((item) => (
                <Stack
                  key={item}
                  direction="row"
                  spacing={1.25}
                  sx={{
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      color: "#16a34a",
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      flexShrink: 0,
                    }}
                  >
                    <FaCheckCircle />
                  </Box>
                  <Typography
                    sx={{
                      fontFamily: FontFamily.accent ?? FontFamily.primary,
                      fontSize: "0.85rem",
                      color: COLORS.neutral ?? "#555",
                    }}
                  >
                    {item}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Box>

          <Box sx={{ flex: 1 }}>
            <Typography
              variant="h2"
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                fontWeight: 800,
                color: COLORS.dark,
                letterSpacing: "-0.02em",
                lineHeight: 1.15,
                mb: 2.5,
              }}
            >
              Radical Trust
            </Typography>

            <Typography
              sx={{
                fontFamily: FontFamily.accent ?? FontFamily.primary,
                fontSize: { xs: "0.9rem", md: "0.975rem" },
                lineHeight: 1.8,
                color: COLORS.neutral ?? "#666",
                mb: 3,
              }}
            >
              We believe that the future of philanthropy in Africa depends on
              trust. That&apos;s why we&apos;ve built a governance framework
              that ensures absolute accountability. From our project site visits
              to our financial disclosures, we operate an open-door policy.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              component="a"
              href="/reports/annual-2023.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                textDecoration: "none",
                cursor: "pointer",
                "&:hover .link-text": { textDecoration: "underline" },
              }}
            >
              <Typography
                className="link-text"
                sx={{
                  fontFamily: FontFamily.primary,
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  color: "#16a34a",
                }}
              >
                View 2023 Annual Report
              </Typography>
              <Box
                sx={{
                  color: "#16a34a",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <FaFileAlt />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default TrustSection;
