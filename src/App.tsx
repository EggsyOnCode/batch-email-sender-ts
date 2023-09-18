import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";
import Configuration from "./components/Configuration";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/" element={<Welcome />} />
          <Route path="/config" element={<Configuration/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
