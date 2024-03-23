const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api', (req, res) => {
    const resBody = {"message": "Hi from B2B Website"};
  res.json(resBody);
});

app.listen(5000, () => console.log('Backend listening on port 5000'));