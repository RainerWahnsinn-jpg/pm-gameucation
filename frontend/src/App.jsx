import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/layout/Layout.jsx';

// 🔒 Auth & Error Handling
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

// 📌 Haupt-Dashboards
import Dashboard from './pages/Dashboard.jsx';
import LearnDashboard from './pages/LearnDashboard.jsx';
import ProjektmanagementDashboard from './pages/ProjektmanagementDashboard.jsx';

// 🎮 Spiele
import BuzzwordBingo from './components/games/BuzzwordBingo.jsx';
import PhaseMatch from './components/games/PhaseMatch.jsx';
import MindmapGame from './components/games/MindmapGame.jsx';
import CaseDetective from './components/games/CaseDetective.jsx';
import SingleChoice from './components/games/SingleChoice.jsx';

// 📚 PM-Themen
import GrundlagenProjektarten from './pages/pm_topics/GrundlagenProjektarten.jsx';
import MagischesDreieck from './pages/pm_topics/MagischesDreieck.jsx';
import Projektstrukturierung from './pages/pm_topics/Projektstrukturierung.jsx';
import AgilesProjektmanagement from './pages/pm_topics/AgilesProjektmanagement.jsx';
import Projektueberwachung from './pages/pm_topics/Projektueberwachung.jsx';
import TeamOrganisation from './pages/pm_topics/TeamOrganisation.jsx';
import StakeholderManagement from './pages/pm_topics/StakeholderManagement.jsx';
import VertragProjektabschluss from './pages/pm_topics/VertragProjektabschluss.jsx';
import ErgaenzteThemen from './pages/pm_topics/ErgaenzteThemen.jsx';

// 📂 Themenübersicht PM (Korrektur!)
import PmTopics from './pages/PMTopics.jsx';
import PmLearnings from './pages/PmLearnings.jsx';


// Fixing the casing issue by ensuring consistent import paths
export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* 🔐 Auth-Routen */}
          <Route path="/login" element={<Login />} />

          {/* 📌 Dashboards */}
          <Route path="/" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
          <Route path="/learn" element={<PrivateRoute><Layout><LearnDashboard /></Layout></PrivateRoute>} />
          <Route path="/learn/projektmanagement" element={<PrivateRoute><Layout><ProjektmanagementDashboard /></Layout></PrivateRoute>} />

          {/* 🎮 Spiel-Komponenten */}
          <Route path="/games/buzzword-bingo" element={<PrivateRoute><Layout><BuzzwordBingo /></Layout></PrivateRoute>} />
          <Route path="/games/phase-match" element={<PrivateRoute><Layout><PhaseMatch /></Layout></PrivateRoute>} />
          <Route path="/games/mindmap-game" element={<PrivateRoute><Layout><MindmapGame /></Layout></PrivateRoute>} />
          <Route path="/games/case-detective" element={<PrivateRoute><Layout><CaseDetective /></Layout></PrivateRoute>} />

          {/* 🧠 Prüfungsvorbereitung & Lernmodule */}
          <Route path="/learn/single-choice" element={<PrivateRoute><Layout><SingleChoice /></Layout></PrivateRoute>} />

          {/* 📂 Themenübersicht PM */}
          <Route path="/pm-topics" element={<PrivateRoute><Layout><PmTopics /></Layout></PrivateRoute>} />
          <Route path="/learn/pm-learnings" element={<PrivateRoute><Layout><PmLearnings /></Layout></PrivateRoute>} />


          {/* 📚 Projektmanagement-Themen */}
          <Route path="/learn/grundlagen-projektarten" element={<PrivateRoute><Layout><GrundlagenProjektarten /></Layout></PrivateRoute>} />
          <Route path="/learn/magisches-dreieck" element={<PrivateRoute><Layout><MagischesDreieck /></Layout></PrivateRoute>} />
          <Route path="/learn/projektstrukturierung" element={<PrivateRoute><Layout><Projektstrukturierung /></Layout></PrivateRoute>} />
          <Route path="/learn/agiles-projektmanagement" element={<PrivateRoute><Layout><AgilesProjektmanagement /></Layout></PrivateRoute>} />
          <Route path="/learn/projektueberwachung" element={<PrivateRoute><Layout><Projektueberwachung /></Layout></PrivateRoute>} />
          <Route path="/learn/team-organisation" element={<PrivateRoute><Layout><TeamOrganisation /></Layout></PrivateRoute>} />
          <Route path="/learn/stakeholder-management" element={<PrivateRoute><Layout><StakeholderManagement /></Layout></PrivateRoute>} />
          <Route path="/learn/vertrag-projektabschluss" element={<PrivateRoute><Layout><VertragProjektabschluss /></Layout></PrivateRoute>} />
          <Route path="/learn/ergaenzte-themen" element={<PrivateRoute><Layout><ErgaenzteThemen /></Layout></PrivateRoute>} />

          {/* ❌ Fallback-Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}