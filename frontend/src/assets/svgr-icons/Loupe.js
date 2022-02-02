import * as React from 'react';

const SvgLoupe = (props) => (
  <svg
    id="loupe_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 20 21"
    style={{
      enableBackground: 'new 0 0 20 21',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>
      {
        '.loupe_svg__st3{fill:url(#loupe_svg__SVGID_00000124869276322103525710000012354421821269079990_)}'
      }
    </style>
    <linearGradient
      id="loupe_svg__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={3.923}
      y1={17.718}
      x2={17.532}
      y2={17.718}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#e9f0f9',
          stopOpacity: 0,
        }}
      />
      <stop
        offset={0.982}
        style={{
          stopColor: '#d0d7df',
        }}
      />
    </linearGradient>
    <ellipse
      cx={10.73}
      cy={17.72}
      rx={6.8}
      ry={0.4}
      style={{
        fill: 'url(#loupe_svg__SVGID_1_)',
      }}
    />
    <path
      d="M17.3 17.72c-.12 0-.24-.04-.34-.13l-5.01-4.65c-.2-.19-.21-.5-.03-.71.19-.2.5-.21.71-.03l5.01 4.65c.2.19.21.5.03.71-.1.1-.24.16-.37.16z"
      style={{
        stroke: '#000',
        strokeWidth: 0.5,
        strokeMiterlimit: 10,
      }}
    />
    <circle
      cx={9.39}
      cy={8.85}
      r={6.04}
      style={{
        fill: '#4ab5ff',
        stroke: '#aca39e',
        strokeWidth: 0.75,
        strokeMiterlimit: 10,
      }}
    />
    <linearGradient
      id="loupe_svg__SVGID_00000117649917495127988870000007815298270911557517_"
      gradientUnits="userSpaceOnUse"
      x1={5.605}
      y1={5.516}
      x2={13.258}
      y2={12.255}
    >
      <stop
        offset={0.022}
        style={{
          stopColor: '#78cffc',
        }}
      />
      <stop
        offset={0.262}
        style={{
          stopColor: '#d9f9ff',
        }}
      />
      <stop
        offset={0.455}
        style={{
          stopColor: '#b5e5ff',
        }}
      />
      <stop
        offset={0.696}
        style={{
          stopColor: '#fdffff',
        }}
      />
      <stop
        offset={0.982}
        style={{
          stopColor: '#a1e4ff',
        }}
      />
    </linearGradient>
    <circle
      style={{
        fill: 'url(#loupe_svg__SVGID_00000117649917495127988870000007815298270911557517_)',
      }}
      cx={9.39}
      cy={8.85}
      r={4.99}
    />
  </svg>
);

export default SvgLoupe;
