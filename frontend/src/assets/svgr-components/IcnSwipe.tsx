import * as React from 'react';

const SvgIcnSwipe: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 21"
    {...props}
  >
    <defs>
      <linearGradient
        id="icn_swipe_svg__a"
        x1={5.01}
        y1={6.64}
        x2={17.04}
        y2={6.64}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ff3131" />
        <stop offset={1} stopColor="#930606" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: '#e3ecf5',
      }}
      d="M0 0h20v21H0z"
    />
    <path
      style={{
        fill: '#f6f6f6',
      }}
      d="M3.97 9.82H16v7.17H3.97z"
    />
    <path d="M17 17V9.59a1.09 1.09 0 0 0-1.09-1.09H4.06A1.09 1.09 0 0 0 3 9.59V17H0v2h20v-2ZM4 10h12v7H4Z" />
    <path
      style={{
        fill: 'url(#icn_swipe_svg__a)',
      }}
      d="m17.04 6.64-6.05-4.59v3.1H5.01v2.97h5.98v3.1l6.05-4.58z"
    />
  </svg>
);

export default SvgIcnSwipe;
