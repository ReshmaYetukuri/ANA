import * as React from 'react';

const SvgBtnTstTsmDownLeft = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 30"
    {...props}
  >
    <defs>
      <radialGradient
        id="btn_TST-TSM_down_left_svg__a"
        cx={5.87}
        cy={4.36}
        r={4.39}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#deffe7" />
        <stop offset={1} stopColor="#61cd6d" />
      </radialGradient>
    </defs>
    <path d="M4.64 0H65v30H4.64A4.64 4.64 0 0 1 0 25.36V4.64A4.64 4.64 0 0 1 4.64 0Z" />
    <circle
      cx={6.1}
      cy={6.07}
      r={3.14}
      style={{
        fill: 'url(#btn_TST-TSM_down_left_svg__a)',
      }}
    />
  </svg>
);

export default SvgBtnTstTsmDownLeft;
