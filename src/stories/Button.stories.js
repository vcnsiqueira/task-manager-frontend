import React from 'react';

import Button from '../components/core/Button';
//import { Users } from '../components/icons';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: "radio" , options: ["primary", "secondary", "danger", "success", "warning", "info", "dark"] }
    },
    variant: {
      control: { type: "radio", options: ["contained", "outlined", "pattern"] }
    },
    shape: {
      control: { type: "radio", options: ["square", "rounded", "circle"] },
    },
    size: {
      control: { type: "radio", options: ["small", "medium", "large", "extralarge"] },
    },
    textTransform: {
      control: { type: "radio", options: ["none", "lowercase", "uppercase", "capitalize"]},  
    },
    children: {
      control: { type: "none" },
    },
  },
};

const Template = (args) => {
  return (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      <Button style={{marginRight: '10px'}} {...args} />
    </div>
  );
};

export const Base = Template.bind({});
Base.args = {
  color: "primary",
  variant: "contained",
  shape: "rounded",
  size: "medium",
  children: 'Button',
};

export const Contained = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" variant="contained">Primary</Button>
    <Button style={{marginRight: '10px'}}color="secondary" variant="contained">Secondary</Button>
    <Button style={{marginRight: '10px'}}color="danger" variant="contained">Danger</Button>
    <Button style={{marginRight: '10px'}}color="success" variant="contained">Success</Button>
    <Button style={{marginRight: '10px'}}color="warning" variant="contained">Warning</Button>
    <Button style={{marginRight: '10px'}}color="info" variant="contained">Info</Button>
    <Button style={{marginRight: '10px'}}color="dark" variant="contained">Dark</Button>
  </div>
);
Contained.parameters = {
  docs: {
      description: {
        story: "Contained buttons should be used for the most important actions."
      }
  }
};

export const Outlined = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" variant="outlined">Primary</Button>
    <Button style={{marginRight: '10px'}}color="secondary" variant="outlined">Secondary</Button>
    <Button style={{marginRight: '10px'}}color="danger" variant="outlined">Danger</Button>
    <Button style={{marginRight: '10px'}}color="success" variant="outlined">Success</Button>
    <Button style={{marginRight: '10px'}}color="warning" variant="outlined">Warning</Button>
    <Button style={{marginRight: '10px'}}color="info" variant="outlined">Info</Button>
    <Button style={{marginRight: '10px'}}color="dark" variant="outlined">Dark</Button>
  </div>
);
Outlined.parameters = {
  docs: {
      description: {
          story: "Outlined buttons should be used for the secondary actions. Generally they are grouped with contained buttons."
      }
  }
};

export const Pattern = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" variant="pattern">Primary</Button>
    <Button style={{marginRight: '10px'}}color="secondary" variant="pattern">Secondary</Button>
    <Button style={{marginRight: '10px'}}color="danger" variant="pattern">Danger</Button>
    <Button style={{marginRight: '10px'}}color="success" variant="pattern">Success</Button>
    <Button style={{marginRight: '10px'}}color="warning" variant="pattern">Warning</Button>
    <Button style={{marginRight: '10px'}}color="info" variant="pattern">Info</Button>
    <Button style={{marginRight: '10px'}}color="dark" variant="pattern">Dark</Button>
  </div>
);
Pattern.parameters = {
  docs: {
      description: {
          story: "Pattern buttons should be used as another variant of buttons. Generally when they are grouped with both contained and outlined buttons."
      }
  }
};

export const Shapes = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" variant="contained" shape="square">Square</Button>
    <Button style={{marginRight: '10px'}}color="secondary" variant="contained" shape="rounded">Rounded</Button>
    <Button style={{marginRight: '10px'}}color="danger" variant="contained" shape="circle">Circle</Button>
  </div>
);
Shapes.parameters = {
  docs: {
    description: {
        story: "Buttons can be used in three different shapes: square, rounded and circle. The default is the rounded shape. Squared buttons are another alternative, but today they are not being used."
    }
  }
};

export const Sizes = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" variant="contained" size="small">Small</Button>
    <Button style={{marginRight: '10px'}}color="secondary" variant="contained" size="medium">Medium</Button>
    <Button style={{marginRight: '10px'}}color="danger" variant="contained" size="large">Large</Button>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
        story: "If you need different size of the buttons, they can be used in three different ones: small, medium and large. The default is the medium size."
    }
  }
};

export const Texts = () => (
  <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
    <Button style={{marginRight: '10px'}}color="primary" textTransform="none">Normal</Button>
    <Button style={{marginRight: '10px'}}color="secondary" textTransform="lowercase">Lowercase</Button>
    <Button style={{marginRight: '10px'}}color="danger" textTransform="uppercase">Uppercase</Button>
    <Button style={{marginRight: '10px'}}color="success" textTransform="capitalize">Capitalize</Button>
  </div>
);
Sizes.parameters = {
  docs: {
    description: {
      story: "The text of the button can be use in normal, lowercase, uppercase or capitalize formats."
    }
  }
};