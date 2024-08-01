import React, { useState } from 'react'
import axios from 'axios'

function Register({setState}) {
    let[register,setRegister]=useState({
        uname:"",
        pass:"",
        nm:""
    })
    let[msg,setMsg]=useState("");
    const refreshData=()=>{
        setRegister({
            uname:"",
            pass:"",
            nm:""
        })
        setMsg("");
    }
    let[errors,setErrors]=useState({
        uname:"",
        pass:"",
        nm:""
    })
    const validForm=()=>{
        var isValid=true;
        var newErrors=({
            uname:"",
            pass:"",
            nm:""
        })
        if(register.uname.trim().length<=4)
        {
            newErrors.uname="USERNAME MUST BE ATLEAST 5 CHARECTER";
            isValid=false;
        }
        if(register.pass.trim().length<=4) {
            newErrors.pass="PASSWORD MUST BE ATLEAST 5 CHARECTER";
            isValid=false;
        }
        if(register.nm.trim().length<=0)
            {
                newErrors.nm="NAME MUST BE GIVEN";
                isValid=false;
            }
            setErrors(newErrors);
        return isValid;
    }
    const addData=()=>{
        axios.post("http://localhost:1002/register/add",register)
        .then((res)=>{
            console.log(res.data);
            setRegister(res.data);
            setMsg(res.data);
        })
        .catch((error)=>{
            console.log(error);
            alert("SOME THING WRONG ON ADDING DATA");
        })
    }
    //let[register, setRegister] = useState
    return (
        <div className='form-control' style={{padding: '2rem', width: "50%", margin: "50px auto", border: '1px solid lightgrey', borderRadius: '10px'}}>
            <h2 style={{fontSize: '50px', fontWeight: 'bold'}}>Sign Up</h2>
            <img src='https://th.bing.com/th/id/OIP.iOMYfJOoHuYjVpMJmi_dbwHaH2?rs=1&pid=ImgDetMain' alt='FoodAppPic' width={"380"} height={"380"} style={{padding: '1em'}} />
            <input type="text" className='form-control mb-4' value={register.uname}
            onChange={(event)=>{
            setRegister({
                ...register,
                uname:event.target.value        
            })
            }}placeholder='Enter your username'/>
            <h4 style={{color:"red"}}>{errors.uname}</h4>
            <input type="password" className='form-control mb-4' value={register.pass}
            onChange={(event)=>{
                setRegister({
                ...register,
                pass:event.target.value        
            })
            }}placeholder='Enter the password'/>
            <h4 style={{color:"red"}}>{errors.pass}</h4>
            <input type="text" className='form-control' value={register.nm}
            onChange={(event)=>{
                setRegister({
                ...register,
                nm:event.target.value        
            })
            }}placeholder='Enter your name'/>
            <h4 style={{color:"red"}}>{errors.nm}</h4>
            <button className='btn btn-outline-primary' style={{marginTop:"10px"}} onClick={()=>{
                if(validForm()===true)
                {
                    addData();
                }
            }}>Sign Up</button>&nbsp;&nbsp;
            <button className='btn btn-outline-dark' style={{marginTop:"10px"}} onClick={refreshData}>Refresh</button>
            <h3>{msg}</h3>
        </div>
    )
}

export default Register
