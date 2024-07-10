const pg = require("pg");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_store_db"
);
const uuid = require("uuid");
const bcrypt = require("bcrypt");