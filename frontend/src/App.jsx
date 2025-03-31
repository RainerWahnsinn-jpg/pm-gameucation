import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import Layout from './components/Layout.jsx';

// Allgemeine Seiten
import Dashboard from './pages/Dashboard.jsx';
import LearnDashboard from './pages/LearnDashboard.jsx';
import Login from './pages/Login.jsx';
import NotFound from './pages/NotFound.jsx';

// Spiele
import BuzzwordBingo from './pages/games/BuzzwordBingo.jsx';
import PhaseMatch from './pages/games/PhaseMatch.jsx';
import MindmapGame from './pages/games/MindmapGame.jsx';
import CaseDetective from './pages/games/CaseDetective.jsx';

// Lernmodule
import SingleChoice from './pages/SingleChoice.jsx';

// Projektmanagement-Themen
import ProjektmanagementDashboard from './pages/ProjektmanagementDashboard.jsx';
import GrundlagenProjektarten from './pages/pm_topics/GrundlagenProjektarten.jsx';
import MagischesDreieck from './pages/pm_topics/MagischesDreieck.jsx';
import Projektstrukturierung from './pages/pm_topics/Projektstrukturierung.jsx';
import AgilesProjektmanagement from './pages/pm_topics/AgilesProjektmanagement.jsx';
import Projektueberwachung from './pages/pm_topics/Projektueberwachung.jsx';
import TeamOrganisation from './pages/pm_topics/TeamOrganisation.jsx';
import StakeholderManagement from './pages/pm_topics/StakeholderManagement.jsx';
import VertragProjektabschluss from './pages/pm_topics/VertragProjektabschluss.jsx';
import ErgaenzteThemen from './pages/pm_topics/ErgaenzteThemen.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />

          {/* Hauptseiten mit Layout */}
          <Route path="/" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
          <Route path="/learn" element={<PrivateRoute><Layout><LearnDashboard /></Layout></PrivateRoute>} />

          {/* Spiele */}
          <Route path="/games/buzzword-bingo" element={<PrivateRoute><Layout><BuzzwordBingo /></Layout></PrivateRoute>} />
          <Route path="/games/phase-match" element={<PrivateRoute><Layout><PhaseMatch /></Layout></PrivateRoute>} />
          <Route path="/games/mindmap-game" element={<PrivateRoute><Layout><MindmapGame /></Layout></PrivateRoute>} />
          <Route path="/games/case-detective" element={<PrivateRoute><Layout><CaseDetective /></Layout></PrivateRoute>} />

          {/* Lernmodule */}
          <Route path="/learn/single-choice" element={<PrivateRoute><Layout><SingleChoice /></Layout></PrivateRoute>} />

          {/* Projektmanagement-Themen */}
          <Route path="/learn/projektmanagement" element={<PrivateRoute><Layout><ProjektmanagementDashboard /></Layout></PrivateRoute>} />
          <Route path="/learn/grundlagen-projektarten" element={<PrivateRoute><Layout><GrundlagenProjektarten /></Layout></PrivateRoute>} />
          <Route path="/learn/magisches-dreieck" element={<PrivateRoute><Layout><MagischesDreieck /></Layout></PrivateRoute>} />
          <Route path="/learn/projektstrukturierung" element={<PrivateRoute><Layout><Projektstrukturierung /></Layout></PrivateRoute>} />
          <Route path="/learn/agiles-projektmanagement" element={<PrivateRoute><Layout><AgilesProjektmanagement /></Layout></PrivateRoute>} />
          <Route path="/learn/projektueberwachung" element={<PrivateRoute><Layout><Projektueberwachung /></Layout></PrivateRoute>} />
          <Route path="/learn/team-organisation" element={<PrivateRoute><Layout><TeamOrganisation /></Layout></PrivateRoute>} />
          <Route path="/learn/stakeholder-management" element={<PrivateRoute><Layout><StakeholderManagement /></Layout></PrivateRoute>} />
          <Route path="/learn/vertrag-projektabschluss" element={<PrivateRoute><Layout><VertragProjektabschluss /></Layout></PrivateRoute>} />
          <Route path="/learn/ergaenzte-themen" element={<PrivateRoute><Layout><ErgaenzteThemen /></Layout></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
