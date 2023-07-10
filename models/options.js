//importing the mongoose
const mongoose=require('mongoose');

const optionSchema=new mongoose.Schema({
    option:{
        type:'String',
        required:true
    },
    votes:{
        type:'Number',
        required:true
    },
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question'
    }
},{timestamps:true});

const Option=mongoose.model('Option',optionSchema);

module.exports=Option;