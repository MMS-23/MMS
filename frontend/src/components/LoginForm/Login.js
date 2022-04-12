import React from "react";
import { useForm } from "react-hook-form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Form,
    FormFeedback,
    FormGroup,
    FormText,
    Label,
    Input,
    Button,
  } from 'reactstrap';
  import './Login.css';

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const userData = JSON.parse(localStorage.getItem(data.email));
    if (userData) { // getItem can return actual value or null
      if (userData.password === data.password) {
        console.log(userData.name + " You Are Successfully Logged In");
      } else {
        console.log("Email or Password is not matching with our record");
      }
    } else {
      console.log("Email or Password is not matching with our record");
    }
  };
  return (
   
    <div className="Login">
        <img src={require("./image.png")}/>
        <Form className="form">
          <FormGroup>
            <Label for="exampleEmail">Email Id</Label>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="example@gmail.com"
            />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
          Forgot Password?
          <div className="submit">
        <Button>Submit</Button>
        </div>
      </Form>
    </div>
  

    
  );
}
export default Login;