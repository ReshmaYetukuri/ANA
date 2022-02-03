import * as React from 'react';

const SvgAsrBtnOk: React.FC<any> = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 115 78"
    {...props}
  >
    <defs>
      <linearGradient
        id="asr_btn_ok_svg__a"
        x1={57.5}
        y1={0.72}
        x2={57.5}
        y2={77.3}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#6ca3fa" />
        <stop offset={1} stopColor="#0563ff" />
      </linearGradient>
    </defs>
    <rect
      x={0.5}
      y={0.5}
      width={114}
      height={77}
      rx={4.83}
      style={{
        stroke: '#0040a6',
        strokeMiterlimit: 10,
        fill: 'url(#asr_btn_ok_svg__a)',
      }}
    />
  </svg>
);

export default SvgAsrBtnOk;
