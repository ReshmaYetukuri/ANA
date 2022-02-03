import * as React from 'react';

const SvgButtonWebMinds: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 80 25"
    style={{
      enableBackground: 'new 0 0 80 25',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={80}
      height={25}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAAZCAMAAACRmFk7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MzRlOTdkYy00MDNkLTA5NGQtYjM3NS1mM2M4 YjE4MWNlMDEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDE1RTE3Q0E5MjE2MTFFMzgwQzI4 MjBDMENBREM2ODAiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDE1RTE3Qzk5MjE2MTFFMzgw QzI4MjBDMENBREM2ODAiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjQzNGU5 N2RjLTQwM2QtMDk0ZC1iMzc1LWYzYzhiMTgxY2UwMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDo0MzRlOTdkYy00MDNkLTA5NGQtYjM3NS1mM2M4YjE4MWNlMDEiLz4gPC9yZGY6RGVzY3JpcHRp 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 5i8BBgBi86tkqoHT8wAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgButtonWebMinds;
