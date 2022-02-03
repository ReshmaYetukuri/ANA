import * as React from 'react';

const SvgButtonAddRowBkUpGray: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 18 18"
    {...props}
  >
    <path
      style={{
        fill: '#d3d9dc',
      }}
      d="M0 0h18v18H0z"
    />
    <circle
      cx={9}
      cy={9}
      r={8}
      style={{
        fill: '#fff',
      }}
    />
    <path
      d="M9.62 3.84V8.4H14v1.16H9.62v4.6H8.38v-4.6H4V8.4h4.38V3.84Z"
      style={{
        fill: '#00027a',
      }}
    />
  </svg>
);

export default SvgButtonAddRowBkUpGray;
