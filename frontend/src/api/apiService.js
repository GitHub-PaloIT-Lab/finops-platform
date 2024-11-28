import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api';

export const getDataAggregation = async (startDate, endDate) => {
  const response = await axios.get(`${API_BASE_URL}/data/aggregate`, {
    params: { startDate, endDate }
  });
  return response.data;
};

export const getCostOptimization = async (startDate, endDate) => {
  const response = await axios.get(`${API_BASE_URL}/cost/optimization`, {
    params: { startDate, endDate }
  });
  return response.data;
};

export const getServiceReliability = async (serviceId) => {
  const response = await axios.get(`${API_BASE_URL}/service/reliability`, {
    params: { serviceId }
  });
  return response.data;
};

export const automateDecision = async (rules, modelId) => {
  const response = await axios.post(`${API_BASE_URL}/decision/automate`, {
    rules, modelId
  });
  return response.data;
};

export const getDashboard = async (teamId) => {
  const response = await axios.get(`${API_BASE_URL}/dashboard`, {
    params: { teamId }
  });
  return response.data;
};

export const getAlerts = async (type) => {
  const response = await axios.get(`${API_BASE_URL}/alerts`, {
    params: { type }
  });
  return response.data;
};

export const createAlert = async (alert) => {
  const response = await axios.post(`${API_BASE_URL}/alerts`, {
    alert
  });
  return response.data;
};