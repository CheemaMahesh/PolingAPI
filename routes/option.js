//importing expresss
const express=require('express');
const router=express.Router();

const optionAPI=require('../controllers/option_controller');

router.post('/:id/add_vote',optionAPI.vote);
router.get('/:id/delete',optionAPI.destroyOption);


//exporting the option router
module.exports=router;