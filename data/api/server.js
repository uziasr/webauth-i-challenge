const express = require('express');
const helmet = require("helmet");
const cors = require("cors");
const apiRouter = require('./api-router.js');
const configureMiddleware = require('./configure-middleware')

const session = require("express-session"); // 1: npm i express-session
const KnexSessionStorage = require("connect-session-knex")(session); // <<<<<< for storing sessions in db
const knexConnection = require("../db-config");

const server = express();

const sessionConfiguration = {
    name: "session",
    secret: process.env.COOKIE_SECRET || "is it secret ? is it safe?",
    cookie:{
        maxAge: 1000 * 60 * 60,
        secure: process.env.NODE_ENV === 'development'? false: true
    },
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10, // delete expired sessions every 10 minutes
        tablename: "user_sessions",
        sidfieldname: "id",
        createtable: true
      })
  };

configureMiddleware(server)
server.use(helmet());
server.use(cors());
server.use(session(sessionConfiguration));
server.use(express.json())

server.use('/api', apiRouter);

server.get("/", (req, res) => {
    res.json({ api: "up", session: req.session });
  });

module.exports = server;