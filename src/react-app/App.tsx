import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";
import TermsOfUse from "@/react-app/pages/TermsOfUse";
import PrivacyPolicy from "@/react-app/pages/PrivacyPolicy";
import CookiesPolicy from "@/react-app/pages/CookiesPolicy";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/termos-de-uso" element={<TermsOfUse />} />
        <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
        <Route path="/politica-de-cookies" element={<CookiesPolicy />} />
      </Routes>
    </Router>
  );
}
