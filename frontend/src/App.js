import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Careers from './pages/Careers.js';
import Team from './pages/Team';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Otp from './pages/Otp';
import Error from './pages/Error';
import Headers from './components/Header';
import Footer from './components/Footer';
import './index.css'; 
import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        {/* Authentication Routes */}
        <Route path='/' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/otp" element={<Otp />} />
        <Route path='*' element={<Error />} />
        {/* Private/Auth Secured Routes */}
        <Route path='/dashboard' element={<Dashboard />} />
        {/* Public Routes */}
        <Route path='/about-us' element={<About />} />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/careers' element={<Careers />} />
        <Route path='/team' element={<Team />} />
        <Route path='/contact-us' element={<Contact />} />
        {/* Add more routes here as needed */}
      </Routes>
      <Footer/> 
    </>
  );
}

export default App;
