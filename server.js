const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// middleware
app.use(bodyParser.json());
app.use('/api', userRoutes);
app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);
  await sequelize.sync();
});