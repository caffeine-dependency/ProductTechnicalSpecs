var pg = require('pg');
var conString = "postgres://username:password@host/pumpsquad2";

var client = new pg.Client(conString);

client.connect()

module.exports = client