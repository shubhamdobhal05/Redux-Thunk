import React, { useState } from "react";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";


const Register = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState({
        name: "",
        email: "",
        mobile: "",
        password: ""
    });

    const handleChange = e => {
        const {name, value} = e.target;
        setUser({
            ...user,
            [name] : value
        })
    };

    const register = () => {
        const {name, email, mobile, password} = user;
        if(name && email && mobile && password) {
            axios.post("http://localhost:3456/register", user)
            .then(res => console.log(res));
        } else {
            alert("Invalid Input Credentials");
        }
        
    }

    return (
        <div className="register">
            <div className="top">
                <div className="first one">
                    <p onClick={() => navigate("/login")}>LOGIN</p>
                </div>
                <div className="first two">
                    <p>SIGN UP</p>
                </div>
            </div>
            
            
            <div classNmame = "input">
                <input type= "text" name = "name" value = {user.name} placeholder="Name as per Aadhaar/Passport" onChange={handleChange}/>
                <input type= "text" name = "email" value = {user.email} placeholder="Email" onChange={handleChange}/>
                <input type = "number" name = "mobile" value = {user.mobile} placeholder="As per Aadhaar" onChange={handleChange}/>
                <input type = "text" name = "password" value = {user.password} placeholder="Password" onChange={handleChange}/>
                <button className="button" onClick={register}>Sign Up</button>
            </div>
           
        </div>
    )
}

export default Register;