import React from 'react';

import Tooltip from '../components/core/Tooltip';
import Button from '../components/core/Button';

export default {
    title: 'Components/Tooltip',
    component: Tooltip,
    argTypes: {
        position: {
            control: { type: 'radio', options: ['top-start', 'top', 'top-end', 'left-start', 'left', 'left-end', 'bottom-start', 'bottom', 'bottom-end', 'right-start', 'right', 'right-end']}
        },
        tooltip: {
            control: { type: 'text' }
        },
        width: {
            control: { type: 'text' }
        }
    },
  };

const Template = (args) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", marginTop: '30px'}}>
            <Tooltip {...args}>
                <div style={{width: '300px', height: '70px', border: '1px solid #000', backgroundColor: 'lightblue', textAlign: 'center', alignItems: 'center'}}>Hover me!</div>
            </Tooltip>
            <div style={{width: '300px', height: '100px'}}></div>
            <Tooltip {...args}>
                <Button variant="contained" color="primary">Hover me!</Button>
            </Tooltip>
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    position: "top-start",
    tooltip: "Tooltip",
};