const express = require("express");
const app = express();

// ... your other express middleware like body-parser

const agenda = require("./lib/agenda");
const Agendash = require("agendash");

const startAgenda = async () => {
  app.use("/dash", Agendash(agenda));
}

app.listen(3002, async () => {
  await startAgenda();
  console.log(`🚀 Agendash is running at port ${3002}`)
});