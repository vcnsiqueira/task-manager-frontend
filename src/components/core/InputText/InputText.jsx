import React, { useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';

import StyledInputText from './styled/InputText.styled';
import { validate } from '../../../utils/validation';

const inputReducer = (state, action) => {
    switch(action.type) {
        case 'change':
            return {
                ...state,
                value: action.val,
                isValid: validate(action.val, action.validators).isValid,
                message: validate(action.val, action.validators).message,
            };
        case 'touch':
            return {
                ...state,
                isTouched: true,
                isValid: validate(action.val, action.validators).isValid,
                message: validate(action.val, action.validators).message,
            };
        case 'click':
            return {
                ...state,
                isTouched: false,
            }
        default:
            return state;
    }
}

const InputText = ({ label, name, initialValue, initialIsValid, errorMessage, validators, disabled, type, placeholder, notTransparent, changePassword, onInput }) => {

    const [inputState, dispatch] = useReducer(inputReducer, {
        value: initialValue || '',
        isValid: initialIsValid || false,
        isTouched: false,
        message: errorMessage || [],
    });

    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(name, value, isValid);
    }, [name, value, isValid, onInput]);

    const changeHandler = event => {
        dispatch({
            type: 'change',
            val: event.target.value,
            validators: validators,
        });
        if (event.target.name === 'password' && changePassword) { // this conditional is used to pass the password value to parent component in order to validate the confirm password if necessary
            changePassword(event.target.value);
        };
    };

    const touchHandler = event => {
        dispatch({
            type: 'touch',
            val: event.target.value,
            validators: validators,
        });
    };

    const clickHandler = () => {
        dispatch({
            type: 'click',
        });
    };

    return (
        <StyledInputText notTransparent={notTransparent} errorMessage={inputState.message} blur={inputState.isTouched}>
            <input className="inputText" name={name} id={`inputTextLine${label}`} disabled={disabled} type={type} value={value} placeholder={placeholder} onChange={changeHandler} onBlur={touchHandler} onClick={clickHandler} />
            <label className="labelText">
                {label}
            </label>
            <span className="highlight" />
            <span className="bar"/>
            { !isValid && inputState.isTouched && (
                inputState.message.map((mes, index) => <span key={index} style={{display: 'block'}} className="errorMessage">{mes} </span>)
            )}
        </StyledInputText>
    );
};

InputText.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    initialValue: PropTypes.string,
    initialIsValid: PropTypes.bool,
    errorMessage: PropTypes.array,
    validators: PropTypes.array,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    notTransparent: PropTypes.bool,
    onInput: PropTypes.func,
    changePassword: PropTypes.func,
};

InputText.defaultProps = {
    disabled: false,
    initialValue: '',
    initialIsValid: true,
    type: 'text',
    notTransparent: false,
};

export default InputText;