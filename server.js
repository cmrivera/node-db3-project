const express = require("express");

const SchemeRouter = require("./schemes/scheme-router.js");

const server = express();

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to my server!!" });
});

server.use(express.json());
server.use("/schemes", SchemeRouter);

module.exports = server;
