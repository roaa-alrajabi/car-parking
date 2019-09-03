import React,{Component} from 'react';
import Form  from './Component/Form';
import Map from './Component/Map';
import axios from 'axios'

export default class App extends Component{
  state={
    data:[]
  }

 getPark=()=>{
  axios.get("http://localhost:9000/park/false")
   .then(res=>{
   this.setState({
   data:res.data
   })
   console.log(this.state.data)
   })
 }


 updatastate=()=>{
   axios.put("http://localhost:9000/park/")
   .then(res=>{
     this.setState({
       data:res.data
     })
   })
   .catch(error => {
    console.log(error);
  });
  }

  updateblance=()=>{
    axios.put("http://localhost:9000/user/")
    .then(res=>{
     this.setState({
       data:res.data
     })
    })
  }
  


  




  //  booking2=()=>{
  //   if(park.Isvalid==true){
  //     console.log("erfgtfg")
  //   }

  //   else
  //   {
  //     console.log("ffff")

  //   }
  //  }


//    booking2=(number)=>{
//  if(this.state.number===this.state.park.id )
//    {
//      console.log("fffff")
//    }
//    else
//    {
//     console.log("gfgfgfg")
//   }
// }
   
// booking2=(number)=>{
//   let avalibleparking=this.state.park.map(number=>{
//   //  return this.state.number ===this.state.park.id
//   if(number ===this.state.park.id){
//    console.log("tohthoghl")
//   }
//  })
//  return avalibleparking
// }

 
  render(){
  return (
    <>
    <Form getPark={this.getPark} updatastate={this.updatastate} />
    <Map/>
    </>
  );
}
}

