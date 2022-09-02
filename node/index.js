const express = require("express");
const app = express();
const port = 3000;

if (!process.env.DB_HOST) {
  throw new Error("Missing DB_HOST property");
}
if (!process.env.DB_USER) {
  throw new Error("Missing DB_USER property");
}

if (!process.env.DB_PASSWORD) {
  throw new Error("Missing DB_PASSWORD property");
}

if (!process.env.DB_NAME) {
  throw new Error("Missing DB_NAME property");
}

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
const mysql = require("mysql2");
const connection = mysql.createConnection(config);
const createTabelSql = `CREATE TABLE IF NOT EXISTS people (name varchar(255))`;
connection.query(createTabelSql);

app.get("/", (req, res) => {
  const { name } = req.query;
  if (!!name) {
    connection.query(`INSERT INTO people(name) VALUES ('${name}')`);
  }
  connection.query(`SELECT name FROM people`, function (err, rows) {
    res.send(
      `<html>\
      <h1>Full Cycle Rocks</h1>\
      <p>Lista de nomes cadastrada no banco de dados.</p>\
      <ul>\
      ${rows.reduce((string, p) => string + "<li>" + p.name + "</li>", "")}
      </ul>\
    </html>`
    );
  });
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
