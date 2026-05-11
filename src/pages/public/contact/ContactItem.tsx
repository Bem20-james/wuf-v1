import { Box, Typography, Stack } from "@mui/material";
import { COLORS } from "../../../config/colors";
import { ContactData } from "./data";

const ContactItem = () => {
  return (
    <div>
      <Stack spacing={4}>
        {ContactData.map((tile, i) => (
          <Box
            key={i}
            sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}
          >
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: "10px",
                border: "1px solid rgba(30,136,229,0.15)",
                bgcolor: "rgba(30,136,229,0.04)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              {tile.icon}
            </Box>
            <Box>
              <Typography
                sx={{
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "#9CA3AF",
                  mb: 0.4,
                }}
              >
                {tile.label}
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: COLORS.black,
                  lineHeight: 1.3,
                }}
              >
                {tile.value}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </div>
  );
};

export default ContactItem;
