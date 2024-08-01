import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    var navigate = useNavigate();
    return (
        <div style={{padding: '2rem', width: "50%", margin: "50px auto", border: '1px solid lightgrey', borderRadius: '10px'}}>
            <div>
                <img
                    src='https://png.pngtree.com/png-clipart/20230823/original/pngtree-chef-logo-vector-design-picture-image_8253771.png' alt='' width={"60%"} height={"60%"}
                    style={{marginBottom: '1rem'}}
                />
            </div>
            <button className='btn btn-outline-primary' style={{width: "20%"}} onClick={()=>{navigate("/login")}}>LOGIN</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className='btn btn-outline-success' style={{width: "20%"}} onClick={()=>{navigate("/register")}}>SIGNUP</button>
        </div>
    )
}

export default Home
