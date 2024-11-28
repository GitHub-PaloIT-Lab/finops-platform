import React, { useState } from 'react';
import { automateDecision } from '../api/apiService';

const AutomatedDecisionMaking = () => {
  const [rules, setRules] = useState('');
  const [modelId, setModelId] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await automateDecision(rules, modelId);
    setResponse(result);
  };

  return (
    <div>
      <h2>Automated Decision Making</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Rules:</label>
          <input type="text" value={rules} onChange={(e) => setRules(e.target.value)} />
        </div>
        <div>
          <label>Model ID:</label>
          <input type="text" value={modelId} onChange={(e) => setModelId(e.target.value)} />
        </div>
        <button type="submit">Automate Decision</button>
      </form>
      {response && <pre>{JSON.stringify(response, null, 2)}</pre>}
    </div>
  );
};

export default AutomatedDecisionMaking;