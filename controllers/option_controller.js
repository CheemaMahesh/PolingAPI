//import model
const Question=require('../models/questions');
const Option=require('../models/options');

//for deleting an option
module.exports.destroyOption = async function(req, res) {
    try {
      let option = await Option.findOne({ _id: req.params.id });
  
      if (!option) {
        return res.status(404).json({
          message: "Option not found"
        });
      }
  
      console.log(option);
      if (option.votes == 0) {
        await option.deleteOne();
        return res.status(200).json({
          message: "Option Deleted Successfully"
        });
      } else {
        return res.status(500).json({
          message: "Cannot delete the option. It contains votes."
        });
      }
    } catch (err) {
      console.log("Error while deleting an option:", err);
      return res.status(500).json({
        message: "Cannot delete option"
      });
    }
  };
  



//for voting to an option
module.exports.vote=async function(req,res){
    try{
        let option=await Option.findById(req.params.id);
        
            let question=await Question.findById(option.question);
            option.votes= option.votes+1;
            question.TotalVotes=question.TotalVotes+1;
            console.log("total votes for this function:-",  option.votes+1 );
        
        option.save();
        question.save();
        return res.status(200).json({message:"Voted Successfuly"});


    }catch(err){
        if(err){console.log("err while voting an option :-",err)
        return res.status(500).json({
            message:"can not vote"
        })}
    }
}