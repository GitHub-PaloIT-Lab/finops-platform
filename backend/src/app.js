const express = require('express');
const app = express();
app.use(express.json());

const dataRoutes = require('./routes/dataRoutes');
const costRoutes = require('./routes/costRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const decisionRoutes = require('./routes/decisionRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const alertRoutes = require('./routes/alertRoutes');

app.use('/api/data', dataRoutes);
app.use('/api/cost', costRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/decision', decisionRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/alerts', alertRoutes);

module.exports = app;