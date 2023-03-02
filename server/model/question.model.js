const mongoose = require("mongoose");

const questionSchema = mongoose.Schema({
    questionName:{type:String,required:true},
    category:{type:String,required:true},
    level:{type:String,required:true},
    options:{type:Array,required:true},
    marks:{type:Number,required:true}
});

const QuestionModel = mongoose.model("question",questionSchema);

module.exports={QuestionModel}