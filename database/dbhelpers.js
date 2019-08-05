const client = require('./index')

// Technical Spec Queries

const getTechSpecById = (id) => {
    return client.query(`SELECT techspecs.*, array_agg(DISTINCT string_to_array( imgcarousel.imageurl || ',' || imgcarousel.username || ',' || imgcarousel.imgcaption, ',')) AS imagecarousel, json_agg(DISTINCT qanda) as QandA FROM techspecs INNER JOIN imgcarousel ON imgcarousel.productid = techspecs.productid INNER JOIN qanda ON qanda.productid = techspecs.productid WHERE techspecs.productid=10000000 GROUP BY techspecs.productid`)
}

const addTechSpec = (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) => {
    return client.query(`INSERT INTO techspecs (id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care) VALUES (${id},'{${technicalFeatures}}','${designAndFit}','${zippersAndFly}','${pocketConfig}','{${construction}}','{${collarConfig}}','${hemConfig}','${fabricTreatment}','{${materials}}','{${care}}')`)
}

const deleteTechSpec = (id) => {
    return client.query(`delete from techspecs where id=${id}`)
}

// Image Carousel Queries

const addImg = (productid, imageurl, username, imgcaption) => {
    return client.query(`INSERT INTO imgcarousel (productid, imageurl, username, imgcaption) VALUES (${productid}, ${imageurl}, ${username}, ${imgcaption})`)
}

const deleteImg = (photoid) => {
    return client.query(`DELETE FROM imgcarousel WHERE photoid=${photoid}`)
}

// Question and Answer Queries

const addQuestion = (id, productid, questionheader, questioncontent, username, userlocation, userage, useractivity) => {
    return client.query(`INSERT INTO  qanda (id, productid, questionheader, questioncontent, questiondate, thumbsup, thumbsdown, username, userlocation, userage, useractivity) VALUES (${id}, ${productid}, ${questionheader}, ${questioncontent}, ${new Date().toLocaleDateString('en-US', {month : '2-digit',day: '2-digit',year : 'numeric'})}, 0, 0, ${username}, ${userlocation}, ${userage}, ${useractivity})`)
}

const deleteQuestion = (id) => {
    return client.query(`DELETE FROM qanda WHERE id=${id}`)
}


module.exports = {
    getTechSpecById,
    addTechSpec,
    deleteTechSpec,
    addImg,
    addQuestion
}