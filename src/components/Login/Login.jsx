import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (formData) => props.login(formData.email, formData.password, formData.rememberMe);
  return (
    <div>
      <h1>LOGIN</h1>
      
      <LoginForm onSubmit={onSubmit} error={props.error} />
    </div>
  );
};

export default connect(null, { login })(Login);
