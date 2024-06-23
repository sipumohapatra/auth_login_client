import logo from "./logo.svg";
import "./App.css";
import Homepage from "./component/Homepage";
import Login from "./component/Login";
import Registration from "./component/Registration";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [data, setloginuser] = useState({});
  console.log(data);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes> 
          <Route
            exact
            path="/" 
            element={data && data._id ? <Homepage setloginuser={setloginuser} /> : <Login />}
          />

          <Route path="/login" element={<Login setloginuser={setloginuser}/>} />

          <Route path="/registration" element={< Registration/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
