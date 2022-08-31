// build your server here and require it from index.js

const express = require("express");
const helmet = require("helmet");

const server = express();
const Project = require("./project/router.js");
const Resource = require("./resource/router.js");
const Tasks = require("./task/router.js");

server.use(helmet());
server.use(express.json());
server.use("/api/projects", Project);
server.use("/api/resources", Resource);
server.use("/api/tasks", Tasks);

server.use((err, req, res, next) => {
  res.status(500).json({
    message: err.message,
    stack: err.stack,
  });
});

module.exports = server;
