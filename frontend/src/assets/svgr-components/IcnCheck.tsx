import * as React from 'react';

const SvgIcnCheck: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 25 25"
    {...props}
  >
    <path
      style={{
        fill: '#00a09b',
      }}
      d="M0 0h25v25H0z"
    />
    <circle
      cx={12.5}
      cy={12.5}
      r={11.93}
      style={{
        fill: '#01b04b',
        stroke: '#fff',
        strokeMiterlimit: 10,
      }}
    />
    <path
      d="m3.56 12.94 1.87-1.41L11 17.05l9.59-9.59L22 8.88l-11.47 11Z"
      style={{
        fill: '#002c13',
      }}
    />
    <path
      d="M3.56 12.5 5 11.09l5 5 9.59-9.59L21 7.9l-11 11Z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export default SvgIcnCheck;
