//localhost Code
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
  if(err){
    console.log(err);
  }
  const db = client.db('baking');
  const projectsCollection = db.collection('projects');
  const projectsRouter = createRouter(projectsCollection);
  app.use('/api/projects', projectsRouter);
})

app.listen(3000, function() {
  console.log(`listening on port ${this.address().port}`);
});
//localhost Code
