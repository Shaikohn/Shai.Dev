import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicyImpostorFutbolero from "./pages/PrivacyPolicyImpostorFutbolero";
import PrivacyPolicyPDB from "./pages/PrivacyPolicyPDB";
import PrivacyPolicyWhispersOfWar from "./pages/PrivacyPolicyWhispersOfWar";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impostorfutbolero/privacy-policy" element={<PrivacyPolicyImpostorFutbolero />} />
      <Route path="/pdb/privacy-policy" element={<PrivacyPolicyPDB />} />
      <Route path="/whispers-of-war/privacy-policy" element={<PrivacyPolicyWhispersOfWar />} />
    </Routes>
  );
}
