import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PrivacyPolicyImpostorFutbolero from "./pages/PrivacyPolicyImpostorFutbolero";
import PrivacyPolicyPDB from "./pages/PrivacyPolicyPDB";
import PrivacyPolicyWhispersOfWar from "./pages/PrivacyPolicyWhispersOfWar";
import GamesHome from "./pages/GamesHome";
import GameDetail from "./pages/GameDetail";
import PortfolioCase from "./pages/PortfolioCase";
import GameSupport from "./pages/GameSupport";
import Legal from "./pages/Legal";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/impostorfutbolero/privacy-policy" element={<PrivacyPolicyImpostorFutbolero />} />
      <Route path="/pdb/privacy-policy" element={<PrivacyPolicyPDB />} />
      <Route path="/whispers-of-war/privacy-policy" element={<PrivacyPolicyWhispersOfWar />} />
      <Route path="/games" element={<GamesHome />} />
      <Route path="/games/:gameId" element={<GameDetail />} />
      <Route path="/games/:gameId/support" element={<GameSupport />} />
      <Route path="/portfolio/:gameId" element={<PortfolioCase />} />
      <Route path="/legal" element={<Legal />} />
    </Routes>
  );
}
