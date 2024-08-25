import { useForm } from "react-hook-form";
import { Input } from "../../common/FormsControlls/FormsControlls";

const LoginForm = (props) => {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <Input register={register} formState={formState} placeholder={"Email"} name="Email"/>
      </div>
      <div>
        <Input register={register} formState={formState} placeholder={"Password"} name="Password" type={"password"}/>
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
