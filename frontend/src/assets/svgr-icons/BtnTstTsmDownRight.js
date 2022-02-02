import * as React from 'react';

const SvgBtnTstTsmDownRight = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 65 30"
    {...props}
  >
    <defs>
      <radialGradient
        id="btn_TST-TSM_down_right_svg__a"
        cx={5.87}
        cy={4.36}
        r={4.39}
        gradientTransform="matrix(-1 0 0 1 65 0)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#deffe7" />
        <stop offset={1} stopColor="#61cd6d" />
      </radialGradient>
    </defs>
    <path d="M60.36 30H0V0h60.36A4.64 4.64 0 0 1 65 4.64v20.72A4.64 4.64 0 0 1 60.36 30Z" />
    <circle
      cx={58.9}
      cy={6.07}
      r={3.14}
      style={{
        fill: 'url(#btn_TST-TSM_down_right_svg__a)',
      }}
    />
  </svg>
);

export default SvgBtnTstTsmDownRight;
