import {
  Box,
  Typography,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Card,
  CardContent,
  Grid,
  Avatar,
  InputAdornment,
  Alert,
} from "@mui/material";
import React from "react";
import StarIcon from "@mui/icons-material/Star";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { COLORS } from "../../../config/colors";
import { DONATION_OPTIONS } from "./data";

export type DonationFrequency = "one-time" | "monthly";

export type DonationAmountData = {
  frequency: DonationFrequency;
  selected: number | null;
  custom: string;
};

type Props = {
  data: DonationAmountData;
  onChange: (patch: Partial<DonationAmountData>) => void;
};

const StepAmount: React.FC<Props> = ({ data, onChange }) => {
  const { frequency, selected, custom } = data;

  const handleCard = (amt: number): void =>
    onChange({ selected: amt, custom: "" });

  const handleFrequencyChange = (
    _event: React.MouseEvent<HTMLElement>,
    value: DonationFrequency | null,
  ): void => {
    if (value) onChange({ frequency: value });
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const val = e.target.value.replace(/[^0-9.]/g, "");
    onChange({ custom: val, selected: null });
  };

  return (
    <Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 2.5 }}>
        Choose how you'd like to give
      </Typography>

      <ToggleButtonGroup
        value={frequency}
        exclusive
        onChange={handleFrequencyChange}
        fullWidth
        sx={{
          mb: 3,
          gap: 3,
          "& .MuiToggleButton-root": {
            border: "2px solid #E2E8F0",
            borderRadius: "10px !important",
            fontWeight: 700,
            py: 1.2,
            color: "text.secondary",
            "&.Mui-selected": {
              background: "linear-gradient(135deg,#1A56DB,#3B82F6)",
              color: "#fff",
              borderColor: "transparent",
              boxShadow: "0 4px 14px rgba(26,86,219,0.3)",
            },
          },
        }}
      >
        <ToggleButton value="one-time">One-time</ToggleButton>
        <ToggleButton value="monthly">Monthly</ToggleButton>
      </ToggleButtonGroup>

      <Grid container spacing={2} sx={{ mb: 3 }}>
        {DONATION_OPTIONS.map((opt) => (
          <Grid size={{ xs: 12, sm: 4 }} key={opt.amount}>
            <Card
              onClick={() => handleCard(opt.amount)}
              sx={{
                cursor: "pointer",
                border:
                  selected === opt.amount
                    ? `2px solid ${opt.color}`
                    : "2px solid #E2E8F0",
                bgcolor: selected === opt.amount ? opt.bg : "#fff",
                transition: "all 0.2s",
                "&:hover": {
                  transform: "translateY(-3px)",
                  boxShadow: "0 8px 28px rgba(0,0,0,0.12)",
                },
                position: "relative",
                overflow: "visible",
              }}
            >
              {selected === opt.amount && (
                <CheckCircleIcon
                  sx={{
                    position: "absolute",
                    top: -10,
                    right: -10,
                    color: opt.color,
                    bgcolor: "#fff",
                    borderRadius: "50%",
                    fontSize: 22,
                  }}
                />
              )}
              <CardContent sx={{ textAlign: "center", py: 2.5 }}>
                <Avatar
                  sx={{
                    bgcolor: opt.bg,
                    color: opt.color,
                    mx: "auto",
                    mb: 1.5,
                    width: 56,
                    height: 56,
                  }}
                >
                  {opt.icon}
                </Avatar>
                <Typography variant="h6" sx={{ color: opt.color, mb: 0.3 }}>
                  {opt.label}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    display: "block",
                  }}
                >
                  {opt.title}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {opt.desc}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography
        variant="body2"
        sx={{ mb: 1, color: COLORS.secondary, fontWeight: 600 }}
      >
        OR ENTER CUSTOM AMOUNT (₦)
      </Typography>
      <TextField
        fullWidth
        placeholder="0.00"
        value={custom}
        onChange={handleCustomChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Typography
                  sx={{
                    fontWeight: 700,
                    color: COLORS.primary,
                  }}
                >
                  ₦
                </Typography>
              </InputAdornment>
            ),
          },
        }}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: custom ? "#EFF6FF" : "#F8FAFC",
            borderColor: custom ? "#1A56DB" : "#E2E8F0",
          },
        }}
      />

      {(selected || custom) && (
        <Alert
          severity="success"
          icon={<StarIcon fontSize="small" />}
          sx={{
            mt: 2,
            borderRadius: 2,
            bgcolor: "#ECFDF5",
            color: "#065F46",
            "& .MuiAlert-icon": { color: "#059669" },
          }}
        >
          <strong>₦{Number(custom || selected).toLocaleString()}</strong>{" "}
          {frequency === "monthly" ? "per month" : "one-time"} — Your impact
          starts today!
        </Alert>
      )}
    </Box>
  );
};

export default StepAmount;
