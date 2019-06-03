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
  
  server.get("/api/projects/:id", (req, res) => {
    const { id } = req.params;
    db("projects")
      .where({ id: id })
      .first()
      .then(projects => {
        db("actions")
          .where({ project_id: id })
          .then(actions => {
            projects.actions = actions;
            return res.status(200).json(projects);
          });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The project information could not be retrieved."
        });
      });
  });
  
  server.post("/api/projects", (req, res) => {
    db("projects")
      .insert(req.body)
      .then(projects => {
        res.status(201).json({ message: "Successfully created project." });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "There was an error while saving the project to the database."
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
  
  server.get("/api/actions/:id", (req, res) => {
    const actionID = req.params.id;
    db("actions")
      .where({ id: actionID })
      .then(action => {
        res.status(200).json(action);
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "The action information could not be retrieved."
        });
      });
  });
  
  server.post("/api/actions", (req, res) => {
    db("actions")
      .insert(req.body)
      .then(actions => {
        res.status(201).json({ message: "Successfully created action." });
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: "There was an error while saving the action to the database."
        });
      });
  });
  
  const port = 5678;
  server.listen(port, function() {
    console.log(`\n=== Web API Listening on http://localhost:${port} ===\n`);
  });
