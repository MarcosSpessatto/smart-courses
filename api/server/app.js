const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const db = require('./db/Database');
const Database = new db();

Database.initialize();

const app = express();

app.options('*', cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./modules')(app);

module.exports = app;
