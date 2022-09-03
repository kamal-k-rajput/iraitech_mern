import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Homepage } from "./components/Homepage";
import { UserProfile } from "./components/UserProfile";
import { Login } from "./components/Login";
import { Registration } from "./components/Registration";

function App() {
  return (
    <div className="App">
      <h1>use links to go to next route</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
