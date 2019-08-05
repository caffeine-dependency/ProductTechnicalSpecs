const {
    getTechSpecById,
    addTechSpec,
    deleteTechSpec,
    addImg,
    addQuestion
} = require('../database/dbhelpers')

// Tech Spec Controllers

const getTechSpec =  (req, res) => {
    let {id} = req.params;
    getTechSpecById(id)
    .then((data) => {
        res.status(200).send(data.rows);
    })
    .catch((error) => {
        res.status(404).send(error);
    });
}
  
  
const createTechSpec = (req, res) => {
    let {id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care} = req.body;
    addTechSpec(id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care)
    .then(() => {
        res.status(201).send('data added!');
    })
    .catch((error) => {
        res.status(404).send(error);
    })
}
  
  
const removeTechSpec = (req,res) => {
    let {id} = req.params;
    deleteTechSpec(id)
        .then(() => {
            res.status(200).send('document deleted')
        })
        .catch((error) => {
            res.status(404).send(error);
        })
}

// Image Carousel Controllers

const insertImg = (req, res) => {
    let {productid, imageurl, username, imgcaption} = req.body;
    addImg(productid, imageurl, username, imgcaption)
        .then(() => {
            res.status(201).send('image added')
        })
        .catch((error) => {
            res.status(404).send('failed to add image')
        })
}

// Question and Answer Controllers

const insertQuestion = (req,res) => {
    let {id, productid, questionheader, questioncontent, username, userlocation, userage, useractivity} = req.body
    addQuestion(id, productid, questionheader, questioncontent, username, userlocation, userage, useractivity)
    .then(() => {
        res.status(201).send('successfully added question!')
    })
    .catch((error) => {
        res.status(404).send('failed to add question')
    })
}



module.exports = {
    getTechSpec,
    createTechSpec,
    removeTechSpec,
    insertImg,
    insertQuestion
}