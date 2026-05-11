import { type ReactNode } from "react";
import { Box } from "@mui/material";
import { Header, Footer } from "../../components/public";
interface LayoutProps {
  children: ReactNode;
}

function PublicLayout({ children }: LayoutProps) {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Header />

        {children}
        <Footer />
      </Box>
    </>
  );
}

export default PublicLayout;
