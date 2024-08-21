import React from "react";
import styles from "./FormsControlls.module.css";
import { maxLengthCreator, requiredField } from "../../../utils/validators/index.js";
// import { useForm } from "react-hook-form";
    export const Textarea = (props) => {
        // const {
        //     // register,
        //     // handleSubmit,
        //     formState: { errors },
        //   } = useForm();         
    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
                <textarea {...props.register("newPostText", { required: true, maxLength: 20})}/>
                 {/* {...props.formState.errors}/> */}
                     {/* { validate: maxLengthCreator })}/> */}
                  {props.formState.errors.newPostText&& <span>"Some error"</span>}
            </div>
        </div>
    )
};

// export const Textarea = ({ input, meta, ...props }) => {
    
//     return (
//         <div className={styles.formControl + " " + styles.error}>
//             <div>
//                 <textarea {...input}  {...props} />
//             </div>
//             {/* <span>"Some error"</span> */}
//         </div>
//     )
// }