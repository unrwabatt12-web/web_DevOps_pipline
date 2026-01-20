const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
  res.send('Web container is running 🚀');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
