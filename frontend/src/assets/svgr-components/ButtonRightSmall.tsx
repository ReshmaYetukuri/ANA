import * as React from 'react';

const SvgButtonRightSmall: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 17.94 22.01"
    {...props}
  >
    <path
      transform="rotate(-180 8.99 10.995)"
      style={{
        fill: '#ddd',
        stroke: '#848484',
        strokeMiterlimit: 10,
      }}
      d="M.54.48h16.94v21.01H.54z"
    />
    <path
      style={{
        fill: '#6d6d6d',
      }}
      d="M12.1 10.5 6.06 7.01v6.98l6.04-3.49z"
    />
  </svg>
);

export default SvgButtonRightSmall;
