import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alerts from './components/Alerts';
import AutomatedDecisionMaking from './components/AutomatedDecisionMaking';
import CostOptimization from './components/CostOptimization';
import Dashboard from './pages/Dashboard'; // Import Dashboard from pages
import DataAggregation from './components/DataAggregation';
import ServiceReliability from './components/ServiceReliability';
import Sidebar from './components/Sidebar'; // Import Sidebar component
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Sidebar /> {/* Use Sidebar component */}
        </header>
        <Routes>
          <Route path="/" element={<Dashboard />} /> {/* Set Dashboard as main page */}
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/automated-decision-making" element={<AutomatedDecisionMaking />} />
          <Route path="/cost-optimization" element={<CostOptimization />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/data-aggregation" element={<DataAggregation />} />
          <Route path="/service-reliability" element={<ServiceReliability />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
