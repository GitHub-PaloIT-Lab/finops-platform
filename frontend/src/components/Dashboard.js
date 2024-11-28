import React, { useState, useEffect } from 'react';
import { getDashboard } from '../api/apiService';

const Dashboard = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDashboard();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Dashboard;