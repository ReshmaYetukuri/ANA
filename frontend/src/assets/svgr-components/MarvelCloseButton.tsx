import * as React from 'react';

const SvgMarvelCloseButton: React.FC<any> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={43} height={42} {...props}>
    <defs>
      <linearGradient
        id="Marvel_Close_button_svg__a"
        x1={0.5}
        x2={0.5}
        y2={1}
        gradientUnits="objectBoundingBox"
      >
        <stop offset={0} stopColor="#ea796c" />
        <stop offset={0.481} stopColor="#b8493a" />
        <stop offset={1} stopColor="#db2b1f" />
      </linearGradient>
    </defs>
    <g data-name="Group 4305">
      <g data-name="Group 4304">
        <g
          data-name="Rectangle 1230"
          stroke="#fff"
          strokeWidth={1.5}
          fill="url(#Marvel_Close_button_svg__a)"
        >
          <rect width={43} height={42} rx={5} stroke="none" />
          <rect
            x={0.75}
            y={0.75}
            width={41.5}
            height={40.5}
            rx={4.25}
            fill="none"
          />
        </g>
        <g
          data-name="Group 4303"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2.5}
        >
          <path
            data-name="Union 14"
            d="m22.014 21.598-7.191 7.191 7.191-7.191-7.191-7.191 7.191 7.191 7.191-7.191-7.191 7.191 7.191 7.191Z"
            stroke="#000"
          />
          <path
            data-name="Union 15"
            d="M21.5 21.5 14 29l7.5-7.5L14 14l7.5 7.5L29 14l-7.5 7.5L29 29Z"
            stroke="#fff"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgMarvelCloseButton;
