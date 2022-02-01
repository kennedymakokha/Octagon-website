import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Contact from './pages/contact';
import Home from './pages/home';
import Mission from './pages/mission';
import Origin from './pages/origin';
import Team from './pages/team';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about-us"   element={<Origin />}></Route>
        <Route path="/our-team"   element={<Team />}></Route>
        <Route path="/contact-us"   element={<Contact />}></Route>
        <Route path="/our-mission-vision"   element={<Mission />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
