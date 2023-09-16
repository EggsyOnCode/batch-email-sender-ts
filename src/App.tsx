import { Routes, Route } from "react-router-dom";
import "./App.css";
import Welcome from "./components/Welcome";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
