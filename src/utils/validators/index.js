export const requiredField = (value) => {
    if (value) return undefined;
    return "Field is required";
}

// 1)как передается value???
export const maxLengthCreator = (maxLength) => (value) => {
    console.log(value);
    if (value.length > maxLength) return `Max length is ${maxLength} symbols`;
    return undefined;
}

// export const maxLengthCreator = (maxLength) => (value) => {
//     return value.length > maxLength ? `77777777777Max length is "${maxLength}" symbols` : undefined;
// }