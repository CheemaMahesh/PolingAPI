//import model
const Question=require('../models/questions');
const Option=require('../models/options');

//creating question
module.exports.questions=async function(req,res){
    try{
        let question=await Question.create({
            question:req.body.question,
            TotalVotes:0
        });
                console.log(question);

        // if(question){
            return res.status(200).json({
                message:"question has been created"
            })
        // }
       
    }catch(err){
        console.log("error while creatinga question:-",err);
        return res.status(500).json({
            message:'cannot create a question'
        });
    }
}


//creating options 
module.exports.options=async function(req,res){
    try{

        let question=await Question.findById(req.body.id);
        if(question){
            let option=await Option.create({
                option:req.body.option,
                question:req.body.id,
                votes:0
              });

              question.options.push(option);
              question.save();
              console.log("option=============",option);

              return res.status(200).json({
                message:"option has been created"
            })
        }  
    }catch(err){console.log("error while creating the options:",err);
    return res.status(500).json({
        message:"can't add options"
    })
}
}


//to delete a question and it's options
module.exports.destroyQuestion=async function(req,res){
    try{

        let question=await Question.findById(req.params.id);
        if(question.TotalVotes==0){
            await question.deleteOne();
            await Option.deleteMany({question:req.params.id});
        return res.status(200).json({
            message:"question and it's options were deleted"
        });
        }else{
            return res.status(500).json({
                message:"can not delete, The question contains votes"
            });
        }
    }catch(err){
        if(err){console.log("error while deleting the question");
    return res.status(500).json({
        message:'Error while deleing the question'
    })}
    }
}



//to view a question
module.exports.view=async function(req,res){
    try{

let question = await Question.findById(req.params.id)
      .populate({
        path: 'options',
        select: '-__v -createdAt -updatedAt -question'
      })
      .select('-__v -createdAt -updatedAt')
      .exec();

return res.status(200).json({
    message:"here is your question",
    question:question
});
    }catch(err){
        if(err){
            console.log("error while viewing a question:-",err);
            return res.status(500).json({
                message:"Can not view the question"
            })
        }

    }
} 
