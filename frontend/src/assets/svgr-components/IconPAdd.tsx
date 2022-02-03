import * as React from 'react';

const SvgIconPAdd: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    style={{
      enableBackground: 'new 0 0 14 14',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={6.99}
      cy={7.01}
      r={6.46}
      style={{
        fill: '#062d90',
      }}
    />
    <path
      style={{
        fill: '#fff',
      }}
      d="M10.99 5.99H8.01V3.01H5.97v2.98H2.99v2.04h2.98v2.98h2.04V8.03h2.98z"
    />
  </svg>
);

export default SvgIconPAdd;
