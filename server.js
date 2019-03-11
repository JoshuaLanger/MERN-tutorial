const express = require('express');
const mongoose = require('mongoose');

// INITIALIZE APP
const app = express();

// Include routes
const items = require('./routes/api/items');

// MIDDLEWARE
// Body parser
app.use(express.json());

// CONNECT DATABASE
const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log(`MongoDB connected...`))
  .catch(err => console.log(err));

// USE ROUTES
app.use('/api/items', items);

// LISTEN ON PORT
const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
