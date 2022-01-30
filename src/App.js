import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Home from './pages/home';
import Origin from './pages/origin';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/our-origin" element={<Origin />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
