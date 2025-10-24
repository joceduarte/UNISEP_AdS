import express from "express";

import knex from "knex";

const app = express();

const knex = require("knex")({
  client: "mysql2",
  connection: {
    host: "127.0.0.1",
    port: 3306,
    user: "root",
    password: "joce0612",
    database: "escola",
  },
});

app.use(express.json());

app.get("/", (req, res) => {
  res.send(
    "Ola senhor, bala, maquininha que faz trec,trec, viagra, bala tintla e 8 ??😁😁😁"
  );
});

app.post("/Aluno", [validaNome, validaRa], (req, res) => {
  const { nome, ra } = req.body;
  console.log({ nome, ra });
  res.send({ nome, ra });
});

function validaNome(req, res, next) {
  const { nome, ra } = req.body;
  if (nome) {
    res.send({
      msg: "Falta por o nome Infeliz...🛸🛸🛸",
    });
  }
  next();
}

function validaRa(req, res, next) {
  const { nome, ra } = req.body;
  if (ra) {
    res.send({
      msg: "Coloca o RA, perna e ganço...🛸🛸🛸",
    });
  }
  next();
}

app.listen(8080, () => {
  console.log("O Servidor esta a milhão no Sistema Irmão ✈️✈️🚀🚀🛸🛸🛸 ");
});
