const client = require('./index')

const getById = (id) => {
    return client.query(`SELECT techspecs.*, array_agg(DISTINCT string_to_array( imgcarousel.imageurl || ',' || imgcarousel.username || ',' || imgcarousel.imgcaption, ',')) AS imagecarousel, json_agg(DISTINCT qanda) as QandA FROM techspecs INNER JOIN imgcarousel ON imgcarousel.productid = techspecs.productid INNER JOIN qanda ON qanda.productid = techspecs.productid WHERE techspecs.productid=10000000 GROUP BY techspecs.productid`)
}

const addTechSpec = (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) => {
    return client.query(`INSERT INTO techspecs (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) VALUES (${id},'{${technicalFeatures}}','${designAndFit}','${zippersAndFly}','${pocketConfig}','{${construction}}','{${collarConfig}}','${hemConfig}','${fabricTreatment}','{${materials}}','{${care}}')`)
}

const addImg = (productid, imageurl, username, caption) => {
    return client.query(`Insert Into imgcarousel (productid, imageurl, username, caption) VALUES (${productid}, ${imageurl}, ${username}, ${caption})`)
}

const addQuestion = (id, productid, questionheader, questioncontent, questiondate, thumbsup, thumbsdown, username, userlocation, userage, useractivity) => {
    return client.query(`INSERT INTO  qanda (id, productid, questionheader, questioncontent, questiondate, thumbsup, thumbsdown, username, userlocation, userage, useractivity) VALUES (${id}, ${productid}, ${questionheader}, ${questioncontent}, ${questiondate}, ${thumbsup}, ${thumbsdown}, ${username}, ${userlocation}, ${userage}, ${useractivity})`)
}





const deleteTechSpec = (id) => {
    return client.query(`delete from techspecs where id=${id}`)
}




module.exports = {
    getById,
    addTechSpec,
    deleteTechSpec,
}