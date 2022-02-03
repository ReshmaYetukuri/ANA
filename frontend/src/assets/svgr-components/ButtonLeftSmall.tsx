import * as React from 'react';

const SvgButtonLeftSmall: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.97 21.95"
    {...props}
  >
    <path
      style={{
        fill: '#ddd',
        stroke: '#848484',
        strokeMiterlimit: 10,
      }}
      d="M.5.5h16.97v20.95H.5z"
    />
    <path
      style={{
        fill: '#6d6d6d',
      }}
      d="m5.99 10.97 4.88-2.81v5.63l-4.88-2.82z"
    />
  </svg>
);

export default SvgButtonLeftSmall;
