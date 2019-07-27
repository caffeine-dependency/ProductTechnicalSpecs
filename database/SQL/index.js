var pg = require('pg');
var conString = "postgres://samjoseph@localhost:5432/pumpsquad2";

var client = new pg.Client(conString);
client.connect().then(() => console.log('connected')).catch((err) => console.error('err'));

const getByIdSQL = (id) => {
    return client.query(` explain analyze select * from techspecs where id=${id}`)
}



module.exports = {
    getByIdSQL
}

    

