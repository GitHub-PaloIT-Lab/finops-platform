const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();

dotenv.config();

app.use(express.json());
app.use(bodyParser.json());

const dataRoutes = require('./routes/dataRoutes');
const costRoutes = require('./routes/costRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const decisionRoutes = require('./routes/decisionRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const alertRoutes = require('./routes/alertRoutes');
const cloudProviderRoutes = require('./routes/cloudProviderRoutes');
const errorMiddleware = require('./middlewares/errorMiddleware');

app.use('/api/data', dataRoutes);
app.use('/api/cost', costRoutes);
app.use('/api/service', serviceRoutes);
app.use('/api/decision', decisionRoutes);
app.use('/api/dashboard', dashboardRoutes);
app.use('/api/alerts', alertRoutes);
app.use('/api/cloud-costs', cloudProviderRoutes);

app.use(errorMiddleware);

module.exports = app;