import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { COLORS } from "../../config/colors";

const CustomInput = ({
  label,
  type = "text",
  placeholder,
  multiline = false,
  value,
  onChange,
}: {
  label: string;
  type?: string;
  placeholder: string;
  multiline?: boolean;
  value: string;
  onChange: (v: string) => void;
}) => {
  const [focused, setFocused] = useState(false);

  const baseStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    background: "transparent",
    fontSize: "14px",
    fontFamily: "inherit",
    color: COLORS.secondary,
    resize: "none" as const,
    padding: 0,
  };

  return (
    <Box>
      <Typography
        sx={{
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: focused ? "#1E88E5" : "#9CA3AF",
          mb: 1,
          transition: "color 0.2s",
        }}
      >
        {label}
      </Typography>
      <Box
        sx={{
          borderBottom: `1.5px solid ${focused ? "#1E88E5" : "#E5E7EB"}`,
          pb: 1.25,
          transition: "border-color 0.2s",
        }}
      >
        {multiline ? (
          <textarea
            rows={4}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              ...baseStyle,
              lineHeight: "1.75",
              display: "block",
            }}
          />
        ) : (
          <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            style={{
              ...baseStyle,
              height: "32px",
              display: "block",
            }}
          />
        )}
      </Box>
    </Box>
  );
};

export default CustomInput;
