const express = require('express');
const app = express();
require('./models/dbconfig');
const postsRoutes= require ('./routes/postsController');

//Créer um middlware
app.use('/', postsRoutes)

app.listen(5500,()=> console.log('Server started: 5500'));
