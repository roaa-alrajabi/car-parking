

const db =require("../database")

let creatdefult = (cb) => {
  db.parkdata.create({numpark: 1,
    status: true,
    numpark: 2,
    status: true,
    numpark: 3,
    status: true,
    numpark: 4,
    status: true,
    numpark: 5,
    status: true,
    numpark: 6,
    status: true,
    numpark: 7,
    status: true,
    numpark: 8,
    status: true,},
     (err, data) => {
    if (err) {
      cb(err)
    } else {
      cb(data)
    }
  })
}



    ///////roaa
    let getfalse = (cb) => {
      db.userdata.find({status:false}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          cb(data);
        }
      });
    };




   let  updatepark = (cb) => {
      db.userdata.updateOne( {} ,  { $set: { status: true }}, (err, data) => {
        if (err) {
          cb(err);
        } else {
          console.log("data:", data);
          cb(data);
        }
      });
    };






///////hala
let getallpark = (cb) => {
   //////hala
  }


  // let creatpark = (cb) => {
  //   db.userdata.create({ numpark: 2,
      // status: true},
  //      (err, data) => {
  //     if (err) {
  //       cb(err)
  //     } else {
  //       cb(data)
  //     }
  //   })
  // }




 


  module.exports = {
    /////hala
    getallpark,
    //creatpark,
    creatdefult,
////roaa
    getfalse,
    updatepark
   
  }