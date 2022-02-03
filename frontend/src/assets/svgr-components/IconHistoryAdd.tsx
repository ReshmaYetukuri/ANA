import * as React from 'react';

const SvgIconHistoryAdd: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    style={{
      enableBackground: 'new 0 0 16 16',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <circle
      cx={8}
      cy={8}
      r={7.16}
      style={{
        fill: '#062d90',
      }}
    />
    <path
      d="M8.41 4.57V7.6h2.91v.77H8.41v3.06h-.82V8.37H4.67V7.6h2.92V4.57h.82z"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export default SvgIconHistoryAdd;
