import { useForm } from "react-hook-form";
import { Textarea } from "../../common/FormsControlls/FormsControlls";

const AddMessageForm = (props) => {
    const { register, handleSubmit, formState } = useForm();

    return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <Textarea register={register} formState={formState} placeholder="Enter your message" name="newMessageText"/>
        <div>
          <button>Send</button>
        </div>
      </form>
    );
  };

  export default AddMessageForm;