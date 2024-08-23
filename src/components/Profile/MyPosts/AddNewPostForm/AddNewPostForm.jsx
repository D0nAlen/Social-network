import { useForm } from "react-hook-form";
import { Textarea } from "../../../common/FormsControlls/FormsControlls";

const AddNewPostForm = (props) => {
    const { register, handleSubmit, formState } = useForm();
  
    return (
      <form onSubmit={handleSubmit(props.onSubmit)}>
        <div>
          <Textarea register={register} formState={formState} placeholder="Write something here..." name="newPostText"/>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </form>
    );
  };

  export default AddNewPostForm;