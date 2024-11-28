import React, { useState, useEffect } from 'react';
import { getCostOptimization } from '../api/apiService';

const CostOptimization = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getCostOptimization();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Cost Optimization</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default CostOptimization;