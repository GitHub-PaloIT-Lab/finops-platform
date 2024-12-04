import React, { useState, useEffect } from 'react';
import { getAlerts, createAlert } from '../api/apiService';

const Alerts = () => {
  const [alerts, setAlerts] = useState([]);
  const [newAlert, setNewAlert] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const result = await getAlerts();
        setAlerts(result);
      } catch (err) {
        setError('Failed to fetch alerts');
      }
    };
    fetchAlerts();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await createAlert(newAlert);
      setAlerts([...alerts, result]);
    } catch (err) {
      setError('Failed to create alert');
    }
  };

  return (
    <div>
      <h2>Alerts</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
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