import * as React from 'react';

const SvgComfirmInfo: React.FC<any> = (props) => (
  <svg
    id="comfirmInfo_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16.13 16.13"
    {...props}
  >
    <defs>
      <style>{'.comfirmInfo_svg__cls-2{fill:#fff}'}</style>
    </defs>
    <circle
      cx={8.07}
      cy={8.07}
      r={8.07}
      style={{
        fill: '#00737d',
      }}
    />
    <path
      className="comfirmInfo_svg__cls-2"
      d="M6.59 3.04h2.95v2.04H6.59zM6.59 7.05h2.95v7.02H6.59z"
    />
  </svg>
);

export default SvgComfirmInfo;
