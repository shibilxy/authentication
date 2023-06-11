import React from 'react';
import './index.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GateOne from './gate-one/GateOne';
import GateTwo from './gate-two/GateTwo';
import FinalGate from './final-gate/FinalGate';
import Home from './home/Home';
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/authentication" element={<GateOne />} />
        <Route  path="/GateTwo"element={<GateTwo />} />  
        <Route  path="/FinalGate"element={<FinalGate/>} /> 
        <Route  path="/Home" element={<Home/>}   />
      </Routes>
    </Router>
  );
}

export default App;
