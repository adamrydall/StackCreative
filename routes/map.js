var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Map = require('../models/map');
var passport = require('passport');
// GET handler for map
router.get('/map', function(req, res, next) {

    res.render('/map', {
        title: 'Map'
    });
});

router.post('/map', function(req, res, next) {

    // save the restaurant
    Map.create({
        dd1: req.body.dd1,
        com1: req.body.com1
    });

    // redirect
    res.redirect('/data');
});