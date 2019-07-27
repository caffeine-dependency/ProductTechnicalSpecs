var pg = require('pg');
var conString = "postgres://samjoseph@localhost:5432/pumpsquad2";

var client = new pg.Client(conString);
client.connect()

const getByIdSQL = (id) => {
    return client.query(` explain analyze select * from techspecs where id=${id}`)
}

const addTechSpecSQL = (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) => {
    return client.query(`INSERT INTO techspecs (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) VALUES (${id},${technicalFeatures},${designAndFit},${zippersAndFly},${pocketConfig},${construction},${collarConfig},${hemConfig},${fabricTreatment},${materials},${care})`)
}

module.exports = {
    getByIdSQL,
    addTechSpecSQL
}