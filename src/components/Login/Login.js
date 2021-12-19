import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";


const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({
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

    const login = () => {
        axios.post("http://localhost:3456/login", user)
            .then(res => console.log(res));
    }  

    return (
        <div className = "main">
            <div className="parent1">
                <div className="child three">
                    <p>LOGIN</p>
                </div>
                <div className="child four"> 
                    <p onClick={() => navigate("/register")}>SIGN UP</p>
                </div>
            </div>
            <div className="parent2">
                <input type= "number" placeholder="" name="mobile" value = {user.mobile} onChange={handleChange}/>
                <input type= "text" placeholder="Enter Your Password" name="password" value={user.password} onChange={handleChange}/>
                <button className="btn" onClick= {() => navigate("./dashboard")}>Login With Password</button>
            </div>
            
        </div>
    )
}

export default Login;

