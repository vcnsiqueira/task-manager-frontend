import React from 'react';
import PropTypes from 'prop-types';

import { StyledSearchLabel, StyledSearchInput } from './styled/Search.styled';

/**
* The Search component is an input where the user can type some element to be searched. It appears in a page where we have several elements and we need to filter these elements. 
*/
const Search = ({ searchItem, onChange }) => {
    return (
        <>
            <StyledSearchLabel>
                Procurar Quadros
            </StyledSearchLabel>
            <StyledSearchInput 
                value={searchItem} 
                onChange={event => onChange(event.target.value)} 
                type="text" 
                placeholder="Procurar quadro"
            />
        </>
    );
};

Search.proTypes = {
    /**
    * the value element to be searched 
    */
    searchItem: PropTypes.string,
    /**
    * the function to control the input 
    */
    onChange: PropTypes.func,
};

export default Search;