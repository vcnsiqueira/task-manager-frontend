import React from 'react';

import IconButton from '../components/core/IconButton';
import { Users } from '../components/icons';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    title: 'Components/Button/IconButton',
    component: IconButton,
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
      children: {
          control: { type: "none" },
      },
    },
  };

const Template = (args) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <IconButton {...args} />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    color: "primary",
    variant: "pattern",
    shape: "circle",
    size: "medium",
    children: <Users />,
};

export const Contained = () => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton color="primary" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="secondary" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="danger" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="success" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="warning" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="info" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
        <IconButton color="dark" variant="contained" style={{marginRight: "35px"}}><Users /></IconButton>
    </div>
);
Contained.parameters = {
    docs: {
        description: {
            story: "Contained Icon buttons should be used outside header elements to the most important actions."
        }
    }
};

export const Outlined = () => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton color="primary" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="secondary" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="danger" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="success" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="warning" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="info" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="dark" variant="outlined" style={{marginRight: '35px' }}><Users /></IconButton>
    </div>
);
Outlined.parameters = {
    docs: {
        description: {
            story: "Outlined Icon buttons are another possible usability which should be used outside header elements. In this case they can be considered a tertiary option."
        }
    }
};

export const Pattern = () => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton color="primary" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="secondary" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="danger" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="success" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="warning" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="info" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="dark" variant="pattern" style={{marginRight: '35px' }}><Users /></IconButton>
    </div>
);
Pattern.parameters = {
    docs: {
        description: {
            story: "Pattern Icon buttons are the default icon buttons. Every icon button used in a header element must be of variant pattern and circled. They are also used outside header elements except for the most important actions."
        }
    }
};

export const Shapes = () => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton color="primary" variant="contained" shape="square" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="secondary" variant="contained" shape="rounded" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="danger" variant="contained" shape="circle" style={{marginRight: '35px' }}><Users /></IconButton>
    </div>
);
Shapes.parameters = {
    docs: {
        description: {
            story: "Icon buttons can have three different shapes: square, rounded or circle. The default is circle. It is important to notice that the shape of icon buttons with variant pattern are visible only on hover."
        }
    }
};

export const Sizes = () => (
    <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <IconButton color="primary" variant="contained" size="small" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="secondary" variant="contained" size="medium" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="danger" variant="contained" size="large" style={{marginRight: '35px' }}><Users /></IconButton>
        <IconButton color="success" variant="contained" size="extralarge" style={{marginRight: '35px' }}><Users /></IconButton>
    </div>
);
Sizes.parameters = {
    docs: {
        description: {
            story: "Icon buttons can have three different sizes: small, medium or large. The default is medium."
        }
    }
};