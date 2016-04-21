// link to dependencies
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Map = require('../models/map');
var passport = require('passport');

// link to account model
var Account = require('../models/account');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('auth/login', {
        title: 'Login',
        messages: [] });
});

router.get('/instructions', function(req, res, next) {
    res.render('instructions', {
        title: 'Instructions'
    });
});

// get map form
router.get('/map', function(req, res, next) {
    res.render('map', {
        title: 'Map/Form Entry'
    });
});

router.post('/map', function(req, res, next) {

    // save the restaurant
    Map.create({
        postalCode: req.body.postalCode,
        dd1: req.body.dd1,
        dd2: req.body.dd2,
        dd3: req.body.dd3,
        dd4: req.body.dd4,
        dd5: req.body.dd5,
        dd6: req.body.dd6,
        dd7: req.body.dd7,
        dd8: req.body.dd8,
        dd9: req.body.dd9,
        dd10: req.body.dd10,
        dd11: req.body.dd11,
        dd12: req.body.dd12,
        dd13: req.body.dd13,
        dd14: req.body.dd14,
        dd15: req.body.dd15,
        dd16: req.body.dd16,
        dd17: req.body.dd17,
        dd18: req.body.dd18,
        com1: req.body.com1,
        com2: req.body.com2,
        com3: req.body.com3,
        com4: req.body.com4,
        com5: req.body.com5,
        com6: req.body.com6,
        com7: req.body.com7,
        com8: req.body.com8,
        com9: req.body.com9,
        com10: req.body.com10,
        com11: req.body.com11,
        com12: req.body.com12,
        com13: req.body.com13,
        com14: req.body.com14,
        com15: req.body.com15,
        com16: req.body.com16,
        com17: req.body.com17
    });

    // redirect
    res.redirect('/data');
});



// USER HANDLERS //

router.get('/createuser', function(req, res, next) {
    res.render('createuser', {
        title: 'Create Users'
    });
});


// set up the GET handler for the delete users page
router.get('/deleteuser', function (req, res, next) {

    // use the account model to retrieve all users
    Account.find(function (err, accounts) {

        // if we have an error
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {

            // populate data, show the view and pass the data to it
            res.render('deleteuser', {
                title: 'Delete Users',
                users: accounts
            });
        }
    });
});


// get handler for add to display a blank form
router.get('/createuser', isLoggedIn, function (req, res, next) {
    res.render('users/createuser', {
    });
});

// post handler for adding to the form
router.post('/createuser', function (req, res, next) {

    //save new pet store
    Account.create({
            firstname: req.body.firstname,
            username: req.body.username,
            password: req.body.password
        }
    );

    // redirect to auth store page
    res.redirect('/deleteuser');
});

// DELETE
router.get('/delete/:id', function(req, res, next) {
    var id = req.params.id;
    
    Account.remove({_id: id}, function(err){
        if (err) {
            console.log(err);
            res.end(err)
        }
        else {
            res.redirect('/deleteuser');
        }
    });
});



//GET Data Page
// router.get('/data', function(req, res, next) {
//     res.render('data', {
//         title: 'Map Data'
//     });
// });


// Display Data from map and form

router.get('/data', function(req, res, next) {
    Map.find(function (err, maps){
       if (err) {
           console.log(err);
       }
        else {
           console.log(maps);
           res.render('data', {

               title: 'Data',
               data: maps
           });
       }
    });
});

//get handler populate
router.get('/data/:id', function(req, res, next){
   //id variable to store id from the url
    var id = req.params.id;

    Map.findById(id, function (err, details){
        if (err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.render('details', {
                title: 'Data Details',
                data: details
            });
        }
    });

});





//auth check
function isLoggedIn(req, res, next) {
    //is the user authenticated>
    if (req.isAuthenticated()) {
        return next;
    }
    else {
        res.redirect('/auth/login');
    }
}


// make this public so the rest of app can see it
module.exports = router;

