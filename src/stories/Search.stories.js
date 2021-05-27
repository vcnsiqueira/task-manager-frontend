import React, { useState } from 'react';

import Search from '../components/core/Search';

export default {
    title: 'Components/Search',
    component: Search,
    argTypes: {
      searchItem: {
          control: { type: "text" }
      },
      onChange: {
          control: { type: "none" }
      },
    },
  };

export const Base = () => {

    const [searchElement, setSearchElement] = useState('');

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Search searchItem={searchElement} onChange={setSearchElement} />
        </div>
    );
};