// Dependencies
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Port & App
const app = express();
const PORT = process.env.PORT || 3001;

// Body data, params and static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

// Start on the port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));