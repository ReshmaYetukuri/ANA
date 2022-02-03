import * as React from 'react';

const SvgIconTitleBalloon: React.FC<any> = (props) => (
  <svg
    id="icon_title_balloon_svg__Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <style>{'.icon_title_balloon_svg__st2{fill:#4e4213}'}</style>
    <path
      style={{
        fill: '#00a09b',
      }}
      d="M-.03 0h24v24h-24z"
    />
    <linearGradient
      id="icon_title_balloon_svg__SVGID_1_"
      gradientUnits="userSpaceOnUse"
      x1={1.798}
      y1={11.335}
      x2={22.113}
      y2={13.63}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#ffe44f',
        }}
      />
      <stop
        offset={1}
        style={{
          stopColor: '#edb627',
        }}
      />
    </linearGradient>
    <path
      d="M11.97 3.54C5.81 3.54.81 7.16.81 11.63c0 1.76.85 3.98 2.8 5.65-.41 1.5-.33.86-1.08 3.18 0 0 .9-.47 4.23-1.41 1.23.42 2.66.67 4.33.67 6.16 0 12.05-3.62 12.05-8.09-.01-4.47-5.01-8.09-11.17-8.09z"
      style={{
        fill: 'url(#icon_title_balloon_svg__SVGID_1_)',
        stroke: '#000',
        strokeWidth: 0.5,
        strokeMiterlimit: 10,
      }}
    />
    <path
      className="icon_title_balloon_svg__st2"
      d="M4.58 10.13h3.48v3.48H4.58zM9.77 10.13h3.48v3.48H9.77zM14.95 10.13h3.48v3.48h-3.48z"
    />
  </svg>
);

export default SvgIconTitleBalloon;
