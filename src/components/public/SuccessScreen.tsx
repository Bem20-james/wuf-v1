/* eslint-disable react-hooks/purity */
import { Box, Typography, Grid } from "@mui/material";
import { type FC } from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { DONATION_OPTIONS } from "../../pages/public/donate/data";
import { FontFamily } from "../../config/fonts";

type Details = {
  firstName: string;
  email: string;
};

type SuccessScreenProps = {
  details: Details;
  amount: number | string;
  frequency?: string;
};

const SuccessScreen: FC<SuccessScreenProps> = ({
  details,
  amount,
  frequency,
}) => {
  return (
    <Box sx={{ textAlign: "center", py: 4 }}>
      <Box
        sx={{
          width: 80,
          height: 80,
          borderRadius: "50%",
          bgcolor: "#ECFDF5",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mx: "auto",
          mb: 2.5,
          animation: "pulse 2s infinite",
          "@keyframes pulse": {
            "0%": { boxShadow: "0 0 0 0 rgba(5,150,105,0.4)" },
            "70%": { boxShadow: "0 0 0 16px rgba(5,150,105,0)" },
            "100%": { boxShadow: "0 0 0 0 rgba(5,150,105,0)" },
          },
        }}
      >
        <CheckCircleIcon sx={{ fontSize: 48, color: "#059669" }} />
      </Box>
      <Typography
        variant="h4"
        sx={{ mb: 1, fontWeight: 800, fontFamily: FontFamily.accent }}
      >
        Thank you, {details.firstName}!
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        sx={{ mb: 3, maxWidth: 380, mx: "auto" }}
      >
        Your{" "}
        <strong>
          ₦{Number(amount).toLocaleString()} {frequency}
        </strong>{" "}
        donation is confirmed. A receipt has been sent to{" "}
        <strong>{details.email}</strong>.
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ mb: 3, maxWidth: 400, mx: "auto", justifyContent: "center" }}
      >
        {DONATION_OPTIONS.map((o) => (
          <Grid size={{ xs: 4 }} key={o.amount}>
            <Box
              sx={{
                textAlign: "center",
                p: 1.5,
                bgcolor: o.bg,
                borderRadius: 3,
              }}
            >
              <Box sx={{ color: o.color, mb: 0.5 }}>{o.icon}</Box>
              <Typography
                variant="caption"
                sx={{ fontWeight: 700, color: o.color }}
              >
                {o.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography variant="caption" color="text.secondary">
        Donation ID: WUF-{Date.now().toString().slice(-8)}
      </Typography>
    </Box>
  );
};

export default SuccessScreen;
