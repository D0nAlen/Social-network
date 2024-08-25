import React from "react";
import styles from "./FormsControlls.module.css";
import { maxLengthCreator, requiredField } from "../../../utils/validators/index.js";

const FormControl = (props) => {
    const textFieldName = props.name;
    const hasError = props.formState.errors;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
                {hasError[textFieldName] && <span className={styles.error}>{hasError[textFieldName].message}</span>}
            </div>
        </div>
    )
}

export const Textarea = (props) => {
    const maxLengthText = maxLengthCreator(70);
    const textFieldName = props.name;

    return (
        <FormControl {...props}>
            <input {...props.register(textFieldName, { validate: { requiredField, maxLengthText } })} placeholder={props.placeholder} />
        </FormControl>
    )
};

export const Input = (props) => {
    const maxLengthText = maxLengthCreator(70);
    const textFieldName = props.name;

    return (
        <FormControl {...props}>
            <input {...props.register(textFieldName, { validate: { requiredField, maxLengthText } })} placeholder={props.placeholder} 
            type={props.type} />
        </FormControl>
    )
};
