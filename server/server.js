const express = require('express');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const PORT = 3001;


app.listen(port, () => {
    console.log(`Example app listening on port ${PORT}`)
  })