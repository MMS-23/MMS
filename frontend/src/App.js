import React, { Component } from "react";
//import "bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/LoginForm/Login";
function App() {
  return (
    <div className="App">
     
    <LoginForm />

    </div>
  );
}

export default App;
