// Vollständige App.jsx
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

// Lernmodule & Übungen
import ExercisePage from './pages/ExercisePage.jsx';
import BuzzwordBingo from './components/BuzzwordBingo.jsx';
import PhaseMatch from './components/PhaseMatch.jsx';
import SingleChoice from './pages/SingleChoice.jsx';
import CaseDetective from './pages/games/CaseDetective.jsx';

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

          {/* Private Routes mit Layout */}
          <Route path="/" element={<PrivateRoute><Layout><Dashboard /></Layout></PrivateRoute>} />
          <Route path="/learn" element={<PrivateRoute><Layout><LearnDashboard /></Layout></PrivateRoute>} />

          {/* Lern-Übungen */}
          <Route path="/learn/exercise" element={<PrivateRoute><Layout><ExercisePage /></Layout></PrivateRoute>} />
          <Route path="/learn/buzzword-bingo" element={<PrivateRoute><Layout><BuzzwordBingo /></Layout></PrivateRoute>} />
          <Route path="/learn/phase-match" element={<PrivateRoute><Layout><PhaseMatch /></Layout></PrivateRoute>} />
          <Route path="/learn/single-choice" element={<PrivateRoute><Layout><SingleChoice /></Layout></PrivateRoute>} />
          <Route path="/case-detective" element={<PrivateRoute><Layout><CaseDetective /></Layout></PrivateRoute>} />

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

          {/* Spiele */}
          <Route path="/spiele" element={<PrivateRoute><Layout><ProjektmanagementDashboard /></Layout></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
