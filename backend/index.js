const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

// Sample route
app.get('/numbers/:numberid', (req, res) => {
  const numberId = req.params.numberid;
  res.json({ message: `You requested number ${numberId}` });
});

// Start server
app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});
