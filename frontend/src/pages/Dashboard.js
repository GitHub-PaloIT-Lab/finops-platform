import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import logo from '../logo.svg';
import '../App.css';
import CostUtilization from '../components/CostUtilization'; // Import CostUtilization component

function Dashboard() {
  const [cloudProvider, setCloudProvider] = useState('aws'); // Default cloud provider

  const handleProviderChange = (event) => {
    setCloudProvider(event.target.value);
  };

  const costData = [
    { name: 'Project A', cost: '$1000' },
    { name: 'Project B', cost: '$2000' },
    { name: 'Resource X', cost: '$500' },
    { name: 'Resource Y', cost: '$1500' },
  ];

  return (
    <div className="Dashboard">
      <header className="Dashboard-header">
        <img src={logo} className="Dashboard-logo" alt="logo" style={{ height: '100px' }} /> {/* Limit logo height to 100 pixels */}
        <Sidebar />
      </header>
      <main>
        <select onChange={handleProviderChange} value={cloudProvider}>
          <option value="aws">AWS</option>
          <option value="azure">Azure</option>
          <option value="gcp">GCP</option>
          <option value="vmware">VMWare</option>
        </select>
        <CostUtilization data={costData} cloudProvider={cloudProvider} /> {/* Pass cloudProvider to CostUtilization */}
      </main>
    </div>
  );
}

export default Dashboard;