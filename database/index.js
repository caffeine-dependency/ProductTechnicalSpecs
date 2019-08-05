var pg = require('pg');
var conString = "postgres://samjoseph:***REMOVED***@localhost:5432/pumpsquad2";

var client = new pg.Client(conString);

client.connect()

module.exports = client