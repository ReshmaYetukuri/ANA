import * as React from 'react';

const SvgIconWchrBullet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 14 14"
    style={{
      enableBackground: 'new 0 0 14 14',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="icon_wchr_bullet_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={7}
      y1={0.405}
      x2={7}
      y2={13.748}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#01bab4',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#018c88',
        }}
      />
    </linearGradient>
    <path
      d="M12.51 13.78H1.49c-.69 0-1.25-.56-1.25-1.25V1.5C.24.81.8.25 1.49.25h11.02c.69 0 1.25.56 1.25 1.25v11.02c0 .7-.56 1.26-1.25 1.26z"
      style={{
        fill: 'url(#icon_wchr_bullet_svg__a)',
        stroke: '#00817d',
        strokeWidth: 0.75,
        strokeMiterlimit: 10,
      }}
    />
    <path
      style={{
        fill: '#fff',
      }}
      d="M10.55 7.01 7.58 8.54l-2.96 1.53V3.96l2.96 1.53z"
    />
  </svg>
);

export default SvgIconWchrBullet;
