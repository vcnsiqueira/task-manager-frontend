import React from 'react';

import Snackbar from '../components/core/Snackbar';

export default {
  title: 'Components/Snackbar',
  component: Snackbar,
  argTypes: {
    type: {
      control: { type: "radio" , options: ["success", "error", "info", "warning"] }
    },
    position: {
      control: { type: "radio", options: ["top-left", "top-right", "bottom-left", "bottom-right"] }
    },
    title: {
      control: { type: "text" },
    },
    children: {
      control: { type: "text" },
    },
    close: {
      control: { type: "none" },
    },
  },
};

const Template = (args) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Snackbar {...args}>
            {args.children}
        </Snackbar>
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  type: "error",
  position: "bottom-right",
  title: "Title",
  children: "This is the message",
};