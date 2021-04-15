import { useReducer, useCallback } from 'react';

const formReducer = (state, action) => {
    switch(action.type) {
        case 'inputChange':
            let formIsValid = true;
            for (const inputName in state.inputs) {
                if (!state.inputs[inputName]) { // This checks if exists the inputName as a key of state.inputs
                    continue;
                };
                if (inputName === action.inputName) {
                    formIsValid = formIsValid && action.isValid;
                } else {
                    formIsValid = formIsValid && state.inputs[inputName].isValid;
                };
            };
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputName]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid,
            };
        case 'setData':
            return {
                inputs: action.inputs,
                isValid: action.formIsValid
            };        
        default: 
            return state;
    };
};

export const useForm = (initialInputs, initialFormValidity) => {
    
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        isValid: initialFormValidity,
    });


    const inputHandler = useCallback((name, value, isValid) => {
        dispatch({
            type: 'inputChange',
            value: value,
            isValid: isValid,
            inputName: name,
        });
    },[]);

    const setFormData = useCallback((inputData, formValidity) => {
        dispatch({
            type: 'setData',
            inputs: inputData,
            formIsValid: formValidity,
        });
    },[]);

    return [formState, inputHandler, setFormData];
};