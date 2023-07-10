//importing expresss
const express=require('express');
const router=express.Router();

const questionAPI=require('../controllers/question_controller');

router.post('/create',questionAPI.questions);
router.post('/:id/options/create',questionAPI.options);
router.get('/:id/delete',questionAPI.destroyQuestion);
router.get('/:id',questionAPI.view);

module.exports=router;