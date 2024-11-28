import React, { useState, useEffect } from 'react';
import { getDataAggregation } from '../api/apiService';

const DataAggregation = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataAggregation();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Data Aggregation</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default DataAggregation;