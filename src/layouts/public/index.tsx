import { type ReactNode } from "react";
import { Box } from "@mui/material";
import { Header, Footer } from "../../components/public";
interface LayoutProps {
  children: ReactNode;
}

function PublicLayout({ children }: LayoutProps) {
  const noLayoutRoutes = ["/donate"];
  const currentPath = window.location.pathname;
  const showHeader = !noLayoutRoutes.includes(currentPath);

  return (
    <>
      <Box sx={{ width: "100%" }}>
        {showHeader && <Header />}

        {children}
        {showHeader && <Footer />}
      </Box>
    </>
  );
}

export default PublicLayout;
