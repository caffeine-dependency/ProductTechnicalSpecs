require('newrelic');
const express = require('express');
const path = require('path');
const parser = require('body-parser');
const cors = require('cors');
const clusters = require('cluster')
const numCPUs = require('os').cpus().length
const router = require('./routes')


const app = express();
const port = 2003;

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use('/api', router)





if (clusters.isMaster) {
  for (let i = 0; i < numCPUs; i++) {
    clusters.fork();
  }
} else {
  app.listen(port, () => {console.log('server listening on port' , port)});
}
