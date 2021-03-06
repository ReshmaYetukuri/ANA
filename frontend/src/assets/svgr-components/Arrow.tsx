import * as React from 'react';

const SvgArrow: React.FC<any> = (props) => (
  <svg
    id="arrow_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 27.06 12.56"
    {...props}
  >
    <defs>
      <style>{'.arrow_svg__cls-1{fill:#939393}'}</style>
    </defs>
    <path
      className="arrow_svg__cls-1"
      d="M21.9 13.3a.73.73 0 0 1-.52-.21.75.75 0 0 1 0-1.06l5-5.08-5-4.95a.75.75 0 0 1 0-1.06.75.75 0 0 1 1.06 0L28 6.41a.8.8 0 0 1 .23.53.75.75 0 0 1-.22.53l-5.53 5.61a.75.75 0 0 1-.58.22Z"
      transform="translate(-1.12 -.74)"
    />
    <circle className="arrow_svg__cls-1" cx={15.77} cy={6.28} r={1.84} />
    <circle className="arrow_svg__cls-1" cx={8.81} cy={6.28} r={1.84} />
    <circle className="arrow_svg__cls-1" cx={1.84} cy={6.28} r={1.84} />
  </svg>
);

export default SvgArrow;
