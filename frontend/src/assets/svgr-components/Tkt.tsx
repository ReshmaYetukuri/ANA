import * as React from 'react';

const SvgTkt: React.FC<any> = (props) => (
  <svg
    id="TKT_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 44 38"
    style={{
      enableBackground: 'new 0 0 44 38',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{'.TKT_svg__st1{fill:#fff}'}</style>
    <linearGradient
      id="TKT_svg__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={6.005}
      y1={12.754}
      x2={37.995}
      y2={12.754}
    >
      <stop
        offset={0.002}
        style={{
          stopColor: '#20787d',
        }}
      />
      <stop
        offset={0.995}
        style={{
          stopColor: '#003c42',
        }}
      />
    </linearGradient>
    <path
      style={{
        fill: 'url(#TKT_svg__SVGID_1_)',
      }}
      d="M38 3.68H13.23L6 9.81v12.02h32z"
    />
    <path
      className="TKT_svg__st1"
      d="M13.3 9.37h-3.1V8.25h7.55v1.12h-3.12v7.88H13.3V9.37zM18.89 8.25h1.32v4.92h.05c.27-.39.54-.76.8-1.09l3.12-3.83h1.63l-3.69 4.33 3.98 4.67h-1.56l-3.36-3.81-.97 1.12v2.69h-1.32v-9zM29.35 9.37h-3.1V8.25h7.55v1.12h-3.12v7.88h-1.33V9.37z"
    />
  </svg>
);

export default SvgTkt;
