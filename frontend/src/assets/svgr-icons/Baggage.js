import * as React from 'react';

const SvgBaggage = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 17"
    {...props}
  >
    <defs>
      <linearGradient
        id="baggage_svg__a"
        x1={8.11}
        y1={15.41}
        x2={8.11}
        y2={3.65}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b1c4c5" />
        <stop offset={1} stopColor="#edf5f5" />
      </linearGradient>
      <linearGradient
        id="baggage_svg__b"
        x1={23.86}
        y1={15.41}
        x2={23.86}
        y2={3.65}
        xlinkHref="#baggage_svg__a"
      />
      <linearGradient
        id="baggage_svg__c"
        x1={15.97}
        y1={15.41}
        x2={15.97}
        y2={3.65}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b1c4c5" />
        <stop offset={0.99} stopColor="#fff" />
      </linearGradient>
    </defs>
    <path
      style={{
        fill: '#00737d',
      }}
      d="M0 0h32v17H0z"
    />
    <path
      d="M7 5.41v8.49a1 1 0 0 0 1 1h1.21V4.43H8a1 1 0 0 0-1 .98Z"
      style={{
        fill: 'url(#baggage_svg__a)',
      }}
    />
    <path
      d="M24 4.43h-1.26v10.45H24a1 1 0 0 0 1-1V5.41a1 1 0 0 0-1-.98Z"
      style={{
        fill: 'url(#baggage_svg__b)',
      }}
    />
    <path
      d="M19.88 2.12H12.2v2.31H10v10.45h11.93V4.43h-2.05Zm-6.65 2.29V2.84h5.68v1.57Z"
      style={{
        fill: 'url(#baggage_svg__c)',
      }}
    />
  </svg>
);

export default SvgBaggage;
