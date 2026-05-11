import { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Divider,
  Stack,
} from "@mui/material";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { MenuRounded } from "@mui/icons-material";
import { FontFamily } from "../../config/fonts";
import { navItems } from "./data";
import { COLORS } from "../../config/colors";
import CustomButton from "./CustomButton";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleToggle = () => setMobileOpen((prev) => !prev);
  const handleGetStarted = () => navigate("/login");

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const impactBg = location.pathname.includes("/impact");

  return (
    <Box>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: !scroll && impactBg ? COLORS.white : "transparent",
          backdropFilter: scroll ? "blur(12px)" : "none",
          borderBottom: scroll ? "1px solid rgba(255,255,255,0.05)" : "none",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          boxShadow: scroll ? "0 6px 22px rgba(0,0,0,0.22)" : "none",
          overflowX: "hidden",
          width: "100vw",
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 1.5, md: 3 } }}>
          <Toolbar
            disableGutters
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              minHeight: "70px",
              overflowX: "hidden",
            }}
          >
            <Box
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: 1.5,
                transition: "transform 0.2s ease",
              }}
            >
              <Box
                component="img"
                src={"/logo.png"}
                sx={{ width: { xs: 140, sm: 100, md: 100 }, height: "auto" }}
              />
            </Box>

            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 5 }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Box
                    key={item.label}
                    component={Link}
                    to={item.path}
                    sx={{
                      textDecoration: "none",
                      color: isActive ? COLORS.primary : COLORS.dark,
                      fontWeight: 500,
                      fontSize: "0.86rem",
                      fontFamily: FontFamily.secondary,
                      transition: "all 0.3s ease",
                      position: "relative",
                      "&:hover": {
                        color: isActive ? COLORS.offWhite : "#1E88E5",
                      },
                      "&::after": isActive
                        ? {
                            content: '""',
                            position: "absolute",
                            bottom: -8,
                            left: "20%",
                            width: "60%",
                            height: "2px",
                            backgroundColor: "#64B5F6",
                            borderRadius: "10px",
                          }
                        : {},
                    }}
                  >
                    {item.label}
                  </Box>
                );
              })}
            </Box>

            <Stack direction={"row"} spacing={1}>
              <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
                <CustomButton
                  to={"/auth/login"}
                  radius="6px"
                  fullWidth
                  variant={"filled"}
                  onClick={() => {}}
                  sx={{
                    mt: "auto",
                    width: { xs: "100%", sm: "auto" },
                  }}
                >
                  Donate
                </CustomButton>
                <CustomButton
                  to={"/auth/onboarding"}
                  radius="6px"
                  fullWidth
                  variant={"filled"}
                  sx={{
                    width: { xs: "100%", sm: "auto" },
                    whiteSpace: "nowrap",
                  }}
                  onClick={() => {}}
                >
                  Become a Volunteer
                </CustomButton>
              </Box>

              <IconButton
                onClick={handleToggle}
                sx={{
                  display: { xs: "flex", md: "none" },
                  color: COLORS.primary,
                  border: `1.5px solid ${"rgba(0,0,0,0.15)"}`,
                  borderRadius: "10px",
                  p: "6px",
                  "&:hover": {
                    backgroundColor: "rgba(0,0,0,0.06)",
                  },
                }}
              >
                <MenuRounded />
              </IconButton>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* MOBILE DRAWER  */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleToggle}
        PaperProps={{
          sx: {
            width: "100%",
            maxWidth: 250,
            backgroundColor: COLORS.primary,
            color: "#FFFFFF",
            p: 3,
          },
        }}
      >
        <Box
          onClick={() => navigate("/")}
          sx={{
            cursor: "pointer",
            display: "flex",
            alignItems: "left",
            gap: 1.5,
            transition: "transform 0.2s ease",
            "&:hover": { transform: "scale(1.02)" },
          }}
        >
          <Box
            component="img"
            src="/logo/logo-dark.png"
            sx={{ width: 160, height: "auto" }}
          />
        </Box>

        <List>
          {navItems.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton
                component={Link}
                to={item.path}
                onClick={handleToggle}
                sx={{ py: 2, borderRadius: 2 }}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    fontSize: "1.1rem",
                    fontWeight: 500,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Box sx={{ mt: "auto", pb: 4 }}>
          <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 4 }} />
          <CustomButton
            to={"/auth/onboarding"}
            radius="6px"
            fullWidth
            variant={"outlined"}
            sx={{
              width: { xs: "100%", sm: "auto" },
              whiteSpace: "nowrap",
            }}
            onClick={handleGetStarted}
          >
            Get Started
          </CustomButton>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Header;
