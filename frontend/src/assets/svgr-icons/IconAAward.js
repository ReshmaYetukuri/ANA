import * as React from 'react';

const SvgIconAAward = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 30 33"
    style={{
      enableBackground: 'new 0 0 30 33',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={30}
      height={33}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAhCAMAAAGOxdt+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDQ3RjI2 NEY1MjUwMTFFMzk0QTk5QzIzNUFFQjE0MzIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDQ3 RjI2NEU1MjUwMTFFMzk0QTk5QzIzNUFFQjE0MzIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjAxZTEyYTg4LWQyN2QtNmU0YS1iZmE0LWRjMzdkMzg2ODE4MyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmXp 0MwAAAMAUExURf/khlSWdv/gdpedM3yudxl8etG1VP7BFfrZZezNX//PP+TGXP/tp//njgd1fBF7 fP/ebv/ebP/BE5uGPgNyfFWKbzeKeTxYXwVxe8kVFgpveI16OU5PVcIYGuEJCdMPENgODg5tdjNb Y1pJTwBzff/dZwAAAOcGBiQYAGdJAN+iANSaAD8rAOqqAP+6AFQ7AHhVAKN2AMiRAIdhALB/APWy AP/IKryIAP+8BpZsAP/LMQFzff/WVP/ZWv/UTX+WPwd1ev/sqf/cZyB8bfjXZHCSRgh3fQdwef/o nIx1Nv/qg//tk/V2N0mPdYmZO74ZG+vDXylgaP+4UcCjTPWpTvu5BrjCb8deOGiPa//uteyuTVac efeZR//UYv63UczNb5UsMP/aZSyHe7KaSP/DGq+IPv/qoNm/Yv/jjJ4pLGNESgJ0fYeocC6Dd/LS Ynqmc8+tGLaJPf/deJt6N/FSJmmaccjQcmCPbrnMdPm1UP/mkQ13e4SxdmmUbqUlKP+zT//dde89 HbgcHqKMQf3EROgPChBrdefIXf/wrNy9WODcff/rpOu1E/BIIgp4fP/xvV+QbsGvYMm2YvG3Veoe EOkSC6leQf/rdEGIZfNcKta5Vquxar+oH7KzZ8LCV/ncaf/aav/eae1jL/RpMPvRYd3AWf27Fv/S YfW2CUdSWeq9RlZKUdHQb/7cZ6G9dP/RRMUWF8UWGDSHeIieSD2DcjqPej6EZLeRRPTSZP/bYV+a dK6VTJC4doaXZp+8dP/kiIwxNejOZJ0wMHZYTv/sm//unP/OXv/vryOEe06TdiuIe9+xEPbXZ/Sh R+wvGHJgLWSUbzCAZfzGKaSFPfTLXZB0Nf/aXv2+VRtmb3aUQ//MNOQHB//herefSm+fc/zCH8WO QsvTc0uIcPzaZv++Df/aZ8sTFM8REv/vufRwNQl1e39qMSFkbFCJVlaLU8rRc//ja//mbc+tHa0h JG2Ta/y1T//qnq6hXuPFXLvLdoZuMotvM+04HDZZYf/nk6PAdWXyMvEAAALWSURBVHjaYlABAgaV DtVcBhU1NW0GlZi7cgwq7ioqAAHEAJFQLVJh0DTQsGcQZ4tTAYsBBBCISOIHM7SttHS1tYGMk6pA sBckr66i0qQiAhBAYIUQtaf6xED01gxVptkqDDe1dE21Ln1i0DfVV9PU02dQcQFq9HzFoKIuzH1+ qgqDu5IKyAyIfkUVgACCmaOCME9FZc/7Izy8Z3J8ofyjAiDLVQWvTALxdTXMtdTUjHU09bS11d4y uKqxG6gZaRkaaQjpqJmA1S/5AVbf/FUUpF5RXV390MTrkyOAtD/EfFmwVSIHgARAAGG1H4Pvtm4N IxL/oRfPN6bETTD+9EigAxcyLJ8L4bM4gq1XFQi4AOJrcWlpWelqr9c21dZ6p8LgrGaupqalq/HE UE1N10iFoUBHTcNSw8jYUtNArcdQhcFET9/EVE3jlpqhvpoGM8g8JxeIeUujtoDNZ+18DOJyXp3G B+bffvkgmXuWdOHMKX9BfFl19XO1E8pFw4H+lVJhEAGG9mew09UDgbEOcm+CNZgvCXN/G8RrUiAC IMDQ/Y83ePhU+HFIn7CuKdv3Mf5D2Pz8XffQpaNZ/nv3v+iu2r//X5pHw47YUmRpt4qfxx3vqMKA INOCY+nWcOkZ87oynqra2ALRTjsgaWfnFNCyahtU+rSOmq6xvoWGpoWGubmacYqmjo6GqZq+huYc kLSriY6Bga6agb6asYaFhqWaliYw2ZuqaS/TNLQHxouumrGhmjkwLVmqmRjrGGrqaBqaqBmpaRup aV1UYXBg1mPezH7fTM8MiCysrpnpWVhxCa3Q0wv1c4C6XIzxYPtjVQTgFE4N+o7k78N/FgWz5a0F y3GwSf8+W9+oDJd+o6Cu3qruE7L7sufrX8XbKxf3lgDjT/4GWFqkTk5+4zMgX4m1OvuLyiM+FXEg 59kGeblMa3iYK6ivRESEjPpztChZrYwcUVkyUAYAm6zvBGBpTokAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconAAward;
