var express = require('express');
var router = express.Router();

//link account model
var Account = require('../models/account');


// set up the GET handler for the delete users page
router.get('deleteuser', function (req, res, next) {

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

//delete
router.get('/delete/:id', function(req, res, next) {
   //get the id
    Account.remove({_id: id}, function(err) {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            res.redirect('/deleteuser');
        }
    });
});


module.exports = router;
