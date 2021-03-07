import React from 'react';

// import { Container } from './styles';

const Check = ({ color, width, height }) => {
  return (
    <svg 
      height={height} 
      fill={color} 
      viewBox="0 -49 458.672 458" 
      width={width} 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m180.398438 338.90625c-3.988282 4.011719-9.429688 6.25-15.082032 6.25s-11.09375-2.238281-15.082031-6.25l-120.449219-120.46875c-12.5-12.5-12.5-32.769531 0-45.25l15.085938-15.082031c12.5-12.5 32.746094-12.5 45.246094 0l75.199218 75.203125 203.199219-203.203125c12.503906-12.5 32.769531-12.5 45.25 0l15.082031 15.082031c12.5 12.503906 12.5 32.769531 0 45.25zm0 0" />
      <path d="m165.316406 361.15625c-9.984375 0-19.347656-3.882812-26.386718-10.921875l-128-128.019531c-14.574219-14.570313-14.574219-38.230469 0-52.800782l30.164062-30.167968c14.550781-14.546875 38.25-14.546875 52.800781 0l71.421875 71.445312 199.445313-199.445312c14.550781-14.546875 38.25-14.546875 52.800781 0l30.164062 30.167968c7.0625 7.039063 10.945313 16.425782 10.945313 26.386719 0 9.964844-3.882813 19.351563-10.945313 26.390625l-256 256.023438c-7.058593 7.058594-16.425781 10.941406-26.410156 10.941406zm15.082032-22.226562h.214843zm-112.914063-178.605469c-1.367187 0-2.730469.511719-3.777344 1.558593l-30.164062 30.164063c-2.09375 2.089844-2.09375 5.460937 0 7.554687l128 128.019532c2.003906 2.003906 5.546875 2.003906 7.550781 0l256-256.019532c2.089844-2.09375 2.089844-5.464843 0-7.554687l-30.164062-30.164063c-2.09375-2.089843-5.464844-2.089843-7.554688 0l-210.75 210.75c-6.25 6.253907-16.386719 6.253907-22.636719 0l-82.75-82.75c-1.023437-1.046874-2.367187-1.558593-3.753906-1.558593zm0 0" />
    </svg>
  );
}

export default Check;