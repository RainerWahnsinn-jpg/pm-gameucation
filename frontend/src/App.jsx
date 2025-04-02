import "@picocss/pico/css/pico.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Layout from "./components/layout/Layout.jsx";

// 🔒 Auth & Error Handling
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

// 📌 Haupt-Dashboards
import Dashboard from "./pages/Dashboard.jsx";
import LearningDashboard from "./pages/LearningDashboard.jsx";
import LearnDashboard from "./pages/LearnDashboard.jsx";
import ProjektmanagementDashboard from "./pages/ProjektmanagementDashboard.jsx";

// 🎮 Spiele
import BuzzwordBingo from "./components/games/BuzzwordBingo.jsx";
import PhaseMatch from "./components/games/PhaseMatch.jsx";
import MindmapGame from "./components/games/MindmapGame.jsx";
import CaseDetective from "./components/games/CaseDetective.jsx";
import SingleChoice from "./components/games/SingleChoice.jsx";

// 📚 PM-Themen
import GrundlagenProjektarten from "./pages/pm_topics/GrundlagenProjektarten.jsx";
import MagischesDreieck from "./pages/pm_topics/MagischesDreieck.jsx";
import Projektstrukturierung from "./pages/pm_topics/Projektstrukturierung.jsx";
import AgilesProjektmanagement from "./pages/pm_topics/AgilesProjektmanagement.jsx";
import Projektueberwachung from "./pages/pm_topics/Projektueberwachung.jsx";
import TeamOrganisation from "./pages/pm_topics/TeamOrganisation.jsx";
import StakeholderManagement from "./pages/pm_topics/StakeholderManagement.jsx";
import VertragProjektabschluss from "./pages/pm_topics/VertragProjektabschluss.jsx";
import ErgaenzteThemen from "./pages/pm_topics/ErgaenzteThemen.jsx";

// 📂 Themenübersicht PM & Learnings
import PmTopics from "./pages/PMTopics.jsx";
import Learnings from "./pages/Learnings.jsx";

import AgileMethoden from "./pages/learnings/agile-methoden.jsx";
import KommunikationKonflikte from "./pages/learnings/kommunikation-konflikte.jsx";
import ProjektphasenModelle from "./pages/learnings/projektphasen-modelle.jsx";

// SAP

import SapDashboard from "./pages/sap/SapDashboard.jsx";
import BusinessPartner from "./pages/sap/sd/BusinessPartner.jsx";
import BusinessPartnerAdvanced from "./pages/sap/sd/BusinessPartnerAdvanced.jsx";
import SettlementManagement from "./pages/sap/sd/SettlementManagement.jsx";
import SettlementManagementAdvanced from "./pages/sap/sd/SettlementManagementAdvanced.jsx";
import CreditMemoProcessing from "./pages/sap/sd/CreditMemoProcessing.jsx";
import CreditMemoProcessingAdvanced from "./pages/sap/sd/CreditMemoProcessingAdvanced.jsx";
import PriceUpload from "./pages/sap/sd/PriceUpload.jsx";
import PriceUploadAdvanced from "./pages/sap/sd/PriceUploadAdvanced.jsx";

// 🔖 Finale App-Routes
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🔐 Auth-Routen */}
          <Route path="/login" element={<Login />} />
          {/* 📌 Dashboards */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Layout>
                  <Dashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learning-dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <LearningDashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn-dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <LearnDashboard />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/projektmanagement-dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <ProjektmanagementDashboard />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* SAP */}

          <Route
            path="/sap/sd/price-upload-advanced"
            element={
              <PrivateRoute>
                <Layout>
                  <PriceUploadAdvanced />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/price-upload"
            element={
              <PrivateRoute>
                <Layout>
                  <PriceUpload />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/credit-memo-processing-advanced"
            element={
              <PrivateRoute>
                <Layout>
                  <CreditMemoProcessingAdvanced />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/credit-memo-processing"
            element={
              <PrivateRoute>
                <Layout>
                  <CreditMemoProcessing />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap-dashboard"
            element={
              <PrivateRoute>
                <Layout>
                  <SapDashboard />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/business-partner"
            element={
              <PrivateRoute>
                <Layout>
                  <BusinessPartner />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/settlement-management"
            element={
              <PrivateRoute>
                <Layout>
                  <SettlementManagement />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/business-partner-advanced"
            element={
              <PrivateRoute>
                <Layout>
                  <BusinessPartnerAdvanced />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/sap/sd/settlement-management-advanced"
            element={
              <PrivateRoute>
                <Layout>
                  <SettlementManagementAdvanced />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* 🎮 Spiele */}
          <Route
            path="/games/buzzword-bingo"
            element={
              <PrivateRoute>
                <Layout>
                  <BuzzwordBingo />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/games/phase-match"
            element={
              <PrivateRoute>
                <Layout>
                  <PhaseMatch />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/games/mindmap-game"
            element={
              <PrivateRoute>
                <Layout>
                  <MindmapGame />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/games/case-detective"
            element={
              <PrivateRoute>
                <Layout>
                  <CaseDetective />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/games/single-choice"
            element={
              <PrivateRoute>
                <Layout>
                  <SingleChoice />
                </Layout>
              </PrivateRoute>
            }
          />
          {/* 📖 PM-Themenübersicht */}
          <Route
            path="/pm-topics"
            element={
              <PrivateRoute>
                <Layout>
                  <PmTopics />
                </Layout>
              </PrivateRoute>
            }
          />
          {/* 📚 PM-Learnings Hauptseite */}
          <Route
            path="/learnings"
            element={
              <PrivateRoute>
                <Layout>
                  <Learnings />
                </Layout>
              </PrivateRoute>
            }
          />
          {/* 📚 Learnings Themen */}
          <Route
            path="/learnings/agile-methoden"
            element={
              <PrivateRoute>
                <Layout>
                  <AgileMethoden />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learnings/kommunikation-konflikte"
            element={
              <PrivateRoute>
                <Layout>
                  <KommunikationKonflikte />
                </Layout>
              </PrivateRoute>
            }
          />

          <Route
            path="/learnings/projektphasen-modelle"
            element={
              <PrivateRoute>
                <Layout>
                  <ProjektphasenModelle />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* 📌 Projektmanagement-Themen */}
          <Route
            path="/learn/grundlagen-projektarten"
            element={
              <PrivateRoute>
                <Layout>
                  <GrundlagenProjektarten />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/magisches-dreieck"
            element={
              <PrivateRoute>
                <Layout>
                  <MagischesDreieck />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/projektstrukturierung"
            element={
              <PrivateRoute>
                <Layout>
                  <Projektstrukturierung />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/agiles-projektmanagement"
            element={
              <PrivateRoute>
                <Layout>
                  <AgilesProjektmanagement />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/projektueberwachung"
            element={
              <PrivateRoute>
                <Layout>
                  <Projektueberwachung />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/team-organisation"
            element={
              <PrivateRoute>
                <Layout>
                  <TeamOrganisation />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/stakeholder-management"
            element={
              <PrivateRoute>
                <Layout>
                  <StakeholderManagement />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/vertrag-projektabschluss"
            element={
              <PrivateRoute>
                <Layout>
                  <VertragProjektabschluss />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/ergaenzte-themen"
            element={
              <PrivateRoute>
                <Layout>
                  <ErgaenzteThemen />
                </Layout>
              </PrivateRoute>
            }
          />
          {/* ❌ Fallback-Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
