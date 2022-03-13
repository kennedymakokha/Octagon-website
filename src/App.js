import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Consaltancy from './pages/consultancy';
import Contact from './pages/contact';
import Erp from './pages/Erp';
import ErpElement from './pages/ErpElement';

import Home from './pages/home';
import Login from './pages/login';
import Mission from './pages/mission';
import Origin from './pages/origin';
import Profile from './pages/profile';
import Project from './pages/project';
import Team from './pages/team';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about-us" element={<Origin />}></Route>
        <Route path="/our-team" element={<Team />}></Route>
        <Route path="/contact-us" element={<Contact />}></Route>
        <Route path="/our-mission-vision" element={<Mission />}></Route>
        <Route path="/our-projects" element={<Project />}></Route>
        <Route path="/erp" element={<Erp />}></Route>
      
        <Route path="/erp/:erpelement" element={<ErpElement />}></Route>
        <Route path="/consultancy" element={<Consaltancy />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
