import './App.css';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './components/Dashboard'
import HospitalNavbar from './components/HospitalNavbar';
import PatientList from './components/PatientList';
import DoctorList from './components/doctor/DoctorList';
import AppointmentCalendar from './components/Appointments/AppointmentCalendar';
import AppointmentList from './components/Appointments/AppointmentList';
import Prescription from './components/Appointments/Prescription';
import { useState } from 'react';
function App() {
  const sidebarCollapsed = localStorage.getItem('sidebar-collapsed')
  const [isExpanded, setIsExpanded] = useState(sidebarCollapsed ? false : true)
  const handleToggler = () => {
    if (isExpanded) {
      setIsExpanded(false)
      localStorage.setItem('sidebar-collapsed', true);
      return;

    }
    setIsExpanded(true)
    localStorage.removeItem('sidebar-collapsed')
  }
  return (
    <Router>
      <SideBar handleToggler={handleToggler} isExpanded={isExpanded} />
      <div className={isExpanded ? "Maincol" : "MainExp"}>
        <HospitalNavbar />
        <main  >
          <Routes>

            <Route path='/' element={<Dashboard />} />
            <Route path='/patient' element={<PatientList />} />
            <Route path='/doctor' element={<DoctorList />} />
            <Route path='/Appointments' element={<AppointmentCalendar />} />
            <Route path='/Appointments/ManageAppointment' element={<AppointmentList />} />
            <Route path='/Appointments/Prescription/:id' element={<Prescription />} />


          </Routes>
        </main>
      </div>


    </Router>

  );
}

export default App;
