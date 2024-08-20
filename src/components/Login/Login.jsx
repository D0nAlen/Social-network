import React from "react";
import { useForm } from "react-hook-form";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <input {...register("login")} placeholder={"Login"} />
      </div>
      <div>
        <input {...register("password")} placeholder={"Password"} />
      </div>
      <div>
        <input {...register("rememberMe")} type={"checkbox"} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

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
