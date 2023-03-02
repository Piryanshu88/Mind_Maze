const mongoose=require("mongoose");
require("dotenv").config();
const connection = mongoose.connect("mongodb+srv://saurav:saurav@cluster0.z8zp5.mongodb.net/gameapp?retryWrites=true&w=majority");

module.exports={connection};

