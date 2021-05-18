const express = require('express');
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.static('dist'));



app.listen(PORT, () => {
  console.log(`Server listening on PORT ${PORT}`);
});