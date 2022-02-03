import * as React from 'react';

const SvgAlertBlueW25H25: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 23 22"
    {...props}
  >
    <defs>
      <linearGradient
        id="alert_blue_W25H25_svg__a"
        x1={12.35}
        y1={22.86}
        x2={12.35}
        y2={3.04}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#ffa200" />
        <stop offset={1} stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      d="m2 20 8.42-16a2.23 2.23 0 0 1 3.87 0l8.39 16a2 2 0 0 1-1.94 2.82H4A2 2 0 0 1 2 20Z"
      transform="translate(-.85 -1.84)"
      style={{
        fill: 'url(#alert_blue_W25H25_svg__a)',
      }}
    />
    <path d="M19.89 22H3.15a3.14 3.14 0 0 1-2.72-1.52 2.81 2.81 0 0 1-.06-2.74l8.35-16.1a3.18 3.18 0 0 1 5.56 0l8.4 16.1a2.81 2.81 0 0 1-.07 2.74A3.14 3.14 0 0 1 19.89 22ZM2.02 18.67a.77.77 0 0 0 0 .8 1.22 1.22 0 0 0 1.13.56h16.74a1.22 1.22 0 0 0 1.07-.56.77.77 0 0 0 0-.8l-8.37-16.1a1.3 1.3 0 0 0-2.18 0Z" />
    <path d="M11.5 14.89a1 1 0 0 1-1-1V7.62a1 1 0 0 1 2 0v6.27a1 1 0 0 1-1 1ZM11.5 17.65a1 1 0 0 1-1-1 1 1 0 1 1 1 1Z" />
  </svg>
);

export default SvgAlertBlueW25H25;
