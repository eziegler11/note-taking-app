// Dependencies
const express = require('express');
const api = require('./routes/api');
const html = require('./routes/html');

// Port & App
const app = express();
const PORT = process.env.PORT || 3001;

// Body data, params and static
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware
app.use('/api', api);
app.use('/', html);

// Start on the port
app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}/`));