import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Links from './Components/Links/Links';
import Profile from './Components/Profile/Profile';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Links />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
