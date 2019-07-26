const express = require('express');
const path = require('path');
const parser = require('body-parser');
const db = require('../database/index.js');
const cors = require('cors');
const {getByID, addTechSpec, deleteTechSpec, updateTechSpec} = require('../database/dbhelpers')



const app = express();
const port = 2003;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));



/* SERVER FUNCTIONS FOR HANDLING THE ROUTES */

app.get('/api/product/:id', (req, res) => {
  let { id } = req.params;
  getByID({id})
  .then((data) => {
    res.status(200).send(data);
  })
  .catch((error) => {
    res.status(404).send(error);
  });
})

app.post('/api/product', (req, res) => {
  let { techSpec } = req.params;
  addTechSpec({ techSpec })
  .then(() => {
    res.status(200).send('data added!');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});


app.delete('/api/product/:id', (req, res) => {
  let { id } = req.params;
  deleteTechSpec(id)
  .then(() => {
    res.status(200).send('document deleted');
  })
  .catch((error) => {
    res.status(404).send(error);
  })
});

app.listen(port, () => {console.log('server listening on port' , port)});