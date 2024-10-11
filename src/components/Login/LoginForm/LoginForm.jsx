import { useForm } from "react-hook-form";
import { Input } from "../../common/FormsControlls/FormsControlls.js";
import style from "../../../components/common/FormsControlls/FormsControlls.module.css";

const LoginForm = (props) => {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(props.onSubmit)}>
      <div>
        <Input register={register} formState={formState} placeholder={"Email"} name="email" />
      </div>
      <div>
        <Input register={register} formState={formState} placeholder={"Password"} name="password" type={"password"} />
      </div>
      <div>
        <input {...register("rememberMe")} type={"checkbox"} name="rememberMe" />
        remember me
      </div>
      {props.errorMessage && <div className={style.formSummaryError}>{props.errorMessage}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
