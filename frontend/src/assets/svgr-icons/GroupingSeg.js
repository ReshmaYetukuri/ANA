import * as React from 'react';

const SvgGroupingSeg = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15.02"
    {...props}
  >
    <defs>
      <linearGradient
        id="groupingSeg_svg__a"
        x1={0.98}
        y1={7.51}
        x2={14.02}
        y2={7.51}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fefdfa" />
        <stop offset={1} stopColor="#d6a834" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: 'url(#groupingSeg_svg__a)',
      }}
      d="M.98 1.01h13.05v13H.98z"
    />
    <path
      style={{
        fill: '#ad8117',
      }}
      d="M.98 15.02V1.01H15V0H0v15.02h.98z"
    />
    <path
      style={{
        fill: '#211903',
      }}
      d="M14.02 0v14.01H0v1.01h15V0h-.98z"
    />
  </svg>
);

export default SvgGroupingSeg;
