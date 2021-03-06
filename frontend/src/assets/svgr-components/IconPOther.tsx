import * as React from 'react';

const SvgIconPOther: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 38 32"
    style={{
      enableBackground: 'new 0 0 38 32',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={38}
      height={32}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAMAAABJuvqBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3 ZWRkMGE2YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QUU4MjVGM0JENzU2MTFFM0EwODRB QzM1QzYzQkI2NkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QUU4MjVGM0FENzU2MTFFM0Ew ODRBQzM1QzYzQkI2NkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJhYTVk YmNmLTQ2N2EtYTk0NS1iYjA0LTM0Y2MzYTdmNjhlMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3ZWRkMGE2YTAiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4krJMhAAABv1BM VEXf9fUSXWIQWV4PWF0RW2ATYGUSXmMUYWYVYmcWZWoOV1wXZ2wZam8YaG0WZGnf9PUMUlcLUVYN VFkuc3gjbXIdY2fR6upTi44eZWmozM5bmJwcYmeMt7kZa3B/rrENVVq219g6fIAoaW08foIoam4l dHhZlJdMjZDS6+uBsLPg9vbE4OFlnJ8XWV58qKvf9PTE4eJAhoo3dnpHhIeLtbfF4uM/hIjT7e1/ rrCNuLosb3ODtbhwoaS42tugx8g1cnZunaCQvsCmyMoZXGE+g4e42dp1q647fYGCs7VilplHgoYw eHwtcXXS7O0xeX7D4OFvn6IKTlNVjpGFtbg1cXW11dbR6eqoy8yZwMKr0dLg9faMtriAsLIbYWao zM2LtLd+rK6009R/ra9Nj5OKs7VWj5O32dpCen4fZ2xglJcrbXKZv8Gpzc9mnqG32NlWkJMKT1Rz pqmAr7J9q60lcXYyen+awcKBsbR7p6lCen1noKN0qKunyswgaW5smp200tQYW2A9f4MaX2RKiY0f Z2txoqVhlplvnqHD3+B9qqwmdXlZlZhIhorC3t8udHkham80b3QtcnZLio5GgYXt//8l0akBAAAA lXRSTlP///////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////ADZkGzgAAAGfSURBVHjavJRF cwJBEEZnFRZbJBACgQAx4h7i7u7u7u7u7ukfnE5VThvYzSlz2sOrmjfd37cE/nTI/2IRE3/BIli6 VRFzN2XRzKYS5qZY2nkkfynx+P12mumTfQJJ5njqeozRxMhhJBopli7KjDKnymDJnDcf7TWLZuNZ T2jMwueNWJnhUVuZaW1fihVnOABy4i6HYA5vZMJFm7Eipf1EisXq9DM5YWoV557GSXSDWGqaHT/9 5Vau1zZ+IMVTkeg1f1tpSnmW7DSxsBkgXjCooz1eim2o10SZjaa3NMnqAw8uR3XLo0GtWgJSQDPZ 9z5j116aNCGJ6KUVwhJU3BNAL6O5EIMHyYFUHCEW9AII/5nqb2xLKxjWMTgUayVg800FiWWgZvKg 8xC90gE6cF7B01vo+vbaRS8vIUXOn21LsX6XLvd7EiXoVbDA3LSJQbEMXS7AslpV67nCDWXehaiM Tl+FHy8cT5Ksn9liqGZta4UVgA2eSpItYJ1gOCewStnlezqAmTh+p9hBhTqnv2Im7DuKrSf5eZHk H381XwIMABcqM+r7fRPDAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconPOther;
