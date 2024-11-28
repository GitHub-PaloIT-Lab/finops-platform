import React, { useState, useEffect } from 'react';
import { getAlerts, createAlert } from '../api/apiService';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState('');

  useEffect(() => {
    const fetchAlerts = async () => {
      const result = await getAlerts();
      setAlerts(result);
    };
    fetchAlerts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await createAlert(newAlert);
    setAlerts([...alerts, result]);
  };

  return (
    <div>
      <h2>Alerts</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Alert:</label>
          <input type="text" value={newAlert} onChange={(e) => setNewAlert(e.target.value)} />
        </div>
        <button type="submit">Create Alert</button>
      </form>
      <pre>{JSON.stringify(alerts, null, 2)}</pre>
    </div>
  );
};

export default Alerts;