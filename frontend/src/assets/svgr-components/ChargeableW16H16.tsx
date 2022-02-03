import * as React from 'react';

const SvgChargeableW16H16: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 15 15"
    {...props}
  >
    <defs>
      <linearGradient
        id="chargeable_W16H16_svg__a"
        x1={13.6}
        y1={11.13}
        x2={2.79}
        y2={4.7}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#f5a807" />
        <stop offset={0.13} stopColor="#f5ab0d" />
        <stop offset={0.29} stopColor="#f6b31d" />
        <stop offset={0.48} stopColor="#f8bf38" />
        <stop offset={0.68} stopColor="#fad15e" />
        <stop offset={0.89} stopColor="#fde88d" />
        <stop offset={1} stopColor="#fff5a8" />
      </linearGradient>
    </defs>
    <circle
      cx={7.5}
      cy={7.5}
      r={7}
      style={{
        stroke: '#655533',
        strokeMiterlimit: 10,
        fill: 'url(#chargeable_W16H16_svg__a)',
      }}
    />
    <path d="M10.42 8.96a1.76 1.76 0 0 1-.69 1.39 3.31 3.31 0 0 1-1.76.69v1h-.71v-1a6.85 6.85 0 0 1-1.34-.14 5.34 5.34 0 0 1-1.18-.33v-1.1h.09a4.88 4.88 0 0 0 1.1.53 5.51 5.51 0 0 0 1.33.25V7.88l-.37-.08-.38-.09a2.45 2.45 0 0 1-1.33-.69 1.6 1.6 0 0 1-.4-1.12 1.74 1.74 0 0 1 .69-1.33 3.13 3.13 0 0 1 1.79-.7v-.8h.71v.79A6.91 6.91 0 0 1 9.14 4a6.21 6.21 0 0 1 1 .27v1.09h-.1a5.59 5.59 0 0 0-.95-.46 3.91 3.91 0 0 0-1.11-.24v2.36l.38.08.31.07a2.63 2.63 0 0 1 1.3.61 1.53 1.53 0 0 1 .45 1.18Zm-3.16-2v-2.3a1.73 1.73 0 0 0-.93.33.9.9 0 0 0-.38.77 1 1 0 0 0 .28.81 2.19 2.19 0 0 0 1.03.37Zm2 2.16a1 1 0 0 0-.29-.77 2.22 2.22 0 0 0-1-.37v2.28a1.76 1.76 0 0 0 1-.33 1 1 0 0 0 .28-.83Z" />
  </svg>
);

export default SvgChargeableW16H16;
