import "@picocss/pico/css/pico.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import Layout from "./components/layout/Layout.jsx";

// 🔒 Auth & Error Handling
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";

// 📌 Dashboards
import Dashboard from "./pages/Dashboard.jsx";
import LearnDashboard from "./pages/LearnDashboard.jsx";
import LearningDashboard from "./pages/LearningDashboard.jsx";
import ProjektmanagementDashboard from "./pages/pm/ProjektmanagementDashboard.jsx"; // Zentraler Einstiegspunkt für PM-Spiele
import SapDashboard from "./pages/sap/SapDashboard.jsx";

// 📚 SAP SD Themen
import BusinessPartner from "./pages/sap/sd/BusinessPartner.jsx";
import SettlementManagement from "./pages/sap/sd/SettlementManagement.jsx";
import CreditMemoProcessing from "./pages/sap/sd/CreditMemoProcessing.jsx";
import PriceUpload from "./pages/sap/sd/PriceUpload.jsx";
import Permissions from "./pages/sap/sd/Permissions.jsx";
import CoreDataServices from "./pages/sap/sd/CoreDataServices.jsx";

// 🎮 Spiele
import BuzzwordBingo from "./components/games/BuzzwordBingo.jsx";
import PhaseMatch from "./components/games/PhaseMatch.jsx";
import MindmapGame from "./components/games/MindmapGame.jsx";
import CaseDetective from "./components/games/CaseDetective.jsx";
import SingleChoice from "./components/games/SingleChoice.jsx";

// 📖 PM-Themenübersicht
import PmTopics from "./pages/pm/topics/PMTopics.jsx"; // Über das Dashboard zugänglich

// 📚 Learnings Themen
import Learnings from "./pages/Learnings.jsx";
import AgileMethoden from "./pages/learnings/agile-methoden.jsx";
import KommunikationKonflikte from "./pages/learnings/kommunikation-konflikte.jsx";
import ProjektphasenModelle from "./pages/learnings/projektphasen-modelle.jsx";

// 📌 Projektmanagement-Themen
import AgilesProjektmanagement from "./pages/pm/topics/AgilesProjektmanagement.jsx";
import ErgaenzteThemen from "./pages/pm/topics/ErgaenzteThemen.jsx";
import GrundlagenProjektarten from "./pages/pm/topics/GrundlagenProjektarten.jsx";
import MagischesDreieck from "./pages/pm/topics/MagischesDreieck.jsx";
import Projektstrukturierung from "./pages/pm/topics/Projektstrukturierung.jsx";
import Projektueberwachung from "./pages/pm/topics/Projektueberwachung.jsx";
import StakeholderManagement from "./pages/pm/topics/StakeholderManagement.jsx";
import TeamOrganisation from "./pages/pm/topics/TeamOrganisation.jsx";
import VertragProjektabschluss from "./pages/pm/topics/VertragProjektabschluss.jsx";

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

          {/* 📚 SAP SD Themen */}
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

          {/* 📊 Business Partner */}
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

          {/* 💰 Settlement Management */}
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

          {/* 📄 Gutschriftprozesse */}
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

          {/* 💡 Preisupload */}
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

          {/* 🔐 Berechtigungen */}
          <Route
            path="/sap/sd/permissions"
            element={
              <PrivateRoute>
                <Layout>
                  <Permissions />
                </Layout>
              </PrivateRoute>
            }
          />

          {/* 📊 Core Data Services */}
          <Route
            path="/sap/sd/core-data-services"
            element={
              <PrivateRoute>
                <Layout>
                  <CoreDataServices />
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

          {/* 📚 Learnings Themen */}
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
            path="/pm/topics/grundlagen-projektarten"
            element={
              <PrivateRoute>
                <Layout>
                  <GrundlagenProjektarten />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/magisches-dreieck"
            element={
              <PrivateRoute>
                <Layout>
                  <MagischesDreieck />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/projektstrukturierung"
            element={
              <PrivateRoute>
                <Layout>
                  <Projektstrukturierung />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/agiles-projektmanagement"
            element={
              <PrivateRoute>
                <Layout>
                  <AgilesProjektmanagement />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/projektueberwachung"
            element={
              <PrivateRoute>
                <Layout>
                  <Projektueberwachung />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/team-organisation"
            element={
              <PrivateRoute>
                <Layout>
                  <TeamOrganisation />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/stakeholder-management"
            element={
              <PrivateRoute>
                <Layout>
                  <StakeholderManagement />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/vertrag-projektabschluss"
            element={
              <PrivateRoute>
                <Layout>
                  <VertragProjektabschluss />
                </Layout>
              </PrivateRoute>
            }
          />
          <Route
            path="/pm/topics/ergaenzte-themen"
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
