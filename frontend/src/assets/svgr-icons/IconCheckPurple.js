import * as React from 'react';

const SvgIconCheckPurple = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      enableBackground: 'new 0 0 20 20',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: '#ffffb4',
      }}
      d="M0 0h20v20H0z"
    />
    <circle
      cx={10}
      cy={10}
      r={9}
      style={{
        fill: '#a001c8',
      }}
    />
    <path
      d="m3.06 9.91 1.4-1.4 3.66 3.59 7.31-7.31 1.52 1.52-8.89 8.89-5-5.29z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export default SvgIconCheckPurple;
