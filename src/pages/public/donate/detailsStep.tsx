import {
  Box,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const StepDetails = ({ data, onChange }) => {
  return (
    <Box>
      <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
        Tell us a bit about yourself
      </Typography>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="First Name"
            value={data.firstName}
            onChange={(e) => onChange({ firstName: e.target.value })}
            required
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={data.lastName}
            onChange={(e) => onChange({ lastName: e.target.value })}
            required
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={data.email}
            onChange={(e) => onChange({ email: e.target.value })}
            required
            helperText="Your receipt and impact updates will be sent here"
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Phone Number"
            type="tel"
            value={data.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">+234</InputAdornment>
                ),
              },
            }}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControl fullWidth>
            <InputLabel>State</InputLabel>
            <Select
              value={data.state}
              label="State"
              onChange={(e) => onChange({ state: e.target.value })}
            >
              {[
                "Lagos",
                "Abuja",
                "Rivers",
                "Kano",
                "Oyo",
                "Enugu",
                "Delta",
                "Other",
              ].map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            multiline
            rows={2}
            label="Message (optional)"
            placeholder="Share why you're giving today..."
            value={data.message}
            onChange={(e) => onChange({ message: e.target.value })}
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.anonymous}
                onChange={(e) => onChange({ anonymous: e.target.checked })}
                color="primary"
              />
            }
            label={
              <Typography variant="body2">
                Make this donation <strong>anonymous</strong>
              </Typography>
            }
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.newsletter}
                onChange={(e) => onChange({ newsletter: e.target.checked })}
                color="primary"
                defaultChecked
              />
            }
            label={
              <Typography variant="body2">
                Send me quarterly impact reports and updates
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default StepDetails;
