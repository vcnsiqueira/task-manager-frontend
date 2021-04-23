import React from 'react';
import PropTypes from 'prop-types';

import StyledAvatar from './styled/Avatar.styled';

/**
* The avatar component is used to show that something belongs to the user show within
*/
const Avatar = ({ name, size, src }) => {
    const showName = !name || name.length === 0 ? ['Eu'] : name.split(' ');
    return (
        <StyledAvatar size={size} src={src}>
            {!src && (showName.length > 1
                ? showName.filter((item, idx, ar) => idx === 0 || idx ===ar.length -1)
                    .map((item) => item[0])
                : showName[0].slice(0, 2) 
            )}
        </StyledAvatar>
    );
};

Avatar.propTypes = {
    /**
    * The name of the user
    */
    name: PropTypes.string,
    /**
    * The size of the avatar
    */
    size: PropTypes.oneOf(['small', 'medium', 'large', 'extralarge', 'profile']),
    /**
    * the url of the avatar image
    */
    src: PropTypes.string,
};

Avatar.defaultProps = {
    name: 'Eu',
    size: 'medium',
};

export default Avatar;