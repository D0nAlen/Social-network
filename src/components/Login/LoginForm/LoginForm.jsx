import { useForm } from "react-hook-form";
import { Input } from "../../common/FormsControlls/FormsControlls";

const LoginForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <Input register={register} formState={formState} placeholder={"Login"} name="Login"/>
      </div>
      <div>
        <Input register={register} formState={formState} placeholder={"Password"} name="Password"/>
      </div>
      <div>
        {/* <Input register={register} formState={formState} type={"checkbox"} /> */}
        <input {...register("rememberMe")} type={"checkbox"} />
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
