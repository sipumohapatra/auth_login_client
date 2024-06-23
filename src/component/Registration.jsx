import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Registration = () => {
  const navigate=useNavigate()
  const [user, setuser] = useState({
    name: "",
    gmail: "",
    password: "",
    repassword: "",
  });
  const change = (e) => {
    const copyuser = { ...user };
    copyuser[e.target.name] = e.target.value;
    setuser(copyuser);
  };
  const register = () => {
    // console.log(user);
    const { name, gmail, password, repassword } = user;
    if (name && gmail && password && password === repassword) {
      axios
        .post("http://localhost:5000/resgistration", user)
        .then((res) => console.log(res));
      setuser({ name: "", gmail: "", password: "", repassword: "" });
      navigate("/login")
      
    } else {
      alert("invalid value");
    } 
  };
  return (
    <div>
      <Card style={{ width: "400px", marginLeft: "100px" }}>
        <CardContent>
          <h1>Registration</h1>
          <input
            type="text"
            placeholder="enter your name"
            name="name"
            value={user.name}
            onChange={change}
            style={{ marginBottom: "20px", marginTop: "10px" }}
          />{" "}
          <br />
          <input
            type="text"
            placeholder="enter your email"
            name="gmail"
            value={user.gmail}
            onChange={change}
            style={{ marginBottom: "20px", marginTop: "10px" }}
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
          <input
            type="password"
            placeholder="enter your re password"
            name="repassword"
            style={{ marginBottom: "20px", marginTop: "20px" }}
            value={user.repassword}
            onChange={change}
          />{" "}
          <br />
          <div
            className="btn btn-primary mt-2 "
            style={{ paddingRight: "125px", paddingLeft: "125px" }}
            onClick={register}
          >
            Register
          </div>
          <div>or</div>
          <div
            className="btn btn-primary mt-2"
            style={{ paddingRight: "125px", paddingLeft: "125px" }}
            onClick={()=>navigate("/login")}
          >
            login
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
