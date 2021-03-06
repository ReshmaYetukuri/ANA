import * as React from 'react';

const SvgIconHSsrService: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 32"
    style={{
      enableBackground: 'new 0 0 48 32',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={48}
      height={32}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY4M0Iy RDlBMTE0MTFFNEJDMjhEMDk5MTFGRDYzNDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDY4 M0IyRDhBMTE0MTFFNEJDMjhEMDk5MTFGRDYzNDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjM2YjBmMzA4LTI3MGEtYjI0MS1iMWUzLWI0YjFjYjAwM2MyNCIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjF4 weQAAAMAUExURQMvMhZcYRpISwItMBdbYBxscBxqbgk+QgU0OBtERwo/QxtqbyFkaAEpLAc4PAg6 PgxFSRJUWBFRVQ5JTQk9QRJTVxVbXwUzNw1HSwpARAc5PQtDRw9NUQxESAY1OQQyNRNVWRRYXA5K TgQwNA1ITBRZXQg8QBFQVBNXWwtCRhFSVhNWWgY2OhBPUw9MUAY3OhBOUgY3Owg7PhpnbAMuMRtp bgIrL/z9/RZeYg5LTwxGShpmawY2OQk8QA9LTwpBRRlkaQc5PAg7Pwg8PwQxNQU0NxJUWQQyNhdh ZQQxNAMvMzRdYAEqLhRXW/39/RRYXRZeYxdfYwtBRRJSVhVaXxdeYxhiZhhiZxhjZxpmahpobBdg ZRllaQk9QBRZXg1GSgpAQxVaXgc3OxlkaO3z8wk+QQUzNhVcYDV1eVyBhJWmp9Lc3RdgZClpbRlm alOAg0ZlZ7HFxkF9gUdnaezv78LS0iFscFaVmI+jpFWMjzFTVl5/gQkyNQg6PdDh4ixiZtXj5BVS Vk59gA1ISx5tcRFQVXahox9NUT6AhAtERxNVWhBOUxtpbfv8/YywsnGanM7g4cjZ2h1ZXRteYsfX 2BllahZdYbC/wBRXXBFCRpKztQtCRd7o6Ki2t6LExg5ESK/Bwc/Y2a3HyKm8vnqoqv39/mKSlf3+ /gw7PsrT087V1gYuMV6Ul+/z83aorCVzdy9ydixscIamqEV0d0J6fcXQ0BhjaB1vdAo4PH6prNPi 4hBNUTFtcQEqLUJsb4ylphZbXxhhZdni5BhhZtLa2wc4OxFLT1eChRNGSu/19RVYXYOcnxdfZDlz djN6f3OPkT91eB1ucxplahBQVAc6PRlWWhpLT1uPkRBPVD2Chj6ChhFRVh9UWPL19QpBRKq7vLDH yBJSV2+anRNSVhNWW7vT1GWYm02Dhp2ur7rJy9Pj5B9rb6vHyCpNTwtDRilcXxQ6Pezz82+Iir7P 0AUyNg01OBpna0+ChXOKjBtobfv9/WSanRxhZTZ2e42ws////4zJ1JYAAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAACSElEQVR42mL4TyJgoJqGV7dYTV+vMSdaw4QW7h7j PIcNy4nVcI7757epyeHRbURqOGkaZR2zLSwnYCORGhqMIx0iDp+xYOQhUoO5dXK4R+C09MSzxPqh Miw6dJpYnOIDYjWYZ1gwiqnO6Cch4mZt2fN9Cq1iOqXvee7kU9qCwY+v1h8vxKrhY/k8hFiRRXqI qoaCoJZ6t4ydsMqdbCwa1m2/ePPpko6ynUD2v2liiYpPFESFLhvoWQpLWMnOf4mpoW49Kysoci+l /O/9AwxNbcGHQrq79ZRUJAQ6NSVPLMX0w6/fbKDIPXj9/zKgc7qAztGVsVNSiReQDpJkFzmNzdO7 nr356xEYOvGAv4aC6G11qHPe2XOx2zp54wilRQHTxFgUtd1EhXQN9JSEJQRkNSW5RNT4pZhwBSuP mKqvtqBWaxPUObOBzmnndzRcgUvDI5BztNTzSy2Fm61kpe0T2G1nVvPpy3Hg0rDWF+icG413/x8D OeceV6qakfd0HTnXL0dwxfSFYCFdmU3//78XkAY535nf8byfjbi75wtcGuZMMpDZDKQzpYMS2GOd rvDpL/zPKa/s9Ql3Wvp8CEQutgc5R+qozo7//4uVvUyKCaXWfWDnJOnIiU//X8FgwvyWgIYFQOfU 8hnacIjLc/4vYWY2+0BAwzVbIylgaLqmuSh7bf3/1cxnNX4N+4GRC3KOu4syg0nB/6q9vLx+eDUw 8UOc46lswsxc8/8HLy/vSnwa7oOcw5EGDE2gejOfuauAGrLIztMAAQYA4WOutDfUK+4AAAAASUVO RK5CYII="
    />
  </svg>
);

export default SvgIconHSsrService;
