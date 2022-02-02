import * as React from 'react';

const SvgArnkCar = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 288 173.04"
    {...props}
  >
    <defs>
      <linearGradient
        id="arnk_car_svg__a"
        x1={144}
        y1={173.8}
        x2={144}
        y2={147.73}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff" />
        <stop offset={1} stopColor="#545454" />
      </linearGradient>
      <linearGradient
        id="arnk_car_svg__b"
        x1={144}
        y1={148.83}
        x2={144}
        y2={1.96}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#3a3a3a" />
        <stop offset={1} stopColor="#7e7e7e" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: 'url(#arnk_car_svg__a)',
      }}
      d="M0 146.86h288v26.17H0z"
    />
    <path
      d="m224.61 53-15-48S112.45-2 78.54 5L64.52 53A15.46 15.46 0 0 0 49.2 68.44v55.67H64v19.5a5.22 5.22 0 0 0 5.22 5.22h13.54a5.22 5.22 0 0 0 5.24-5.22v-19.5h112v19.5a5.22 5.22 0 0 0 5.21 5.22h13.51a5.22 5.22 0 0 0 5.21-5.22v-19.5h14.87V68.44A15.46 15.46 0 0 0 224.61 53ZM85.17 13.11s91.93-5.94 116.74 0L213.54 53H74.1ZM83 100.49a17.13 17.13 0 1 1 17.13-17.13A17.12 17.12 0 0 1 83 100.49Zm121.3 0a17.13 17.13 0 1 1 17.12-17.13 17.13 17.13 0 0 1-17.08 17.13Z"
      transform="translate(0 -1.96)"
      style={{
        fill: 'url(#arnk_car_svg__b)',
      }}
    />
  </svg>
);

export default SvgArnkCar;
