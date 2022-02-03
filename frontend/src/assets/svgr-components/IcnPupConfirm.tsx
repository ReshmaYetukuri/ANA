import * as React from 'react';

const SvgIcnPupConfirm: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 44.84"
    {...props}
  >
    <defs>
      <linearGradient
        id="icn_pup_confirm_svg__a"
        x1={25}
        y1={28.29}
        x2={25}
        y2={3.26}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#01b04b" />
        <stop offset={0.93} stopColor="#01a34b" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: '#eee',
      }}
      d="M0 28.24h50v16.61H0z"
    />
    <path
      style={{
        fill: '#00737d',
      }}
      d="M0 0h50v29.9H0z"
    />
    <circle
      cx={25}
      cy={15.72}
      r={12.63}
      style={{
        stroke: '#fff',
        strokeMiterlimit: 10,
        fill: 'url(#icn_pup_confirm_svg__a)',
      }}
    />
    <path
      d="m16.32 16 1.44-1.45L22.5 19 32 9.74l2.16 1.92-11.3 10.84Z"
      transform="translate(0 -.08)"
      style={{
        fill: '#002c13',
      }}
    />
    <path
      d="m15.84 14.83 1.92-1.92 4.74 4.47 8.78-8.28 2.16 1.9-10.7 10.46Z"
      transform="translate(0 -.08)"
      style={{
        fill: '#fff',
      }}
    />
  </svg>
);

export default SvgIcnPupConfirm;
