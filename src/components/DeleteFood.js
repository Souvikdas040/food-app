import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function DeleteFood() {
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
        setMsg("");
    }
    const deleteData=(fid)=>{
        axios.delete(`http://localhost:1002/food/delete/${fid}`)
        .then((res)=>{
            console.log(res.data);
            setFood(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WRONG ON DELETING DATA");
        })
    }

    return (
        <div style={{width: "60%", margin: "50px auto"}}>
            <h2>DELETE FOOD</h2>
            <input type="text" className='form-control' value={food.fid}
            onChange={(event)=>{
            setFood({
                ...food,
                fid:event.target.value        
            })
            }}placeholder='ENTER THE FOOD ID'/>
        
            <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={(fid)=>{
                deleteData(food.fid);
            }}>DELETE</button>&nbsp;&nbsp;
            <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>REFRESH</button>
            <h3>{msg}</h3>
        </div>
    )
}

export default DeleteFood
