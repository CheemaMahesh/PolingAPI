const mongoose=require('mongoose');


const questionSchema=new mongoose.Schema({
    question:{
        type:'String',
        required:true,
    },
    options:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Option'  
    }],
    TotalVotes:{
        type:'Number'
    }
    
},{
    timestamps:true
});

//making it model
const Question=mongoose.model('Question',questionSchema);


//exporting model
module.exports=Question;