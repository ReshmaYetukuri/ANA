import * as React from 'react';

const SvgBtnTstTsmUpLeft = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64.98 29.99"
    {...props}
  >
    <defs>
      <radialGradient
        id="btn_TST-TSM_up_left_svg__b"
        cx={5.79}
        cy={4.54}
        r={3.87}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#d8d8d8" />
        <stop offset={1} stopColor="#c5c5c5" />
      </radialGradient>
      <linearGradient
        id="btn_TST-TSM_up_left_svg__a"
        x1={32.49}
        y1={29.49}
        x2={32.49}
        y2={0.72}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#c2d6e8" />
        <stop offset={0.7} stopColor="#fefeff" />
        <stop offset={1} stopColor="#e4ecf5" />
      </linearGradient>
    </defs>
    <path
      d="M5.14.5h59.34v29H5.14A4.64 4.64 0 0 1 .5 24.85V5.14A4.64 4.64 0 0 1 5.14.5Z"
      style={{
        strokeMiterlimit: 10,
        stroke: '#798a99',
        fill: 'url(#btn_TST-TSM_up_left_svg__a)',
      }}
    />
    <circle
      cx={5.99}
      cy={6.04}
      r={2.77}
      style={{
        stroke: '#9ca2a6',
        strokeWidth: '.5px',
        fill: 'url(#btn_TST-TSM_up_left_svg__b)',
        strokeMiterlimit: 10,
      }}
    />
  </svg>
);

export default SvgBtnTstTsmUpLeft;
