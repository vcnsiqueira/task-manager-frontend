import styled, { css } from 'styled-components';

import theme from '../../../../styles/theme';

const sizes = {
    small: { width: '30px', height: '30px', fontSize: "0.6rem" },
    medium: { width: '40px', height: '40px', fontSize: "1rem" },
    large: { width: '56px', height: '56px', fontSize: "1.5rem"},
    extralarge: {width: '100px', height: '100px', fontSize: "3rem"},
    profile: { width: '200px', height: '200px', fontSize: "5rem"},
    getSize(size) {
      return this[size] || this.medium;
    },
  };
  
  const StyledAvatar = styled.button`
      border: 0.09rem solid ${theme.dark};
      border-radius: 50%;
      padding: 0.3rem;
      box-sizing: border-box;
      user-select: none;
      text-align: center;
      color: ${theme.dark};
      outline: none;
      cursor: pointer;
  
      ${(props) => css`
          height: ${sizes.getSize(props.size).height};
          width: ${sizes.getSize(props.size).width};
          font-size: ${sizes.getSize(props.size).fontSize};
          background-image: url(${props.src});
          background-size: cover;
          background-repeat: no-repeat;
      `}
  `;
  
  export default StyledAvatar;