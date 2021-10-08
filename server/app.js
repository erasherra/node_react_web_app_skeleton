const express = require("express");

const config = require("./config");
const routes = require('./routes');

const PORT = config.PORT;

const app = express();

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});