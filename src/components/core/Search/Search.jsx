import React from 'react';
import PropTypes from 'prop-types';

import { StyledSearchLabel, StyledSearchInput } from './styled/Search.styled';

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
    searchItem: PropTypes.string,
    onChange: PropTypes.func,
};

export default Search;