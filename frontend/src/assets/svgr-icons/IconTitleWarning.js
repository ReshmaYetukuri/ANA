import * as React from 'react';

const SvgIconTitleWarning = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      enableBackground: 'new 0 0 24 24',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <path
      style={{
        fill: '#00a09b',
      }}
      d="M0 0h24v24H0z"
    />
    <linearGradient
      id="icon_title_warning_svg__a"
      gradientUnits="userSpaceOnUse"
      x1={11.94}
      y1={22.965}
      x2={11.94}
      y2={2.189}
    >
      <stop
        offset={0}
        style={{
          stopColor: '#ffbe32',
        }}
      />
      <stop
        offset={0.999}
        style={{
          stopColor: '#fff',
        }}
      />
    </linearGradient>
    <path
      d="m1.11 20.01 8.8-16.88c.82-1.56 3.24-1.56 4.06 0l8.8 16.88c.71 1.37-.37 2.95-2.03 2.95H3.14c-1.66.01-2.74-1.58-2.03-2.95z"
      style={{
        fill: 'url(#icon_title_warning_svg__a)',
      }}
    />
    <path d="M20.5 23.68H3.38c-1.15 0-2.21-.59-2.77-1.55-.5-.87-.53-1.91-.07-2.8L9.1 2.92c.54-1.03 1.62-1.67 2.84-1.67 1.21 0 2.3.64 2.84 1.67l8.56 16.41c.46.89.44 1.94-.07 2.8-.56.96-1.62 1.55-2.77 1.55zM1.56 20.86c-.19.37-.09.68.02.88.17.3.57.62 1.17.62h18.39c.6 0 1-.32 1.17-.62.12-.2.21-.51.02-.88l-9.2-17.63c-.25-.48-.78-.65-1.19-.65-.41 0-.94.17-1.19.65L1.56 20.86z" />
    <path d="M10.29 8.31h3.35v8.58h-3.35zM10.29 18.55h3.35v1.79h-3.35z" />
  </svg>
);

export default SvgIconTitleWarning;
