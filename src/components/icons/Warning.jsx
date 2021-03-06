import React from 'react';

const Warning = ({color, width, height}) => {
  return (
    <svg 
      width={width}
      height={height}
      viewBox="0 0 24 24" 
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.25 18.7188C15.25 20.528 13.5677 22 11.5 22C9.43225 22 7.75 20.528 7.75 18.7188C7.75 16.9095 9.43225 15.4375 11.5 15.4375C13.5677 15.4375 15.25 16.9095 15.25 18.7188ZM8.18406 2.03355L8.82156 13.1898C8.85152 13.7137 9.34567 14.125 9.94516 14.125H13.0548C13.6543 14.125 14.1485 13.7137 14.1784 13.1898L14.8159 2.03355C14.848 1.47127 14.3357 1 13.6923 1H9.30766C8.66425 1 8.15195 1.47127 8.18406 2.03355Z"/>
    </svg>

  );
}

export default Warning;