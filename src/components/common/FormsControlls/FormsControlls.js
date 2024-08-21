import React from "react";
import styles from "./FormsControlls.module.css";

export const Textarea = (props) => {
    return (
        <div className={styles.formControl + " " + styles.error}>
            <div>
                <textarea {...props}/>
                {/* <textarea {...input}  {...props} /> */}
            </div>
            {/* {props.onBlur&&<span>"Some error"</span>} */}
        </div>
    )
}

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