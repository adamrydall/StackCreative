// link to mongoose
var mongoose = require('mongoose');

// define the article schema
var mapSchema = new mongoose.Schema({
    created: {
        type: Date,
        default: Date.now
    },

    postalCode: {
        type: String,
        default: '',
        required: 'Postal Code Cannot be Blank'
    },
    dd1: {
        type: String,
        default: ''
    },
    dd2: {
        type: String,
        default: ''
    },
    dd3: {
        type: String,
        default: ''
    },
    dd4: {
        type: String,
        default: ''
    },
    dd5: {
        type: String,
        default: ''
    },
    dd6: {
        type: String,
        default: ''
    },
    dd7: {
        type: String,
        default: ''
    },
    dd8: {
        type: String,
        default: ''
    },
    dd9: {
        type: String,
        default: ''
    },
    dd10: {
        type: String,
        default: ''
    },
    dd11: {
        type: String,
        default: ''
    },
    dd12: {
        type: String,
        default: ''
    },
    dd13: {
        type: String,
        default: ''
    },
    dd14: {
        type: String,
        default: ''
    },
    dd15: {
        type: String,
        default: ''
    },
    dd16: {
        type: String,
        default: ''
    },
    dd17: {
        type: String,
        default: ''
    },
    dd18: {
        type: String,
        default: ''
    },
    com1: {
        type: String,
        default: ''
    },
    com2: {
        type: String,
        default: ''
    },
    com3: {
        type: String,
        default: ''
    },
    com4: {
        type: String,
        default: ''
    },
    com5: {
        type: String,
        default: ''
    },
    com6: {
        type: String,
        default: ''
    },
    com7: {
        type: String,
        default: ''
    },
    com8: {
        type: String,
        default: ''
    },
    com9: {
        type: String,
        default: ''
    },
    com10: {
        type: String,
        default: ''
    },
    com11: {
        type: String,
        default: ''
    },
    com12: {
        type: String,
        default: ''
    },
    com13: {
        type: String,
        default: ''
    },
    com14: {
        type: String,
        default: ''
    },
    com15: {
        type: String,
        default: ''
    },
    com16: {
        type: String,
        default: ''
    },
    com17: {
        type: String,
        default: ''
    }
});

// make it public
module.exports = mongoose.model('Map', mapSchema);
