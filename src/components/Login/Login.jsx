import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (formData) => props.login(formData.email, formData.password, formData.rememberMe);
  return (
    <div>
      <h1>LOGIN</h1>

      <LoginForm onSubmit={onSubmit} errorMessage={props.errorMessage} />
    </div>
  );
};

let mapStateToProps = (state) => ({
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, { login })(Login);