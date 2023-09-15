import { Routes, Route } from 'react-router-dom'
import './App.css'
import Welcome from './components/Welcome'


function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
        <Welcome />
      </div>
    </>
  );
}

export default App
