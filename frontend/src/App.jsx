import '@picocss/pico/css/pico.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

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

          {/* Private Routes */}
          <Route path="/" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
          <Route path="/learn" element={<PrivateRoute><LearnDashboard /></PrivateRoute>} />

          {/* Lern-Übungen */}
          <Route path="/learn/exercise" element={<PrivateRoute><ExercisePage /></PrivateRoute>} />
          <Route path="/learn/buzzword-bingo" element={<PrivateRoute><BuzzwordBingo /></PrivateRoute>} />
          <Route path="/learn/phase-match" element={<PrivateRoute><PhaseMatch /></PrivateRoute>} />
          <Route path="/learn/single-choice" element={<PrivateRoute><SingleChoice /></PrivateRoute>} />

          {/* Projektmanagement-Themen */}
          <Route path="/learn/projektmanagement" element={<PrivateRoute><ProjektmanagementDashboard /></PrivateRoute>} />
          <Route path="/learn/grundlagen-projektarten" element={<PrivateRoute><GrundlagenProjektarten /></PrivateRoute>} />
          <Route path="/learn/magisches-dreieck" element={<PrivateRoute><MagischesDreieck /></PrivateRoute>} />
          <Route path="/learn/projektstrukturierung" element={<PrivateRoute><Projektstrukturierung /></PrivateRoute>} />
          <Route path="/learn/agiles-projektmanagement" element={<PrivateRoute><AgilesProjektmanagement /></PrivateRoute>} />
          <Route path="/learn/projektueberwachung" element={<PrivateRoute><Projektueberwachung /></PrivateRoute>} />
          <Route path="/learn/team-organisation" element={<PrivateRoute><TeamOrganisation /></PrivateRoute>} />
          <Route path="/learn/stakeholder-management" element={<PrivateRoute><StakeholderManagement /></PrivateRoute>} />
          <Route path="/learn/vertrag-projektabschluss" element={<PrivateRoute><VertragProjektabschluss /></PrivateRoute>} />
          <Route path="/learn/ergaenzte-themen" element={<PrivateRoute><ErgaenzteThemen /></PrivateRoute>} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
