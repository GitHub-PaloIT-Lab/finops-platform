import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CostUtilization = ({ cloudProvider }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/cloud-costs`, {
          params: { provider: cloudProvider }
        });
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [cloudProvider]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="CostUtilization">
      <h2>Cost Utilization for {cloudProvider}</h2>
      <table>
        <thead>
          <tr>
            <th>Project/Resource</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CostUtilization;