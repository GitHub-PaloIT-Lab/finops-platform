import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { getCostOptimization } from '../api/apiService';
import { Pie } from 'react-chartjs-2';

// Register the necessary components
ChartJS.register(ArcElement, Tooltip, Legend);

const CostOptimization = () => {
  const [data, setData] = useState([]);
  const [chartData, setChartData] = useState({
    labels: ['Service A', 'Service B', 'Service C'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
      }
    ]
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getCostOptimization();
        if (result && result.length) {
          const labels = result.map(item => item.service);
          const data = result.map(item => item.cost);
          setChartData({
            labels,
            datasets: [
              {
                data,
                backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
                hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
              }
            ]
          });
        }
        setData(result);
      } catch (error) {
        console.error('Error fetching cost optimization data', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Cost Optimization</h2>
      <Pie data={chartData} />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CostOptimization;