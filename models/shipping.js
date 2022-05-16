const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Shipping = new Schema({
    Shipping_Name: {
        type: String
    },
    Shipping_Type: {
        type: String
    },
    Shipping_Catergory: {
        type: String
    },
    Shipping_Description: {
        type: String
    },
    Shipping_Price: {
        type: String
    },
    Shipping_duration:{
        type:String
    }
});

module.exports = mongoose.model('Shipping', Shipping);