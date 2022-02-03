import * as React from 'react';

const SvgIconCacao: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 21"
    style={{
      enableBackground: 'new 0 0 20 21',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      d="M17.02 4.19S10.55 12.94.72 6.17c-.01 0 7.17-9.28 16.3-1.98z"
      style={{
        fill: '#1a8c2f',
      }}
    />
    <path
      d="M1.85 18.7S-.13 5.34 16.48 4.47c0-.01 1 16.48-14.63 14.23z"
      style={{
        fill: '#be270f',
      }}
    />
    <path
      d="M1.85 18.7S3.64 6.74 16.48 4.47c0-.01.77 13.87-14.63 14.23z"
      style={{
        fill: '#f7580f',
      }}
    />
    <linearGradient
      id="icon_CACAO_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={18.262}
      y1={6.381}
      x2={3.669}
      y2={20.884}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#610a09',
        }}
      />
      <stop
        offset={0.326}
        style={{
          stopColor: '#610a09',
        }}
      />
      <stop
        offset={0.478}
        style={{
          stopColor: '#ba110a',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#e35110',
        }}
      />
    </linearGradient>
    <path
      d="M16.58 4.57S6.02 17.29 1.95 18.8c0 0 14.11 2.84 14.63-14.23z"
      style={{
        fill: 'url(#icon_CACAO_svg__a)',
      }}
    />
    <path
      d="M17.04 3.05h.97s-.08 1.52-1.67 1.77l-.28-.32s.98-.57.98-1.45z"
      style={{
        fill: '#727224',
      }}
    />
  </svg>
);

export default SvgIconCacao;
