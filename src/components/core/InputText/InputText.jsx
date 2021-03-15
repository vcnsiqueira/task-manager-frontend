import React from 'react';
import PropTypes from 'prop-types';

import StyledInputText from './styled/InputText.styled';

const InputText = ({ label, name, error, errorMessage, disabled, type, value, onChange }) => {
    return (
        <StyledInputText error={error}>
            <input className="inputText" name={name} id={`inputTextLine${label}`} disabled={disabled} type={type} value={value} onChange={onChange} />
            <label className="labelText">
                {label}
            </label>
            <span className="highlight" />
            <span className="bar"/>
            { error && <span className="errorMessage">{errorMessage}</span>}
        </StyledInputText>
    );
};

InputText.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    error: PropTypes.bool,
    errorMessage: PropTypes.string,
    disabled: PropTypes.bool,
    type: PropTypes.string,
    notTransparent: PropTypes.bool,
    onChange: PropTypes.func,
};

InputText.defaultProps = {
    error: false,
    value: '',
    errorMessage: 'Existe um erro',
    disabled: false,
    type: 'text',
    notTransparent: true,
};

export default InputText;