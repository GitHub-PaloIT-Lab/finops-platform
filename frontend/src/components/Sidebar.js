
import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <nav>
      <ul>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/automated-decision-making">Automated Decision Making</Link></li>
        <li><Link to="/cost-optimization">Cost Optimization</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/data-aggregation">Data Aggregation</Link></li>
        <li><Link to="/service-reliability">Service Reliability</Link></li>
      </ul>
    </nav>
  );
}

export default Sidebar;