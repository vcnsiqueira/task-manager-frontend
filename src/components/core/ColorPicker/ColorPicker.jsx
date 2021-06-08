import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { CirclePicker } from 'react-color';

const ColorPicker = ({ color, onChange }) => {

    return (
        <CirclePicker
            color={color}
            onChangeComplete={onChange}
        />
    );
};

ColorPicker.propTypes = {
    color: PropTypes.string,
    onChange: PropTypes.func,
};

export default ColorPicker;