var pg = require('pg');
var conString = "postgres://samjoseph@localhost:5432/pumpsquad2";

var client = new pg.Client(conString);
client.connect()

const getByIdSQL = (id) => {
    return client.query(`SELECT * from productpage where productid=10000000`)
}

const addTechSpecSQL = (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) => {
    return client.query(`INSERT INTO techspecs (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) VALUES (${id},'{${technicalFeatures}}','${designAndFit}','${zippersAndFly}','${pocketConfig}','{${construction}}','{${collarConfig}}','${hemConfig}','${fabricTreatment}','{${materials}}','{${care}}')`)
}



const deleteTechSpecSQL = (id) => {
    return client.query(`delete from techspecs where id=${id}`)
}




module.exports = {
    getByIdSQL,
    addTechSpecSQL,
    deleteTechSpecSQL
}

