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
  type SelectChangeEvent,
} from "@mui/material";
import React from "react";

export type StepDetailsData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  message: string;
  anonymous: boolean;
  newsletter: boolean;
};

type StepDetailsProps = {
  data: StepDetailsData;
  onChange: (value: Partial<StepDetailsData>) => void;
};

const NIGERIAN_STATES = [
  "Lagos",
  "Abuja",
  "Rivers",
  "Kano",
  "Oyo",
  "Enugu",
  "Delta",
  "Other",
] as const;

const StepDetails: React.FC<StepDetailsProps> = ({ data, onChange }) => {
  const handleStateChange = (e: SelectChangeEvent<string>): void => {
    onChange({ state: e.target.value });
  };

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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ firstName: e.target.value })
            }
            required
          />
        </Grid>
        <Grid size={{ xs: 12, sm: 6 }}>
          <TextField
            fullWidth
            label="Last Name"
            value={data.lastName}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ lastName: e.target.value })
            }
            required
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <TextField
            fullWidth
            label="Email Address"
            type="email"
            value={data.email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ email: e.target.value })
            }
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ phone: e.target.value })
            }
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
            <Select<string>
              value={data.state}
              label="State"
              onChange={handleStateChange}
            >
              {NIGERIAN_STATES.map((s) => (
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
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              onChange({ message: e.target.value })
            }
          />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={data.anonymous}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange({ anonymous: e.target.checked })
                }
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
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  onChange({ newsletter: e.target.checked })
                }
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
