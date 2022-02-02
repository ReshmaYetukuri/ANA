import * as React from 'react';

const SvgBtnFarefamilyA = (props) => (
  <svg
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 14.8"
    {...props}
  >
    <defs>
      <linearGradient
        id="btn_farefamily_a_svg__a"
        x1={50}
        y1={0.58}
        x2={50}
        y2={14.36}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.06} stopColor="#fff" />
        <stop offset={0.37} stopColor="#e8e8e8" />
        <stop offset={1} stopColor="#b0b0b0" />
      </linearGradient>
    </defs>
    <path
      style={{
        stroke: '#798a99',
        strokeMiterlimit: 10,
        fill: 'url(#btn_farefamily_a_svg__a)',
      }}
      d="M.5.5h99v13.8H.5z"
    />
    <path d="M7.09 4.67a4.24 4.24 0 0 1 7.72 2.43h.84a5.09 5.09 0 0 0-7.83-4.28 5.32 5.32 0 0 0-1.34 1.25L5.39 2.98v3.69ZM16 8l-1.7 2.09a4.24 4.24 0 0 1-7.72-2.43h-.84a5.09 5.09 0 0 0 7.83 4.28 5.32 5.32 0 0 0 1.33-1.25l1.1 1.09V8Z" />
  </svg>
);

export default SvgBtnFarefamilyA;
