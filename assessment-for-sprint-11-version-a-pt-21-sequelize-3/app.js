require('express-async-errors');
require('dotenv').config();
const express = require('express');
const app = express();
app.use(express.json());
const Bread = require('./db/models').Bread;



// GET /breads - Returns all the entries in the Breads table
app.get('/breads', async (req, res) => {
  try {
    const breads = await Bread.findAll();
    res.status(200).json(breads);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

// POST /breads - Create an entry in the Breads table
app.post('/breads', async (req, res) => {
  const { name, needsRise } = req.body;
  try {
    const bread = await Bread.create({ name, needsRise });
    res.status(200).json(bread);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server Error');
  }
});

if (require.main === module) {
  const port = 8003;
  app.listen(port, () => console.log('Server-3 is listening on port', port));
} else {
  module.exports = app;
}
