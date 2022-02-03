import * as React from 'react';

const SvgIcnWarning: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 33.61 32.57"
    {...props}
  >
    <defs>
      <linearGradient
        id="icn_warning_svg__a"
        x1={20}
        y1={5.66}
        x2={20}
        y2={34.27}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#fff49e" />
        <stop offset={1} stopColor="#ffbe31" />
      </linearGradient>
    </defs>
    <path
      d="M30.66 34.27H9.34a4.07 4.07 0 0 1-3.58-2.07 3.86 3.86 0 0 1 0-3.66L16.37 7.9A4 4 0 0 1 20 5.73a4 4 0 0 1 3.63 2.17l10.66 20.64a3.86 3.86 0 0 1 0 3.66 4.07 4.07 0 0 1-3.63 2.07Z"
      transform="translate(-3.2 -3.71)"
      style={{
        fill: 'url(#icn_warning_svg__a)',
      }}
    />
    <path d="M28.97 32.58H4.63a4.65 4.65 0 0 1-4.08-2.37 4.4 4.4 0 0 1-.06-4.17L12.66 2.48A4.61 4.61 0 0 1 16.8 0a4.62 4.62 0 0 1 4.14 2.49l12.17 23.55a4.4 4.4 0 0 1-.06 4.17 4.66 4.66 0 0 1-4.08 2.37Zm-25.8-5a.93.93 0 0 0 0 .94 1.63 1.63 0 0 0 1.46.77h24.34a1.63 1.63 0 0 0 1.45-.77.93.93 0 0 0 0-.94L18.27 4.06a1.63 1.63 0 0 0-1.47-.77 1.63 1.63 0 0 0-1.47.8Z" />
    <path d="M18.38 21.84H15.3l-.72-10.28h4.45l-.65 10.28zM16.8 27.46a1.9 1.9 0 0 1-1.91-1.89 1.91 1.91 0 0 1 3.82 0 1.93 1.93 0 0 1-1.91 1.89Z" />
  </svg>
);

export default SvgIcnWarning;
