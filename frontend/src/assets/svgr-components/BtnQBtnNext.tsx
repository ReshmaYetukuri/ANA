import * as React from 'react';

const SvgBtnQBtnNext: React.FC<any> = (props) => (
  <svg
    id="btn_q_btn_next_svg__Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 40 14"
    {...props}
  >
    <defs>
      <style>
        {
          '.btn_q_btn_next_svg__cls-2{fill:#262523;stroke:#e6eef6;stroke-miterlimit:10;stroke-width:.5px}'
        }
      </style>
    </defs>
    <path
      style={{
        fill: '#e6eef6',
      }}
      d="M0 0h40v14H0z"
    />
    <path
      className="btn_q_btn_next_svg__cls-2"
      d="M21.79 2.45v9.1L29.67 7l-7.88-4.55zM11.57 11.55 19.46 7l-7.89-4.55v9.1z"
    />
  </svg>
);

export default SvgBtnQBtnNext;
