const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
