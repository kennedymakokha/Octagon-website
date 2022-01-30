import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home';
import Origin from './pages/origin';
import Team from './pages/team';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/about-us"  exact element={<Origin />}></Route>
        <Route path="/our-team" exact  element={<Team />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
