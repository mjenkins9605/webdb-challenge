const express = require("express");

const knex = require("knex");
const knexConfig = require("./knexfile.js");

const db = knex(knexConfig.development);

const server = express();
server.use(express.json());

server.get("/", (req, res) => {
  res.send(
    "There are three kinds of people in this world, those who can count and those who can not."
  );
});

//projects

server.get("/api/projects", (req, res) => {
    db("projects")
      .then(projects => {
        res.json(projects);
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The project information could not be retrieved."
        });
      });
  });

  //actions

server.get("/api/actions", (req, res) => {
    db("actions")
      .then(actions => {
        res.json(actions);
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The action information could not be retrieved."
        });
      });
  });
  
const port = 5678;
server.listen(port, function() {
  console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
});
