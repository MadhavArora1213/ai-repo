const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Import routes
const exampleRoutes = require('./routes/example');

// Middleware
app.use(express.json());

// Mount routes
app.use('/api/example', exampleRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});