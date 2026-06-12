import { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  TextField,
  MenuItem,
  Button,
  Stack,
} from "@mui/material";
import { FontFamily } from "../../../config/fonts";
import { COLORS } from "../../../config/colors";
import { trustPoints, interestOptions } from "./data";

const SignupSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // hook up to  API here
    console.log("Submitted:", form);
  };

  return (
    <Box sx={{ bgcolor: "#EEF2FB", py: { xs: 7, md: 10 } }}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={{ xs: 5, md: 8 }}
          sx={{ alignItems: "center" }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              component="h2"
              sx={{
                fontFamily: "'Georgia', serif",
                fontWeight: 900,
                fontSize: { xs: "2rem", md: "2.6rem" },
                color: "#0D1B2A",
                lineHeight: 1.15,
                mb: 2,
              }}
            >
              Ready to make a difference?
            </Typography>

            <Typography
              sx={{
                fontFamily: FontFamily.primary,
                fontSize: { xs: "0.9rem", md: "0.975rem" },
                color: "#4A5568",
                lineHeight: 1.8,
                mb: 4,
                maxWidth: 380,
              }}
            >
              Fill out the form and our team will get back to you within 48
              hours to discuss how we can work together to empower children and
              families.
            </Typography>

            <Stack spacing={3}>
              {trustPoints.map(({ icon: Icon, title, body }) => (
                <Box
                  key={title}
                  sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
                >
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      borderRadius: 2,
                      bgcolor: "#DDE8FB",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      mt: 0.25,
                    }}
                  >
                    <Icon size={18} color={COLORS.primary} />
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontFamily: FontFamily.primary,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                        color: "#0D1B2A",
                        mb: 0.4,
                      }}
                    >
                      {title}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: FontFamily.primary,
                        fontSize: "0.82rem",
                        color: "#6B7280",
                        lineHeight: 1.65,
                      }}
                    >
                      {body}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                bgcolor: "#fff",
                borderRadius: 4,
                p: { xs: 3, md: 4.5 },
                boxShadow: "0 8px 40px rgba(30,80,180,0.09)",
              }}
            >
              <Grid container spacing={2} sx={{ mb: 2 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>First Name</Typography>
                  <TextField
                    fullWidth
                    placeholder="Jane"
                    value={form.firstName}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <Typography sx={labelSx}>Last Name</Typography>
                  <TextField
                    fullWidth
                    placeholder="Doe"
                    value={form.lastName}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                    variant="outlined"
                    size="small"
                    sx={inputSx}
                  />
                </Grid>
              </Grid>

              <Box sx={{ mb: 2 }}>
                <Typography sx={labelSx}>Email Address</Typography>
                <TextField
                  fullWidth
                  placeholder="jane@example.com"
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={inputSx}
                />
              </Box>

              <Box sx={{ mb: 2 }}>
                <Typography sx={labelSx}>Interested In</Typography>
                <TextField
                  select
                  fullWidth
                  value={form.interest}
                  onChange={(e) => handleChange("interest", e.target.value)}
                  variant="outlined"
                  size="small"
                  sx={inputSx}
                  slotProps={{
                    select: {
                      displayEmpty: true,
                      renderValue: (val: unknown) =>
                        val ? String(val) : "Select an option",
                    },
                  }}
                >
                  {interestOptions.map((opt) => (
                    <MenuItem
                      key={opt}
                      value={opt}
                      sx={{
                        fontFamily: FontFamily.primary,
                        fontSize: "0.875rem",
                      }}
                    >
                      {opt}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>

              <Box sx={{ mb: 3 }}>
                <Typography sx={labelSx}>Message (Optional)</Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Tell us how you'd like to help…"
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  variant="outlined"
                  sx={inputSx}
                />
              </Box>

              <Button
                fullWidth
                variant="contained"
                disableElevation
                onClick={handleSubmit}
                sx={{
                  bgcolor: COLORS.primary,
                  color: "#fff",
                  fontFamily: FontFamily.primary,
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  py: 1.5,
                  borderRadius: 99,
                  textTransform: "none",
                  boxShadow: "0 4px 20px rgba(30,136,229,0.3)",
                  "&:hover": {
                    bgcolor: "#1558C0",
                    boxShadow: "0 6px 24px rgba(30,136,229,0.4)",
                  },
                }}
              >
                Submit Application
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

const labelSx = {
  fontFamily: FontFamily.primary,
  fontSize: "0.68rem",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase" as const,
  color: "#6B7280",
  mb: 0.75,
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: 2,
    fontFamily: FontFamily.primary,
    fontSize: "0.875rem",
    bgcolor: "#FAFBFC",
    "& fieldset": { borderColor: "#E5E7EB" },
    "&:hover fieldset": { borderColor: "#A0B4D0" },
    "&.Mui-focused fieldset": { borderColor: COLORS.primary, borderWidth: 1.5 },
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#B0B8C5",
    opacity: 1,
  },
};

export default SignupSection;
