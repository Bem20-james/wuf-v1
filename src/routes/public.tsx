import { Routes, Route } from "react-router-dom";
import PublicLayout from "../layouts/public";
import {
  RegisterPage,
  AboutUsPage,
  ContactPage,
  HomePage,
  ImpactPage,
  DonatePage,
  VolunteerPage,
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
        <Route path="/donate" element={<DonatePage />} />
        <Route path="/volunteer" element={<VolunteerPage />} />
      </Routes>
    </PublicLayout>
  );
};

export default PublicRoutes;
