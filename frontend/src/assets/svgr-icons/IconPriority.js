import * as React from 'react';

const SvgIconPriority = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 19 19"
    style={{
      enableBackground: 'new 0 0 19 19',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <linearGradient
      id="icon_priority_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={9.355}
      y1={14.31}
      x2={9.355}
      y2={6.613}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#417901',
        }}
      />
      <stop
        offset={0.301}
        style={{
          stopColor: '#4f9202',
        }}
      />
      <stop
        offset={0.618}
        style={{
          stopColor: '#59a503',
        }}
      />
      <stop
        offset={0.836}
        style={{
          stopColor: '#5dac03',
        }}
      />
    </linearGradient>
    <path
      d="m15.14 8.7-4.31-4.31a1.074 1.074 0 1 0-1.52 1.52l2.47 2.47H4.33c-.59 0-1.08.48-1.08 1.08s.48 1.08 1.08 1.08h7.45L9.31 13c-.42.42-.42 1.1 0 1.52.21.21.49.32.76.32.28 0 .55-.11.76-.32l4.31-4.31c.42-.41.42-1.09 0-1.51z"
      style={{
        fill: 'url(#icon_priority_svg__a)',
      }}
    />
    <path
      d="M14.13 18.3H4.87c-2.3 0-4.16-1.87-4.16-4.16V4.87C.71 2.57 2.58.71 4.87.71h9.26c2.3 0 4.17 1.87 4.17 4.16v9.27c0 2.29-1.87 4.16-4.17 4.16zM4.87 1.45c-1.88 0-3.41 1.53-3.41 3.41v9.27c0 1.88 1.53 3.41 3.41 3.41h9.26c1.88 0 3.42-1.53 3.42-3.41V4.87c0-1.88-1.53-3.41-3.42-3.41H4.87z"
      style={{
        fill: '#5dac03',
      }}
    />
  </svg>
);

export default SvgIconPriority;
