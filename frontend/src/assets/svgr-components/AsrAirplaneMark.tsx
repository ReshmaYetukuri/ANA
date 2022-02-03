import * as React from 'react';

const SvgAsrAirplaneMark: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 80 80"
    {...props}
  >
    <path
      style={{
        fill: '#e0e0e0',
      }}
      d="M0 0h80v80H0z"
    />
    <path
      d="M45.4 29.3 74.18 47v7L45.4 45.17V64l10.79 5.8v5.26L40 71.55l-16.19 3.51V69.8L34.6 64V45.16L5.82 54v-7L34.6 29.3V10.2a5.4 5.4 0 0 1 10.8 0Z"
      style={{
        fill: '#8c8c8c',
      }}
    />
  </svg>
);

export default SvgAsrAirplaneMark;
