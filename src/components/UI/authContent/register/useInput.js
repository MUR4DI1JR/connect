import React, {useState} from 'react';
import useValidation from "./useValidation";
import {parsePhoneNumberFromString} from "libphonenumber-js";


const UseInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [isDirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const normalizePhoneNumber = (value) =>{
        const phoneNumber = parsePhoneNumberFromString(value);
        if(!phoneNumber){
            return value
        }
        return(
            phoneNumber.formatInternational()
        )
    };

    const onChange = (e) =>{
        setValue(normalizePhoneNumber(e.target.value))
    };

    const onBlur = (e) =>{
        setDirty(true)
    };


    return{
        value,
        onChange,
        onBlur,
        isDirty,
        ...valid
    }
};

export default UseInput;