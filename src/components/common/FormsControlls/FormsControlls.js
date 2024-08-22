import React from "react";
import styles from "./FormsControlls.module.css";
import { maxLengthCreator, requiredField } from "../../../utils/validators/index.js";
export const Textarea = (props) => {
    const maxLengthText = maxLengthCreator(10);
    const hasError = props.formState.errors.newPostText;

    return (
        <div className={styles.formControl + " " + hasError ? styles.error : ""}>
            <div>
                <textarea {...props.register("newPostText", { validate: { requiredField, maxLengthText } })} />
                {hasError && <span>{hasError.message}</span>}
            </div>
        </div>
    )
};
