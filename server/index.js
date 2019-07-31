const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const {getByIdSQL, addTechSpecSQL, deleteTechSpecSQL} = require('../database/index')



const app = express();
const port = 2003;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));



/* SERVER FUNCTIONS FOR HANDLING THE ROUTES */


app.get('/api/product/:id', (req, res) => {
  let {id} = req.params;
  getByIdSQL(id)
  .then((data) => {
    res.status(200).send(data.rows);
  })
  .catch((error) => {
    res.status(404).send(error);
  });
})


app.post('/api/product', (req, res) => {
  console.log(req.body)
  let {id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care} = req.body;
  addTechSpecSQL(id,technicalFeatures,designAndFit,zippersAndFly,pocketConfig,construction,collarConfig,hemConfig,fabricTreatment,materials,care)
  .then(() => {
    res.status(201).send('data added!');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
})


app.delete('/api/product/:id', (req,res) => {
  let {id} = req.params;
  deleteTechSpecSQL(id)
    .then(() => {
      res.status(200).send('document deleted')
    })
    .catch((error) => {
      res.status(404).send(error);
    })
})

app.listen(port, () => {console.log('server listening on port' , port)});