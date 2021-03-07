import React from 'react';

import BoardCard from '../components/BoardCard';

export default {
    title: 'Components/BoardCard',
    component: BoardCard,
    argTypes: {
      title: {
          control: { type: "text" }
      },
      color: {
          control: { type: "radio" , options: ["primary", "secondary", "danger", "success", "warning", "info", "dark"] }
      },
      image: {
          control: { type: "text" }
      },
      bookmark: {
          control: { type: "boolean", options: [true, false] },
      },
      dateOfCreation: {
          control: { type: "text" },
      },
      numberOfTasks: {
          control: { type: "number" },
      },
      toggleBookmark: {
          control: { type: "text" }
      },
      openBoard: {
          control: { type: "text" }
      }
    },
  };

const Template = (args) => {
    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <BoardCard {...args} />
        </div>
    );
};

export const Base = Template.bind({});
Base.args = {
    title: "Card Title",
    color: "primary",
    bookmark: true,
    dateOfCreation: "06/03/2021"
};