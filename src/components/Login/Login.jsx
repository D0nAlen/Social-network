import React from "react";
import LoginForm from "./LoginForm/LoginForm";


const Login = () => {
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
