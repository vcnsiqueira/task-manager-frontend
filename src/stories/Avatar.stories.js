import React from 'react';

import Avatar from '../components/core/Avatar';

export default {
    title: 'Components/Avatar',
    component: Avatar,
    argTypes: {
      name: {
          control: { type: "text" }
      },
      size: {
          control: { type: "radio" , options: ["small", "medium", "large", "extralarge", "profile"] }
      },
      src: {
          control: { type: "text" }
      },
    },
  };

const Template = (args) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Avatar {...args} />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    name: "Jane Doe",
    size: "profile",
    src: "https://st2.depositphotos.com/2703645/5669/v/950/depositphotos_56695433-stock-illustration-female-avatar.jpg"
};