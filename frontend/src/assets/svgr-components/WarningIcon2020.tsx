import * as React from 'react';

const SvgWarningIcon2020: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    style={{
      enableBackground: 'new 0 0 20 20',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="warning_icon_20-20_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={10}
      y1={1.945}
      x2={10}
      y2={19.651}
    >
      <stop
        offset={0.285}
        style={{
          stopColor: '#fff198',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#ffc137',
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: 'url(#warning_icon_20-20_svg__a)',
        stroke: '#42402a',
        strokeMiterlimit: 10,
      }}
      d="m10 2.2 8.53 17.14H1.47z"
    />
    <path d="M9.01 8.06h1.89v5.45H9.01zM9.01 14.93h1.89v2.08H9.01z" />
  </svg>
);

export default SvgWarningIcon2020;
