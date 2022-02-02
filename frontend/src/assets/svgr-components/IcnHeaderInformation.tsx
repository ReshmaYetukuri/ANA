import * as React from 'react';

const SvgIcnHeaderInformation: React.FC<any> = (props) => (
  <svg
    id="icn_header_information_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 42.72 32.99"
    {...props}
  >
    <defs>
      <linearGradient
        id="icn_header_information_svg__linear-gradient"
        x1={5.17}
        y1={5.67}
        x2={27.87}
        y2={28.37}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0.03} stopColor="#f27a7a" />
        <stop offset={1} stopColor="#d30000" />
      </linearGradient>
      <style>{'.icn_header_information_svg__cls-3{fill:#fff}'}</style>
    </defs>
    <path
      d="M26.23 33H0V0h26.23a16.54 16.54 0 0 1 16.49 16.49A16.55 16.55 0 0 1 26.23 33Z"
      style={{
        fill: '#00737d',
      }}
    />
    <circle
      cx={16.12}
      cy={16.62}
      r={15.62}
      style={{
        fill: 'url(#icn_header_information_svg__linear-gradient)',
      }}
    />
    <path
      className="icn_header_information_svg__cls-3"
      d="M16.12 32.75a16.13 16.13 0 1 1 16.12-16.13 16.15 16.15 0 0 1-16.12 16.13Zm0-31.25a15.13 15.13 0 1 0 15.12 15.12A15.14 15.14 0 0 0 16.12 1.5Z"
    />
    <path
      className="icn_header_information_svg__cls-3"
      d="M15.35 11a2.69 2.69 0 1 0-2.69-2.69A2.69 2.69 0 0 0 15.35 11ZM18.04 25.08V13.03H10.9v.88h2.16v11.17H10.9v.87h8.96v-.87h-1.82z"
    />
  </svg>
);

export default SvgIcnHeaderInformation;
