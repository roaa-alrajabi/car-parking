const express = require("express");
const cors = require("cors");

var router = express.Router();


const mongo =require ("../db-parking/parkdb")



/////////////////////
router.get('/', (req, res) => {
  res.send("park router");
});


router.get('/defult', (req, res) => {
  mongo.creatdefult((result) => {
    res.json(result);
  })
});

////roaa//////
router.get('/false', (req, res) => {
  console.log("dfghgf")
  mongo.getfalse((result) => {
    res.json(result);
  })
});



/////////roaa
router.put('/false', (req, res) => {

  mongo.updatepark((result) => {
    res.json(result);
  })
});







/////////hala
router.get('/all', (req, res) => {
   ////hala
  });
  











module.exports = router;









