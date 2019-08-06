var pg = require('pg');
var conString = "postgres://[username]:[password]@localhost:5432/arcteryx";

var client = new pg.Client(conString);

client.connect()

module.exports = client