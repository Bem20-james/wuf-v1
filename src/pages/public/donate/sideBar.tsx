import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  LinearProgress,
} from "@mui/material";
import React from "react";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import BarChartIcon from "@mui/icons-material/BarChart";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";

type FundAllocationItem = {
  label: string;
  sub: string;
  pct: number;
  color: string;
};

const FUND_ALLOCATION: FundAllocationItem[] = [
  {
    label: "Programs",
    sub: "Direct field implementation",
    pct: 90,
    color: "#1A56DB",
  },
  {
    label: "Operations",
    sub: "Essential admin & fundraising",
    pct: 10,
    color: "#E2E8F0",
  },
];

const TransparencySidebar: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2.5 }}>
      <Card>
        <CardContent>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2.5 }}>
            <BarChartIcon color="primary" />
            <Typography variant="h6" sx={{ fontFamily: FontFamily.accent }}>
              Transparency Report
            </Typography>
          </Box>

          <Box sx={{ textAlign: "center", mb: 2 }}>
            <Box
              sx={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background:
                  "conic-gradient(#1A56DB 0deg 324deg, #E2E8F0 324deg 360deg)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 1.5,
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  width: 84,
                  height: 84,
                  borderRadius: "50%",
                  bgcolor: "background.paper",
                },
              }}
            >
              <Box
                sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
              >
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 800,
                    color: COLORS.accent,
                    lineHeight: 1,
                  }}
                >
                  90%
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: COLORS.accent,
                  }}
                >
                  IMPACT
                </Typography>
              </Box>
            </Box>
          </Box>

          {FUND_ALLOCATION.map((item) => (
            <Box key={item.label} sx={{ mb: 1.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  mb: 0.5,
                }}
              >
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 700 }}>
                    {item.label}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    {item.sub}
                  </Typography>
                </Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontWeight: 800,
                    color: item.pct > 50 ? COLORS.accent : COLORS.primary,
                    lineHeight: 1,
                  }}
                >
                  {item.pct}%
                </Typography>
              </Box>
              <LinearProgress
                variant="determinate"
                value={item.pct}
                sx={{
                  height: 6,
                  borderRadius: 3,
                  bgcolor: "#F1F5F9",
                  "& .MuiLinearProgress-bar": {
                    bgcolor: item.color,
                    borderRadius: 3,
                  },
                }}
              />
            </Box>
          ))}

          <Box
            sx={{
              mt: 2,
              p: 2,
              bgcolor: "#F8FAFC",
              borderLeft: "3px solid #1A56DB",
              borderRadius: "0 8px 8px 0",
            }}
          >
            <FormatQuoteIcon sx={{ color: "#1A56DB", fontSize: 18, mb: 0.5 }} />
            <Typography
              variant="body2"
              sx={{
                fontStyle: "italic",
                color: "text.secondary",
                fontSize: 12,
              }}
            >
              We believe in radical transparency. Every Naira you donate is
              tracked and reported in our annual impact audit.
            </Typography>
            <Typography
              variant="caption"
              sx={{
                mt: 0.5,
                display: "block",
                fontWeight: 700,
                color: COLORS.primary,
              }}
            >
              — Williams Uchemba, Founder
            </Typography>
          </Box>

          <Button
            fullWidth
            variant="outlined"
            size="small"
            sx={{ mt: 2, borderRadius: 2, fontWeight: 700 }}
            startIcon={<ReceiptLongIcon />}
          >
            View 2023 Impact Report
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default TransparencySidebar;
