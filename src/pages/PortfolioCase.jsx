import { Navigate, useParams } from "react-router-dom";
import TechnicalProject from "./TechnicalProject";
import AdditionalTechnicalProject from "./AdditionalTechnicalProject";
import { getGameById } from "../data/games";
import { getAdditionalProjectById } from "../data/projects";

export default function PortfolioCase() {
  const { gameId } = useParams();
  if (getGameById(gameId)) return <TechnicalProject />;
  const project = getAdditionalProjectById(gameId);
  return project ? <AdditionalTechnicalProject project={project} /> : <Navigate to="/" replace />;
}
