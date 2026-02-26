import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import LiveAttendance from './pages/LiveAttendance';
import Payroll from './pages/Payroll';
import EmployeeList from './pages/EmployeeList';
import EmployeeProfile from './pages/EmployeeProfile';
import Schedule from './pages/Schedule';
import Reports from './pages/Reports';
import Settings from './pages/Settings';

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Main Routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="/" element={<Layout />}>
              <Route index element={<Navigate to="/dashboard" replace />} />
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="live-attendance" element={<LiveAttendance />} />
              <Route path="payroll" element={<Payroll />} />
              <Route path="employee" element={<EmployeeList />} />
              <Route path="employee/:id" element={<EmployeeProfile />} />
              <Route path="schedule" element={<Schedule />} />
              <Route path="reports" element={<Reports />} />
              <Route path="settings" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
}
