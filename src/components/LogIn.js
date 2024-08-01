//import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function LogIn() {
    let[register,setRegister]=useState({
        uname:"",
        pass:""
    })
    const [msg, setMsg] = useState("");
    const navigate=useNavigate();
    const refreshData=()=>{
        setRegister({
            uname:"",
            pass:""
        })
        setMsg("");
    }
    const getData = (uname, pass) => {
        axios.get(`http://localhost:1002/register/login/${uname}/${pass}`)
        .then((res)=>{
            console.log(res.data);
            //setRegister(res.data);
            if(res.data==="LOGIN SUCCESSFULL")
            {
                navigate("/nav");
            }
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("PLEASE ENTER YOUR VALID USERNAME OR PASSWORD");
        })
    }
    return (
        <div style={{padding: '2rem', width: "50%", margin: "50px auto", border: '1px solid lightgrey', borderRadius: '10px'}}>
            <h2 style={{fontSize: '50px', fontWeight: 'bold'}}>Login Form</h2>
            <img src='https://th.bing.com/th/id/OIP.iOMYfJOoHuYjVpMJmi_dbwHaH2?rs=1&pid=ImgDetMain' alt='FoodAppPic' width={"380"} height={"380"} style={{padding: '1em'}} />
            <input type="text" className='form-control mb-4' value={register.uname}
            onChange={(event)=>{
            setRegister({
                ...register,
                uname:event.target.value        
            })
            }}placeholder='Enter your username'/>
            <input type="password" className='form-control mb-4' value={register.pass}
            onChange={(event)=>{
                setRegister({
                ...register,
                pass:event.target.value        
            })
            }}placeholder='Enter the password'/>
            <button className='btn btn-outline-success' style={{width: '30%'}} onClick={(uname,pass)=>{getData(register.uname,register.pass)}}>Login</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-primary' style={{width: '30%'}} onClick={()=>{navigate("/");}}>Home</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-dark' style={{width: '30%'}} onClick={refreshData}>Refresh</button>
            <h3>{msg}</h3>
        </div>
    )
}

export default LogIn
