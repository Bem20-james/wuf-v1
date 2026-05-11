import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/public";
import {
  RegisterPage,
  AboutUsPage,
  ContactPage,
  HomePage,
  ImpactPage,
} from "../pages/public";

const PublicRoutes = () => {
  return (
    <PublicLayout>
      <Routes>
        <Route path="/auth/onboarding" element={<RegisterPage />} />
        <Route index path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/impact" element={<ImpactPage />} />
        <Route path="/contact-us" element={<ContactPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
