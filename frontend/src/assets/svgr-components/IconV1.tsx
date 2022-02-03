import * as React from 'react';

const SvgIconV1: React.FC<any> = (props) => (
  <svg
    id="icon_V1_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 37 25"
    style={{
      enableBackground: 'new 0 0 37 25',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{'.icon_V1_svg__st1{fill:#020000}'}</style>
    <linearGradient
      id="icon_V1_svg__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={18.5}
      y1={2.69}
      x2={18.5}
      y2={21.954}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#f9df5e',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#c67c04',
        }}
      />
    </linearGradient>
    <path
      d="M23 21.88h-9c-5.18 0-9.37-4.2-9.37-9.37 0-5.18 4.2-9.37 9.37-9.37h9c5.18 0 9.37 4.2 9.37 9.37.01 5.17-4.19 9.37-9.37 9.37z"
      style={{
        fill: 'url(#icon_V1_svg__SVGID_1_)',
        stroke: '#796318',
        strokeMiterlimit: 10,
      }}
    />
    <path
      className="icon_V1_svg__st1"
      d="m15.42 16.54-2.61-8.08h1.61l1.1 3.67c.31 1.02.58 1.97.79 2.95h.02c.22-.96.5-1.94.83-2.93l1.18-3.69h1.57l-2.79 8.08h-1.7zM22.77 10.08h-.02l-1.43.72-.25-1.12 1.9-.94h1.24v7.8h-1.43v-6.46z"
    />
  </svg>
);

export default SvgIconV1;
