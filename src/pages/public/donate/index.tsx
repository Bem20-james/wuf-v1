import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
  Card,
  CardContent,
  Grid,
  CircularProgress,
} from "@mui/material";
import React from "react";
import VerifiedIcon from "@mui/icons-material/Verified";
import LockIcon from "@mui/icons-material/Lock";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { CustomChip, SuccessScreen } from "../../../components/public";
import StepAmount, {
  type DonationAmountData,
  type DonationFrequency,
} from "./amountStep";
import StepDetails, { type StepDetailsData } from "./detailsStep";
import StepPayment, { type StepPaymentData } from "./paymentStep";
import TransparencySidebar from "./sideBar";
import { COLORS } from "../../../config/colors";
import { FontFamily } from "../../../config/fonts";

const STEPS = ["Amount", "Details", "Payment"] as const;
type Step = (typeof STEPS)[number];

const DonatePage: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [done, setDone] = useState<boolean>(false);

  const [amountData, setAmountData] = useState<DonationAmountData>({
    frequency: "one-time",
    selected: null,
    custom: "",
  });

  const [detailsData, setDetailsData] = useState<StepDetailsData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    message: "",
    anonymous: false,
    newsletter: true,
  });

  const [paymentData, setPaymentData] = useState<StepPaymentData>({
    method: "card",
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const finalAmount: number | string =
    amountData.custom || amountData.selected || 0;

  const canNext = (): boolean => {
    if (activeStep === 0) return !!finalAmount && Number(finalAmount) > 0;
    if (activeStep === 1)
      return !!(
        detailsData.firstName &&
        detailsData.lastName &&
        detailsData.email
      );
    return true;
  };

  const handleNext = (): void => {
    if (activeStep === STEPS.length - 1) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 2200);
    } else {
      setActiveStep((s) => s + 1);
    }
  };

  const merge =
    <T extends object>(setter: React.Dispatch<React.SetStateAction<T>>) =>
    (patch: Partial<T>): void =>
      setter((prev) => ({ ...prev, ...patch }));

  return (
    <Box
      sx={{
        bgcolor: COLORS.white,
        minHeight: "100vh",
        pt: { xs: "100px", md: "120px" },
        pb: { xs: 10, md: 16 },
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          right: 0,
          width: "400px",
          height: "400px",
          background:
            "radial-gradient(ellipse at top right, rgba(30, 136, 229, 0.47) 0%, transparent 65%)",
          pointerEvents: "none",
        },
        "&::after": {
          content: '""',
          position: "absolute",
          bottom: 0,
          left: 0,
          width: "400px",
          height: "300px",
          background:
            "radial-gradient(ellipse at bottom left, rgba(30, 136, 229, 0.4) 0%, transparent 70%)",
          pointerEvents: "none",
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={{ mb: 5, maxWidth: 660 }}>
          <CustomChip
            label="Donate Today"
            icon={<VerifiedIcon sx={{ "&&": { color: COLORS.primary } }} />}
          />
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontFamily: FontFamily.primary,
              fontSize: { xs: "40px", md: "54px", lg: "62px" },
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: COLORS.dark,
              mb: 3,
            }}
          >
            Partner with us to end
            <br />
            <Box component="span" sx={{ color: COLORS.primary }}>
              extreme poverty.
            </Box>
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ fontSize: "1.05rem" }}
          >
            Your support helps The Williams Uchemba Foundation provide hope and
            sustainable solutions to Nigerians in need. Join{" "}
            <strong>10,000+</strong> donors making an impact.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ alignItems: "flex-start" }}>
          <Grid size={{ xs: 12, md: 7 }}>
            <Card sx={{ overflow: "visible" }}>
              <CardContent sx={{ p: { xs: 2.5, sm: 4 } }}>
                <Stepper
                  activeStep={activeStep}
                  sx={{
                    mb: 4,
                    "& .MuiStepLabel-label": {
                      fontWeight: 700,
                      fontSize: 13,
                    },
                    "& .MuiStepIcon-root.Mui-active": { color: COLORS.primary },
                    "& .MuiStepIcon-root.Mui-completed": {
                      color: COLORS.secondary,
                    },
                  }}
                >
                  {STEPS.map((s: Step) => (
                    <Step key={s}>
                      <StepLabel>{s}</StepLabel>
                    </Step>
                  ))}
                </Stepper>

                {!done ? (
                  <>
                    {activeStep === 0 && (
                      <StepAmount
                        data={amountData}
                        onChange={merge(setAmountData)}
                      />
                    )}
                    {activeStep === 1 && (
                      <StepDetails
                        data={detailsData}
                        onChange={merge(setDetailsData)}
                      />
                    )}
                    {activeStep === 2 && (
                      <StepPayment
                        data={paymentData}
                        onChange={merge(setPaymentData)}
                        amount={Number(finalAmount)}
                        frequency={amountData.frequency as DonationFrequency}
                      />
                    )}

                    <Box sx={{ display: "flex", gap: 2, mt: 4 }}>
                      {activeStep > 0 && (
                        <Button
                          variant="outlined"
                          startIcon={<ArrowBackIcon />}
                          onClick={() => setActiveStep((s) => s - 1)}
                          sx={{ flex: 1, py: 1.5, borderRadius: 3 }}
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        size="large"
                        disabled={!canNext() || loading}
                        onClick={handleNext}
                        endIcon={
                          loading ? (
                            <CircularProgress size={18} color="inherit" />
                          ) : (
                            <ArrowForwardIcon />
                          )
                        }
                        sx={{
                          flex: 2,
                          py: 1.8,
                          borderRadius: 3,
                          fontSize: "1rem",
                        }}
                      >
                        {loading
                          ? "Processing..."
                          : activeStep === STEPS.length - 1
                            ? `Donate ₦${Number(finalAmount).toLocaleString()}`
                            : "Continue to " + STEPS[activeStep + 1]}
                      </Button>
                    </Box>

                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 1,
                        mt: 2,
                      }}
                    >
                      <LockIcon sx={{ fontSize: 14, color: "text.disabled" }} />
                      <Typography variant="caption" color="text.disabled">
                        Secured by Paystack & Flutterwave
                      </Typography>
                    </Box>
                  </>
                ) : (
                  <SuccessScreen
                    details={detailsData}
                    amount={finalAmount}
                    frequency={amountData.frequency}
                  />
                )}
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <TransparencySidebar />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DonatePage;
