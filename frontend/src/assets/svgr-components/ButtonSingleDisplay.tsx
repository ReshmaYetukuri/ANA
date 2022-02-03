import * as React from 'react';

const SvgButtonSingleDisplay: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 30.05 19.96"
    {...props}
  >
    <defs>
      <linearGradient
        id="button_single_display_svg__a"
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
      <linearGradient
        id="button_single_display_svg__b"
        x1={15.03}
        y1={5.32}
        x2={15.03}
        y2={14.78}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#dae7f0" />
      </linearGradient>
    </defs>
    <path
      style={{
        strokeMiterlimit: 10,
        stroke: '#8093a5',
        fill: 'url(#button_single_display_svg__a)',
      }}
      d="M.5.5h29.05v18.96H.5z"
    />
    <path
      style={{
        stroke: '#4671cd',
        fill: 'url(#button_single_display_svg__b)',
        strokeMiterlimit: 10,
      }}
      d="M9.27 5.23h11.52v9.5H9.27z"
    />
    <path
      style={{
        fill: '#2b5ac8',
      }}
      d="M9.72 5.46H20.3v2.91H9.72z"
    />
  </svg>
);

export default SvgButtonSingleDisplay;
