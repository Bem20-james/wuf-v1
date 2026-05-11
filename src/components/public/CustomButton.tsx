import { styled } from "@mui/material";
import { Link, type LinkProps } from "react-router-dom";
import { COLORS } from "../../config/colors";
import { FontFamily } from "../../config/fonts";

interface CustomButtonProps extends LinkProps {
  btncolor?:
    | "primary"
    | "success"
    | "danger"
    | "warning"
    | "pure"
    | "secondary"
    | "sky";
  radius?: string;
  variant?: "filled" | "outlined";
  fullWidth?: boolean;
}

const CustomButton = styled(Link, {
  shouldForwardProp: (prop) =>
    !["btncolor", "radius", "variant", "fullWidth"].includes(prop as string),
})<CustomButtonProps>(
  ({
    btncolor = "primary",
    radius = "10px",
    variant = "filled",
    fullWidth = false,
  }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.5rem",
    fontSize: "12px",
    borderRadius: radius,
    padding: "10px 12px",
    fontWeight: 500,
    transition: "all 0.3s ease-in-out",
    textDecoration: "none",
    fontFamily: FontFamily.primary,
    cursor: "pointer",
    minWidth: "fit-content",
    border: "none",

    ...(fullWidth && {
      width: "100%",
    }),

    // FILLED VARIANTS
    ...(btncolor === "primary" &&
      variant === "filled" && {
        backgroundColor: COLORS.primary,
        border: `1px solid ${COLORS.primary}`,
        color: COLORS.white,
      }),

    ...(btncolor === "success" &&
      variant === "filled" && {
        backgroundColor: "#2FC269",
        border: "1px solid #2FC269",
        color: "#000000",
      }),

    ...(btncolor === "danger" &&
      variant === "filled" && {
        backgroundColor: "#E43F51",
        border: "1px solid #E43F51",
        color: "#ffffff",
      }),

    ...(btncolor === "warning" &&
      variant === "filled" && {
        backgroundColor: "#FFD18B",
        border: "1px solid #FFD18B",
        color: "#000000",
      }),

    ...(btncolor === "pure" &&
      variant === "filled" && {
        backgroundColor: "#F1F4F9",
        border: "1px solid #F1F4F9",
        color: "#000000",
      }),

    // OUTLINED VARIANTS
    ...(btncolor === "primary" &&
      variant === "outlined" && {
        backgroundColor: "#FFFFFF1A",
        border: `1px solid ${COLORS.primary}`,
        color: COLORS.primary,
      }),

    ...(btncolor === "secondary" &&
      variant === "outlined" && {
        backgroundColor: "#CDFFD3",
        border: "1px solid #2FC269",
        color: "#2FC269",
      }),

    ...(btncolor === "danger" &&
      variant === "outlined" && {
        backgroundColor: "#FFC0C0",
        border: "1px solid #E43F51",
        color: "#E43F51",
      }),

    ...(btncolor === "sky" &&
      variant === "outlined" && {
        backgroundColor: "#B3E8FF",
        border: `1px solid ${COLORS.primary}`,
        color: COLORS.primary,
      }),
  }),
);

export default CustomButton;
