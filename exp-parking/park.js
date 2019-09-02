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

/////////hala
router.get('/all', (req, res) => {
   ////hala
  });
  

/////////roaa
  router.put('/park/:id/:status', (req, res) => {

  let id = encodeURIComponent(req.params.id);
  let status = encodeURIComponent(req.params.status);

  console.log("park","id",id)
  console.log("park","status",status)

  mongo.updatepark((result) => {
    res.json(result);
  },id,status)
});










module.exports = router;









