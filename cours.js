const mongoose = require('mongoose');
const coursSchema= mongoose.Schema({
    name:String,
    module:String,
    category:String
});

module.exports= mongoose.model("cours",coursSchema);