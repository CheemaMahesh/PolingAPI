const express=require('express');
const router=express.Router();


const apiHome=require('../controllers/home_controller');

console.log("routes are loaded");
router.get('/',apiHome.home);
router.use('/questions',require('./question'));
router.use('/options',require('./option'));

module.exports=router;