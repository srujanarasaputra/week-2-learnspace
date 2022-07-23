
import React,{useState} from  "react";
import { Component } from "react";
import "./App.css"

import Test from './Test';




const App = ()=>{
  const [data,setdata] = useState({

username :'',
password  : '' ,
  });
    const [nam,setnam] = useState('')
    const changeHandler = e =>{

      setdata({...data,[e.target.data]:e.target.value})
    }
    const submitHandler = e =>{
      e.preventDefault();
      console.log(data);
      
    }
 
  return(
    <div>
     
    <div>
      <center>
         <h1 style={{background : 'black',color:"white",border:'2px solid white'}}> PG INVENTORY PORTAL!  </h1> 
        <Test />
        <br/>
        
       
       
        <p>
        
        </p>
        
        
        </center>
        <center>
        <div style ={{flexDirection:'row',display:'flex',background:'white',overflowX:'scroll',border:'1px solid red',
 
  width:'1200px',
  height:'150px',}}>
        <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
          <br/>
          <br/>
        <h2>RATINGS BY USERS:</h2>
        </div>
        
        <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
        <br/>
          <br/>
        Name : Chandini<br/>
        Rating:4<br/>
        Comment:Woahh!!loved ur equipments<br/>
        <br/>

    </div>
   
    <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
      <br/>
        <br/>
        Name : Siri<br/>
        Rating:4<br/>
        Comment:kooooool suji<br/>
        <br/>

    </div>
    <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
        <br/>
        <br/>
        Name : Pranay<br/>
        Rating:5<br/>
        Comment:I loved it <br/>
        <br/>

    </div>
    <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
        <br/>
        <br/>
        Name : Teja<br/>
        Rating:5<br/>
        Comment:very good equipment<br/>
        <br/>

    </div>
    <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
      <br/>
        <br/>
        Name : Satya<br/>
        Rating:4<br/>
        Comment:great<br/>
        <br/>

    </div>
    <div style={{border:'2px solid black',height:'150px',minWidth:'250px'}}>
      <br/>
        <br/>
        Name : Bhavani<br/>
        Rating:4<br/>
        Comment:good equipment<br/>
        <br/>

    </div>
    </div>
    </center>
    <br/>
    <br/>
    <br/>
    <button onClick= {()=>alert("U will recieve a news-letter of newly added equipment if subscribed")}>CLICKME</button>
    <br/><br/>
    <center>
    <p style={{background : 'black',color:"white",border:'2px solid white',height:'40px',width:'450px'}}>SUBSCRIBE here <br/> for info of newly added equipment  </p> 
        <div style={{border:'2px solid white',height: '180px',width:'450px',background:'grey'}}><br/>
        <form  >

          username  : {nam}
          
          <input  type = "text" nam = "name"  onChange={(e)=>setnam(e.target.value)}/><br/>
          <br/>
          <label  > e-mail  : </label>
          <input type = "text" name = "username" onChange={changeHandler}/><br/><br/>
          <label > password: </label>
          <input type = "password" data = "password" onChange={changeHandler}/><br/><br/>
          <input type = "submit" value = "subscribe"  /><br/> 

        </form>
       
        </div>
        </center>


    </div>
   
    </div>
  )
}

export default App;
//export default review;
