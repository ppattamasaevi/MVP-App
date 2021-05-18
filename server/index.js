const express = require('express');
const axios = require('axios');
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.static('dist'));

app.get('/todo', (req, res) => {
  const endpoint = 'http://www.boredapi.com/api/activity?participants=1';
  axios.get(endpoint)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => {
      console.log(err.message);
    })
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});