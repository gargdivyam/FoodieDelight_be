const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const bodyParser = require('body-parser');
// const config = require('config');

const app = express();

//connect to mongoDB
connectDB();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/restaurants', require('./routes/restaurtant'));

// Custom error handler (Optional)
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));