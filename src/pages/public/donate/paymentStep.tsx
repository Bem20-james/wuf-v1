import {
  Box,
  Typography,
  TextField,
  Card,
  CardContent,
  Grid,
  Chip,
  Divider,
  Avatar,
  InputAdornment,
  Paper,
} from "@mui/material";
import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import { COLORS } from "../../../config/colors";
import { type DonationFrequency } from "./amountStep";

export type PaymentMethod = "card" | "transfer" | "ussd";

export type StepPaymentData = {
  method: PaymentMethod;
  cardNumber: string;
  expiry: string;
  cvv: string;
  cardName: string;
};

type PaymentMethodOption = {
  id: PaymentMethod;
  label: string;
  icon: React.ReactNode;
};

type BankDetailRow = [string, string];

type StepPaymentProps = {
  data: StepPaymentData;
  onChange: (value: Partial<StepPaymentData>) => void;
  amount?: number | string;
  frequency?: DonationFrequency;
};

const PAYMENT_METHODS: PaymentMethodOption[] = [
  { id: "card", label: "Debit / Credit Card", icon: <CreditCardIcon /> },
  { id: "transfer", label: "Bank Transfer", icon: <AccountBalanceIcon /> },
  { id: "ussd", label: "USSD / Mobile Money", icon: <PhoneAndroidIcon /> },
];

const BANK_DETAILS: BankDetailRow[] = [
  ["Bank", "Guaranty Trust Bank"],
  ["Account Name", "Williams Uchemba Foundation"],
  ["Account Number", "0123456789"],
  ["Reference", `WUF-${Date.now().toString().slice(-6)}`],
];

const StepPayment: React.FC<StepPaymentProps> = ({
  data,
  onChange,
  amount,
  frequency,
}) => {
  return (
    <Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Choose your payment method
      </Typography>

      {/* Method selector */}
      <Grid container spacing={1.5} sx={{ mb: 3 }}>
        {PAYMENT_METHODS.map((m) => (
          <Grid size={{ xs: 12 }} key={m.id}>
            <Card
              onClick={() => onChange({ method: m.id })}
              sx={{
                cursor: "pointer",
                border:
                  data.method === m.id
                    ? "2px solid #1A56DB"
                    : "2px solid #E2E8F0",
                bgcolor: data.method === m.id ? "#EFF6FF" : "#fff",
                transition: "all 0.18s",
                "&:hover": { borderColor: "#1A56DB" },
              }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                  py: "14px !important",
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: data.method === m.id ? "#1A56DB" : "#F1F5F9",
                    color: data.method === m.id ? "#fff" : "#64748B",
                    width: 40,
                    height: 40,
                  }}
                >
                  {m.icon}
                </Avatar>
                <Typography sx={{ fontWeight: 700 }}>{m.label}</Typography>
                {data.method === m.id && (
                  <CheckCircleIcon sx={{ ml: "auto", color: "#1A56DB" }} />
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Card fields */}
      {data.method === "card" && (
        <Grid container spacing={2}>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Card Number"
              placeholder="1234 5678 9012 3456"
              value={data.cardNumber}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ cardNumber: e.target.value })
              }
              slotProps={{
                input: {
                  startAdornment: (
                    <InputAdornment position="start">
                      <CreditCardIcon color="action" />
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="Expiry Date"
              placeholder="MM / YY"
              value={data.expiry}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ expiry: e.target.value })
              }
            />
          </Grid>
          <Grid size={{ xs: 12, sm: 6 }}>
            <TextField
              fullWidth
              label="CVV"
              placeholder="···"
              type="password"
              value={data.cvv}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ cvv: e.target.value })
              }
            />
          </Grid>
          <Grid size={{ xs: 12 }}>
            <TextField
              fullWidth
              label="Cardholder Name"
              value={data.cardName}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                onChange({ cardName: e.target.value })
              }
            />
          </Grid>
        </Grid>
      )}

      {/* Bank Transfer */}
      {data.method === "transfer" && (
        <Paper
          sx={{
            p: 2.5,
            bgcolor: "#F8FAFC",
            border: "1px dashed #CBD5E1",
            borderRadius: 3,
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5 }}>
            Transfer to this account:
          </Typography>
          {BANK_DETAILS.map(([k, v]) => (
            <Box
              key={k}
              sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}
            >
              <Typography variant="body2" color="text.secondary">
                {k}
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: 700 }}>
                {v}
              </Typography>
            </Box>
          ))}
        </Paper>
      )}

      {/* USSD */}
      {data.method === "ussd" && (
        <Paper
          sx={{
            p: 2.5,
            bgcolor: "#F8FAFC",
            border: "1px dashed #CBD5E1",
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
            Dial the code below on your phone
          </Typography>
          <Typography
            variant="h4"
            sx={{ fontWeight: 800, color: COLORS.primary }}
          >
            *737*000#
          </Typography>
          <Typography variant="caption" color="text.secondary">
            Follow the prompts and enter amount: ₦
            {Number(amount ?? 0).toLocaleString()}
          </Typography>
        </Paper>
      )}

      {/* Order summary */}
      <Divider sx={{ my: 3 }} />
      <Box
        sx={{
          bgcolor: "#F0F9FF",
          border: "1px solid #BAE6FD",
          borderRadius: 3,
          p: 2.5,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 700, mb: 1.5 }}>
          Donation Summary
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
          <Typography variant="body2" color="text.secondary">
            Donation amount
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 700 }}>
            ₦{Number(amount ?? 0).toLocaleString()}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
          <Typography variant="body2" color="text.secondary">
            Frequency
          </Typography>
          <Typography
            variant="body2"
            sx={{ textTransform: "capitalize", fontWeight: 700 }}
          >
            {frequency}
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.8 }}>
          <Typography variant="body2" color="text.secondary">
            Processing fee
          </Typography>
          <Chip
            label="Covered by foundation"
            size="small"
            color="success"
            sx={{ height: 20, fontSize: 10 }}
          />
        </Box>
        <Divider sx={{ my: 1 }} />
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="body2" sx={{ fontWeight: 800 }}>
            Total charged
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: 800, color: COLORS.primary }}
          >
            ₦{Number(amount ?? 0).toLocaleString()}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StepPayment;
