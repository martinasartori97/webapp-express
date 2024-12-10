const express = require('express');
const router = express.Router();
const connection = require('../database/connection')



router.get('/', (req, res) => {
    res.json({
        films: 'all films here'
    })
})





module.exports = router;