import React, { useState, useEffect } from 'react';
import { getServiceReliability } from '../api/apiService';

const ServiceReliability = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getServiceReliability();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <div>
      <h2>Service Reliability</h2>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default ServiceReliability;