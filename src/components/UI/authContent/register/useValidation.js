import React, {useState, useEffect} from 'react';

const UseValidation = (value, validations) => {
    const [isEmpty, setEmpty] = useState(true);
    const [minLengthError, setMinLengthError] = useState(false);
    const [maxLengthError, setMaxLengthError] = useState(false);
    const [maxNumberError, setMaxNumberError] = useState(false);
    const [minNumberError, setMinNumberError] = useState(false);
    const [monthError, setMonthError] = useState(false);
    const [genderError, setGenderError] = useState(false);
    const [countryError, setCountryError] = useState(false);
    const [sectorError, setSectorError] = useState(false);
    const [collabError, setCollabError] = useState(false);
    const [investValid, setInvestValid] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    useEffect(()=>{
        for (const validation in validations){
            switch (validation) {
                case 'minLength':
                    value.length < validations[validation] ? setMinLengthError(true) : setMinLengthError(false);
                    break;
                case 'isEmpty':
                    value ? setEmpty(false) : setEmpty(true);
                    break;
                case 'maxLength':
                    value.length > validations[validation] ? setMaxLengthError(true) : setMaxLengthError(false);
                    break;
                case 'maxNumber':
                    value > validations[validation] ? setMaxNumberError(true) : setMaxNumberError(false);
                    break;
                case 'monthValue':
                    value === 'Месяц' ? setMonthError(true) : setMonthError(false);
                    break;
                case 'minNumber':
                    value < validations[validation] ? setMinNumberError(true) : setMinNumberError(false);
                    break;
                case 'genderValue':
                    value === 'Пол' ? setGenderError(true) : setGenderError(false);
                    break;
                case 'countryValue':
                    value === 'Выберите' ? setCountryError(true) : setCountryError(false);
                    break;
                case 'sectorValue':
                    value === 'Выберите' ? setSectorError(true) : setSectorError(false);
                    break;
                case 'collabValue':
                    value === 'Выберите' ? setCollabError(true) : setCollabError(false);
                    break;
            }
        }
    }, [value]);

    useEffect(() =>{
        if (isEmpty || minLengthError || maxLengthError || maxNumberError || minNumberError || monthError || genderError || countryError){
            setInputValid(false)
        }else {
            setInputValid(true)
        }
    }, [isEmpty, minLengthError, maxLengthError, maxNumberError, minNumberError, monthError, genderError, countryError]);

    useEffect(() =>{
        if(isEmpty || minNumberError || maxNumberError || sectorError || collabError){
            setInvestValid(false)
        }else {
            setInvestValid(true)
        }
    }, [isEmpty, minNumberError, maxNumberError, sectorError, collabError]);

    return{
        isEmpty,
        minLengthError,
        maxLengthError,
        maxNumberError,
        minNumberError,
        monthError,
        genderError,
        countryError,
        sectorError,
        collabError,
        inputValid,
        investValid
    }
};

export default UseValidation;