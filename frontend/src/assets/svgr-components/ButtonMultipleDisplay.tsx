import * as React from 'react';

const SvgButtonMultipleDisplay: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30.05 19.96"
    {...props}
  >
    <defs>
      <linearGradient
        id="button_multiple_display_svg__a"
        x1={15.03}
        y1={0.5}
        x2={15.03}
        y2={19.42}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.01} stopColor="#eaf2fa" />
        <stop offset={0.41} stopColor="#fdfdfe" />
        <stop offset={1} stopColor="#c8dbed" />
      </linearGradient>
    </defs>
    <path
      style={{
        stroke: '#7a8b9b',
        strokeMiterlimit: 10,
        fill: 'url(#button_multiple_display_svg__a)',
      }}
      d="M.5.5h29.05v18.96H.5z"
    />
    <path
      style={{
        fill: '#3361ca',
      }}
      d="M8.22 5.52h13.5v4.01H8.22z"
    />
    <path
      style={{
        fill: '#c13074',
      }}
      d="M8.22 10.76h13.5v4.01H8.22z"
    />
  </svg>
);

export default SvgButtonMultipleDisplay;
