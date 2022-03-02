const { Router } = require('express');
const express = require('express');
const router = express.Router();

const {PostModel} = require('../models/postsModel');


Router.get('/', (req, res) => {
    PostModel.find((err, docs) => {
        console.log(docs);
    })
})

module.exports = router