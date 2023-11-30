const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fighterRouter = require('./routes/fighterRouter');

require('dotenv').config({ path: '../config/dev.env' });

const app = express();
const PORT = process.env.PORT || 5000;
const uri = process.env.MONGODB_URL;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(uri, {
});

// Check connection status
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

// Set up API routes
app.use('/api', fighterRouter);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
