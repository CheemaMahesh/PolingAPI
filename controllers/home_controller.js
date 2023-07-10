//import question
const Question=require('../models/questions');

//home API page
module.exports.home=async function(req,res){
    try{

        let allApi = await Question.find({})
        .select('-__v -createdAt -updatedAt')
        .exec();

        return res.status(200).json({
            home:allApi,
            Dummy:"4000px port"
        })

    }catch(err){
        if(err){console.log('error while rendering home apis:-',err);
        return res.status(500).json({
            message:'Error in rendering the data at home'
        });
    }
    }
}