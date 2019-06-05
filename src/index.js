require("dotenv").config();

const express = require("express");
const app = express();
const package = require("../package.json");
const {
  env: { PORT }
} = process;

app.listen(PORT || 3001, () =>
  console.log(
    `${package.name} ${package.version} up and running on port ${PORT}`
  )
);
