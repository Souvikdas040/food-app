import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function UpdateFood() {
    let[food,setFood]=useState({
        fid:"",
        fname:"",
        price:""
    })
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
      setFood({
      fid:"",
      fname:"",
      price:""
    })
     //setMsg("");
    }
    const updateData=(fid)=>{
      axios.put(`http://localhost:1002/food/update/${fid}`,food)
      .then((res)=>{
        console.log(res.data);
        //setFood(res.data);
        //setMsg(res.data);
      })
      .catch((error)=>{
        console.log(error);
        alert("SOME THING WRONG ON Updating DATA");
      })
    }
  return (
    <div style={{width:"60%",margin:"50px auto"}}>
    <h2>UPDATING FOOD </h2>
    <input type="text" className='form-control mb-4' value={food.fid}
    onChange={(event)=>{
      setFood({
        ...food,
        fid:event.target.value        
      })
    }}placeholder='ENTER THE FOOD ID'/>
    <input type="text" className='form-control mb-4' value={food.fname}
    onChange={(event)=>{
      setFood({
        ...food,
        fname:event.target.value        
      })
    }}placeholder='ENTER THE FOOD NAME'/>
    <input type="text" className='form-control' value={food.price}
    onChange={(event)=>{
        setFood({
        ...food,
        price:event.target.value        
      })
    }}placeholder='ENTER THE FOOD PRICE'/>
    <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={(fid)=>{
      updateData(food.fid);
    }}>UPDATE</button>&nbsp;&nbsp;
    <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
  </div>
  )
}

export default UpdateFood