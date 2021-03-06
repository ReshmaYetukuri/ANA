import * as React from 'react';

const SvgIconFw: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 45 45"
    style={{
      enableBackground: 'new 0 0 45 45',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={45}
      height={45}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY3MDY1 RUM1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY3 MDY1RUI1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjA0MzkxYWMwLWNmMGYtYTc0Yy1iYjExLTFlYjJmYzljYjkzOSIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj5t OosAAAGSUExURYiam7HIylRhYUVPULrT1cPd3x0iIgZ2gHyNjtHv8ae9vzM7Ow16g5Kmp9Pw8gh4 glqhqAd2gHWvtL7j5kWco8zd3mNxcpPKzufq6tTx86vY3MbZ28nq7aTU2Im6vszn6Z/R1Z2ys8vc 3ni6wIHAxS2Kkg56hHu8waXV2QFzfQ57harX2zKRmXm7wBuDjDiUnMDl59Df4DSOls3d3legpny9 wo3Hy77k51OepHawtX++w6DR1bvi5ReAicjq7LDO0azZ3BeBijuWng16hAR1f9Lv8TSSms/u8DWO lrnh5BiAiZ/FyBJ9h87t77Db3ySIkR+FjkidpRyEjUufpx+DjDWTm2+ssjaTmyuNlZbL0HB/gLLc 4Iq6v8rr7T6Ynxd/iAJ0fsLm6C6Lkz+YoCyNlh2Ci8vc3RF9hhyBisPm6QV2gKPT1yCDjK3Z3Ued pKzMz73j5gN0fh2EjXq7wS6OlpbM0C2Olp7Q1HCtsqvLzrHc3wd3gb/k5xB8hhmAiUqfpoLAxcfa 2wAAAABzfdXx8+7u7txzqggAAACGdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////8A2ZlaHQAAAhhJREFU eNqklYdTE1EQxu9yCQmEmkBooRpEFCwI0kTpIEVFsGIHUQEbFuxld/N/s+/l7nKX5Nr4zWQn++aX nZ0v7+0q2QL9a68d/H0SS0uxoRcSB+gmK90wNIfok24aqxMHv94OT4ykKf3+qLf+tCPd3SPSmcZy yqu88Vxp+l0lJ/1nqFCnvpSgV6KINZlmKlb1QLSQvsonZ69TaU1N2ulu9vfGeXLS5ZtWuuk54q0k OSs5baHHuOfv5KaWPZNuYJ8z5K4TJj2KuNDsQVff0+mLH7Cvhby0r9NfER+Tt27n6BeI933QlyTd irg674NemxX0Q8Q/+kFElYqE1TBnYTViRqF6Qdcijuu5AlJKDDTOyiAkY4XFRGUJsc2k4wpLVQE6 KMy/IxGNVjoFvYz4zKRDuS+iYBXEZUwZ9DVB871eNGlN9E2UghiFoItjCqoM+oqg+UP2vom6uHHQ OkSEiPmQimrLvtkc4MIKl6+AONlqc9+vC/smDTRQZesxsvVt88SgYwBl0hDTP90Tm98GzR6mpDds pfXSKu2IG0U0c8KLB/kD/b8Mdk+yrxA/+76D2TuI2z7ou/rbeYp9U55wW6B3uWN983896IH8PEnw PNlynydRy6ziYXzoe1Zld4PMQY8Z+2YywPz++KN4N3xz2g2f/n/vsDMJudNerg9P/HxE6ZFOt50W cF/mdvFmAJrVynv+SaUDfSzAAFnLm5ZduUr3AAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconFw;
