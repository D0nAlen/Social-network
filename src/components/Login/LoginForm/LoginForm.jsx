import { useForm } from "react-hook-form";
import { Input } from "../../common/FormsControlls/FormsControlls";
import style from "../../../components/common/FormsControlls/FormsControlls.module.css";

const LoginForm = ({ onSubmit, errorMessage }) => {
  const { register, handleSubmit, formState } = useForm();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
      {errorMessage && <div className={style.formSummaryError}>{errorMessage}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
