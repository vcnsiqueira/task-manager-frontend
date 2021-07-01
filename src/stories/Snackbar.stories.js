import React, { useState } from 'react';

import Snackbar from '../components/core/Snackbar';
import Button from '../components/core/Button';

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
    autoDelete: {
      control: { type: "boolean", options: ["true", "false"]}
    },
    autoDeleteTime: {
      control: { type: "number"}
    },
  },
};

const Template = (args) => {

  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Button variant='contained' color='primary' onClick={() => setShowSnackbar(true)}>Open Snackbar</Button>
        { showSnackbar && (
          <Snackbar {...args} close={() => setShowSnackbar(false)}>
              {args.children}
          </Snackbar>
        )}
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  type: "info",
  position: "bottom-right",
  title: "Title",
  children: "This is the message",
  autoDelete: true,
  autoDeleteTime: 3000,
};