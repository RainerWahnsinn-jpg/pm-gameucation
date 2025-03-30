import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import LearnDashboard from './pages/LearnDashboard.jsx';
import ExercisePage from './pages/ExercisePage.jsx';
import BuzzwordBingo from './components/BuzzwordBingo.jsx';
import PhaseMatch from './components/PhaseMatch.jsx';
import NotFound from './pages/NotFound.jsx';
import Login from './pages/Login.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import SingleChoice from './pages/SingleChoice.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn"
            element={
              <PrivateRoute>
                <LearnDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/exercise"
            element={
              <PrivateRoute>
                <ExercisePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/buzzword-bingo"
            element={
              <PrivateRoute>
                <BuzzwordBingo />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/phase-match"
            element={
              <PrivateRoute>
                <PhaseMatch />
              </PrivateRoute>
            }
          />
          <Route
            path="/learn/single-choice"
            element={
              <PrivateRoute>
                <SingleChoice />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
