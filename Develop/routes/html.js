// Required Dependencies
const path = require('path');
const router = require('express').Router();

// Route to note HTML
router.get('/notes', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// All routes for index HTML
router.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
