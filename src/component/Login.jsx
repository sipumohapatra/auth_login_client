import React, { useState } from "react";
import "../../src/App.css";
import { Card, CardContent } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({setloginuser}) => {
  const navigate=useNavigate()
  const [user, setuser] = useState({
    gmail: "",
    password: "",
  });
  const change = (e) => {
    const copyuser = { ...user };
    copyuser[e.target.name] = e.target.value;
    setuser(copyuser);
  };
  const login=()=>{
    console.log(user);
    axios.post("http://localhost:5000/login",user)
    .then(res=>{
      console.log(res.data.data);
    setloginuser(res.data.data)
    navigate("/")
  })
  } 
  return (
    <div>
      <Card style={{ width: "400px", marginLeft: "100px" }}>
        <CardContent>
          <h1>login</h1>
          <input
            type="text"
            placeholder="enter your email"
            name="gmail"
            value={user.gmail}
            onChange={change}
            style={{ marginBottom: "20px", marginTop: "20px" }}
          />{" "}
          <br />
          <input
            type="password"
            placeholder="enter your password"
            name="password"
            value={user.password}
            onChange={change}
          />{" "}
          <br />
          <div
            className="btn btn-primary mt-4 "
            style={{ paddingRight: "125px", paddingLeft: "125px" }}
            onClick={login}

          >
            Login
          </div>
          <div>or</div>
          <div
            className="btn btn-primary mt-2"
            style={{ paddingRight: "125px", paddingLeft: "125px" }}
            onClick={()=>navigate("/registration")}
          >
            Registration
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
