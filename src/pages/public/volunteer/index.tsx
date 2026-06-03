import { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Checkbox,
  FormControlLabel,
  InputAdornment,
  CircularProgress,
  LinearProgress,
  Paper,
  Link as MUILink,
} from "@mui/material";
import { PersonOutlineRounded } from "@mui/icons-material";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ImagePanel from "./imagePanel";
import { WorkOutlineRounded } from "@mui/icons-material";
import { SuccessScreen } from "../../../components/public";
import { COLORS } from "../../../config/colors";

// ── Progress dots ─────────────────────────────────────────────────────────────
function StepDots({ step, total }) {
  return (
    <Box sx={{ display: "flex", gap: 0.8, mb: 3 }}>
      {[...Array(total)].map((_, i) => (
        <Box
          key={i}
          sx={{
            height: 4,
            width: i === step ? 28 : 8,
            borderRadius: 2,
            bgcolor: i === step ? "#C2410C" : i < step ? "#FDBA74" : "#E7E5E4",
            transition: "all 0.35s ease",
          }}
        />
      ))}
    </Box>
  );
}

const VolunteerPage = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTimeout(() => setMounted(true), 80);
  }, []);

  const [form, setForm] = useState({
    // Step 0 — Personal
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    state: "",
    // Step 1 — Background
    occupation: "",
    employer: "",
    whyVolunteer: "",
    // Step 2 — Skills & Availability
    skills: [],
    availability: [],
    commitment: "",
    experience: "",
    // Step 3 — Final
    agreeTerms: false,
    agreeCode: false,
  });

  const patch = (obj) => setForm((p) => ({ ...p, ...obj }));

  const TOTAL_STEPS = 3;

  const progress = ((step + (done ? 1 : 0)) / TOTAL_STEPS) * 100;

  const canNext = () => {
    if (step === 0)
      return (
        form.firstName &&
        form.lastName &&
        form.email &&
        form.phone &&
        form.state
      );
    if (step === 1) return form.occupation && form.whyVolunteer;
    if (step === 2) return form.agreeTerms && form.agreeCode;
    return true;
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS - 1) {
      setStep((s) => s + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setDone(true);
      }, 2000);
    }
  };

  const STEP_TITLES = [
    { label: "Personal Info", sub: "Tell us about yourself" },
    { label: "Background", sub: "Your experience & motivation" },
    { label: "Final Details", sub: "Almost there — last few things" },
  ];

  const inputSX = { mb: 2 };

  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "#FFFBF7" }}>
      {/* ── LEFT PANEL ─────────────────────────────────────── */}
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          width: { md: "45%", lg: "55%" },
          flexShrink: 0,
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          opacity: mounted ? 1 : 0,
          transform: mounted ? "none" : "translateX(-20px)",
          transition: "opacity 0.7s ease, transform 0.7s ease",
        }}
      >
        <ImagePanel />
      </Box>

      {/* ── RIGHT PANEL (form) ──────────────────────────────── */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          overflowY: "auto",
          px: { xs: 3, sm: 5, lg: 6 },
          py: { xs: 4, md: 5 },
          opacity: mounted ? 1 : 0,
          transform: mounted ? "none" : "translateY(16px)",
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
        }}
      >
        <Box
          sx={{
            maxWidth: 520,
            width: "100%",
            mx: "auto",
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          {!done ? (
            <>
              <Box sx={{ mb: 4 }}>
                <MUILink
                  href="/"
                  underline="none"
                  sx={{
                    color: COLORS.black,
                    fontSize: "13.5px",
                    fontWeight: 600,
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  Back to Home
                </MUILink>
              </Box>

              {/* Step header */}
              <Box sx={{ mb: 3.5 }}>
                <StepDots step={step} total={TOTAL_STEPS} />
                <Typography
                  variant="h3"
                  sx={{
                    fontSize: { xs: "1.8rem", sm: "2.2rem" },
                    mb: 0.5,
                    lineHeight: 1.2,
                  }}
                >
                  {STEP_TITLES[step].label}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: "0.92rem" }}>
                  Step {step + 1} of {TOTAL_STEPS} — {STEP_TITLES[step].sub}
                </Typography>
              </Box>

              {/* ── Step 0: Personal ─────────────────────────── */}
              {step === 0 && (
                <Box
                  sx={{
                    animation: "slideIn 0.4s ease forwards",
                    "@keyframes slideIn": {
                      from: { opacity: 0, transform: "translateX(24px)" },
                      to: { opacity: 1, transform: "translateX(0)" },
                    },
                  }}
                >
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid size={{ xs: 6 }}>
                      <TextField
                        fullWidth
                        variant="outlined"
                        label="First Name"
                        value={form.firstName}
                        onChange={(e) => patch({ firstName: e.target.value })}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineRounded
                                sx={{ color: "#A8A29E", fontSize: 18 }}
                              />
                            </InputAdornment>
                          ),
                        }}
                        required
                      />
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField
                        fullWidth
                        label="Last Name"
                        value={form.lastName}
                        onChange={(e) => patch({ lastName: e.target.value })}
                        required
                      />
                    </Grid>
                  </Grid>
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Email Address"
                    type="email"
                    value={form.email}
                    onChange={(e) => patch({ email: e.target.value })}
                    sx={inputSX}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailOutlinedIcon
                            sx={{ color: "#A8A29E", fontSize: 18 }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    helperText="We'll send your volunteer confirmation here"
                    required
                  />
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Phone Number"
                    value={form.phone}
                    onChange={(e) => patch({ phone: e.target.value })}
                    sx={inputSX}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneOutlinedIcon
                            sx={{ color: "#A8A29E", fontSize: 18 }}
                          />
                          <Typography
                            sx={{
                              ml: 0.5,
                              color: "#78716C",
                              fontSize: "0.85rem",
                            }}
                          >
                            +234
                          </Typography>
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <Grid container spacing={2} sx={{ mb: 2 }}>
                    <Grid size={{ xs: 6 }}>
                      <FormControl fullWidth>
                        <InputLabel>Gender</InputLabel>
                        <Select
                          value={form.gender}
                          label="Gender"
                          onChange={(e) => patch({ gender: e.target.value })}
                        >
                          {["Male", "Female", "Prefer not to say"].map((g) => (
                            <MenuItem key={g} value={g}>
                              {g}
                            </MenuItem>
                          ))}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid size={{ xs: 6 }}>
                      <TextField
                        fullWidth
                        label="Date of Birth"
                        type="date"
                        value={form.dob}
                        onChange={(e) => patch({ dob: e.target.value })}
                      />
                    </Grid>
                  </Grid>
                  <FormControl fullWidth sx={inputSX}>
                    <InputLabel>State of Residence *</InputLabel>
                    <Select
                      value={form.state}
                      label="State of Residence *"
                      onChange={(e) => patch({ state: e.target.value })}
                      required
                    >
                      {[
                        "Lagos",
                        "Abuja (FCT)",
                        "Rivers",
                        "Kano",
                        "Oyo",
                        "Enugu",
                        "Delta",
                        "Anambra",
                        "Imo",
                        "Cross River",
                        "Other",
                      ].map((s) => (
                        <MenuItem key={s} value={s}>
                          {s}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              )}

              {/* ── Step 1: Background ────────────────────────── */}
              {step === 1 && (
                <Box
                  sx={{
                    animation: "slideIn 0.4s ease forwards",
                    "@keyframes slideIn": {
                      from: { opacity: 0, transform: "translateX(24px)" },
                      to: { opacity: 1, transform: "translateX(0)" },
                    },
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    label="Occupation / Profession"
                    value={form.occupation}
                    onChange={(e) => patch({ occupation: e.target.value })}
                    sx={inputSX}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <WorkOutlineRounded
                            sx={{ color: "#A8A29E", fontSize: 18 }}
                          />
                        </InputAdornment>
                      ),
                    }}
                    required
                  />
                  <FormControl fullWidth sx={inputSX}>
                    <InputLabel>Volunteer experience</InputLabel>
                    <Select
                      value={form.experience}
                      label="Volunteer experience"
                      onChange={(e) => patch({ experience: e.target.value })}
                    >
                      {[
                        "No prior experience",
                        "Less than 1 year",
                        "1–3 years",
                        "3–5 years",
                        "5+ years",
                      ].map((x) => (
                        <MenuItem key={x} value={x}>
                          {x}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Why do you want to volunteer with us? *"
                    placeholder="Share your motivation, what drives your desire to serve..."
                    value={form.whyVolunteer}
                    onChange={(e) => patch({ whyVolunteer: e.target.value })}
                    inputProps={{ maxLength: 300 }}
                    helperText={`${form.whyVolunteer.length}/500`}
                    sx={{
                      mb: 2,
                      "& .MuiOutlinedInput-root": {
                        "& textarea": { lineHeight: 1.7 },
                      },
                    }}
                    required
                  />
                </Box>
              )}

              {/* ── Step 3: Final ─────────────────────────────── */}
              {step === 2 && (
                <Box
                  sx={{
                    animation: "slideIn 0.4s ease forwards",
                    "@keyframes slideIn": {
                      from: { opacity: 0, transform: "translateX(24px)" },
                      to: { opacity: 1, transform: "translateX(0)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      p: 2.5,
                      bgcolor: "#F9F9F8",
                      border: "1px solid #E7E5E4",
                      borderRadius: 3,
                      mb: 2,
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{ mb: 1.5, fontWeight: 700 }}
                    >
                      Agreements
                    </Typography>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.agreeTerms}
                          onChange={(e) =>
                            patch({ agreeTerms: e.target.checked })
                          }
                        />
                      }
                      label={
                        <Typography variant="body2" color="text.secondary">
                          I agree to the{" "}
                          <Box
                            component="span"
                            sx={{
                              color: "#C2410C",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            Terms of Service
                          </Box>{" "}
                          and{" "}
                          <Box
                            component="span"
                            sx={{
                              color: "#C2410C",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            Privacy Policy
                          </Box>
                        </Typography>
                      }
                      sx={{ alignItems: "flex-start", mb: 1 }}
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={form.agreeCode}
                          onChange={(e) =>
                            patch({ agreeCode: e.target.checked })
                          }
                        />
                      }
                      label={
                        <Typography variant="body2" color="text.secondary">
                          I agree to uphold the WUF{" "}
                          <Box
                            component="span"
                            sx={{
                              color: "#C2410C",
                              fontWeight: 700,
                              cursor: "pointer",
                            }}
                          >
                            Volunteer Code of Conduct
                          </Box>
                        </Typography>
                      }
                      sx={{ alignItems: "flex-start" }}
                    />
                  </Box>

                  {/* Summary card */}
                  <Paper
                    elevation={0}
                    sx={{
                      p: 2.5,
                      bgcolor: "#FFFBF7",
                      border: "1.5px solid #FDBA74",
                      borderRadius: 3,
                    }}
                  >
                    <Typography
                      variant="body2"
                      fontWeight={800}
                      sx={{ mb: 1.2, color: "#C2410C" }}
                    >
                      Application Summary
                    </Typography>
                    {[
                      ["Name", `${form.firstName} ${form.lastName}`],
                      ["Email", form.email],
                      ["State", form.state],
                      [
                        "Skills",
                        form.skills.length > 0
                          ? `${form.skills.length} selected`
                          : "—",
                      ],
                      ["Hours/wk", form.commitment || "—"],
                    ].map(([k, v]) => (
                      <Box
                        key={k}
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          mb: 0.7,
                        }}
                      >
                        <Typography variant="caption" color="text.secondary">
                          {k}
                        </Typography>
                        <Typography variant="caption" sx={{ fontWeight: 700 }}>
                          {v}
                        </Typography>
                      </Box>
                    ))}
                  </Paper>
                </Box>
              )}

              {/* ── Navigation ────────────────────────────────── */}
              <Box sx={{ mt: "auto", pt: 4, display: "flex", gap: 2 }}>
                {step > 0 && (
                  <Button
                    variant="outlined"
                    onClick={() => setStep((s) => s - 1)}
                    sx={{
                      flex: 1,
                      py: 1.6,
                      borderColor: "#D6D3D1",
                      color: "text.secondary",
                      "&:hover": {
                        borderColor: "#C2410C",
                        color: "#C2410C",
                        bgcolor: "#FFF7ED",
                      },
                    }}
                  >
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  disabled={!canNext() || loading}
                  onClick={handleNext}
                  endIcon={
                    loading ? (
                      <CircularProgress size={17} color="inherit" />
                    ) : step < TOTAL_STEPS - 1 ? (
                      <ArrowForwardIcon />
                    ) : (
                      <FavoriteOutlinedIcon />
                    )
                  }
                  sx={{
                    flex: 2,
                    py: 1.6,
                    background:
                      "linear-gradient(135deg, #C2410C 0%, #EA580C 100%)",
                    boxShadow: "0 4px 20px rgba(194,65,12,0.35)",
                    fontSize: "0.97rem",
                    "&:hover": {
                      background:
                        "linear-gradient(135deg, #7C2D12 0%, #C2410C 100%)",
                      boxShadow: "0 6px 28px rgba(194,65,12,0.45)",
                      transform: "translateY(-1px)",
                    },
                    "&:disabled": {
                      background: "#E7E5E4",
                      boxShadow: "none",
                    },
                    transition: "all 0.2s ease",
                  }}
                >
                  {loading
                    ? "Submitting..."
                    : step < TOTAL_STEPS - 1
                      ? `Continue`
                      : "Submit Application"}
                </Button>
              </Box>

              {/* Footer note */}
              <Typography
                variant="caption"
                color="text.disabled"
                sx={{ display: "block", textAlign: "center", mt: 2.5 }}
              >
                🔒 Your information is kept private and secure
              </Typography>
            </>
          ) : (
            <SuccessScreen name={form.firstName} />
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default VolunteerPage;
