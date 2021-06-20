import React from 'react';

import ColorPicker from '../components/core/ColorPicker';

export default {
    title: 'Components/ColorPicker',
    component: ColorPicker,
    argTypes: {
      color: {
          control: { type: "text" }
      },
      onChange: {
          control: { type: "none" }
      },
    },
};

const Template = (args) => {

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <ColorPicker {...args} />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
  color: "#4711B2",
};