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

function LoginForm() {
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
   
    <Form className="form" onSubmit={(e) => this.submitForm(e)}>
      <FormGroup>
        <Label>Username</Label>
        <Input
          type="email"
          name="email"
          id="exampleEmail"
          placeholder="example@example.com"
          valid={this.state.validate.emailState === "has-success"}
          invalid={this.state.validate.emailState === "has-danger"}
          
          onChange={(e) => {
            this.validateEmail(e);
            this.handleChange(e);
          }}
        />
        <FormFeedback>
          Uh oh! Looks like there is an issue with your email. Please input
          a correct email.
        </FormFeedback>
        <FormFeedback valid>
          That's a tasty looking email you've got there.
        </FormFeedback>
        <FormText>Your username is most likely your email.</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="password"
          id="examplePassword"
          placeholder="********"
         
          onChange={(e) => this.handleChange(e)}
        />
      </FormGroup> <br/>
      <Button>Submit</Button>
    </Form>
  

    
  );
}
export default LoginForm;