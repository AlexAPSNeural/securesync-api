const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Routes
app.get('/api/sync', (req, res, next) => {
    res.send({ message: 'Sync API Endpoint' });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send({ error: 'An unexpected error occurred!' });
});

app.listen(PORT, () => {
    console.log(`SecureSync API server is running on port ${PORT}`);
});