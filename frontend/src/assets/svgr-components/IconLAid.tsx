import * as React from 'react';

const SvgIconLAid: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 32 32"
    style={{
      enableBackground: 'new 0 0 32 32',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={32}
      height={32}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUU0Nzcz QkY5RDExMTFFMzk0QzRDQUIzREIxOUZENzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUUz NTk5MDQ5RDExMTFFMzk0QzRDQUIzREIxOUZENzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjVjN2I4ZTQ2LTRlNmQtMDk0YS05ZTA5LWQxMmMzNjAwMzUxZCIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Piuo nZQAAAJwUExURYuKiu7v8Ly9vu/x8evs7fLy8vT09OTl5unq6+7v7/Hx8ezt7ujp6rS1tuHi4uXm 57e4ueLj5O3u7+rr6+rr7PHy8u7w8N3e3+zt7cDBwvDy8sHHyuPk5ebn58DGyefo6b/FyOLk5K2t rr/AweDh4vLz8/Dx8eHi4z09PsHGyWRlZenr7Obn6GRkZejp6dvc3dna28HGyoOEhb2+v/Pz9L6/ wPPz88zQ0+vt7rm6uri5uq2uru3t7dbX2NLT1I6NjSMkJM/Q0SIiIs3Ozt/g4Nrb3GNkZJubm4OF hc/Q0KSlpt/g4aWlpaGhod7f4NLT01JSU5iXl9HS0k1NTqeoqfT19ba3uNjZ2uzs7NTV1iEhIbzC xaCgodrc34aHiNLR0WdnaHR1dcPJy+Xm5uvt7U9PTx0eHnBwcejq676/v8LDxBscHJ+goM/T1ZWX mMLHy8XKzCMjJM7OzouMjc7P0MTExKuwstXZ2+bm5lVVVdna2tPU1cTFxsLDw8XGx8vP0n5/f87S 1dLU1Nrc3eDg4dPT08bHyF9fYJWVlvb29lJTUzk5OYuLjE5PT4qOj9nb3KKiooODhN7f39vb29DR 0n+DhWhsbvHx8jAyM29wcNzc3cfMzyQkJGpra87Pz+rs7PP09FBQUMjN0O3v7/X19rW2t8TFxYCD hYiJiaKio8rO0c3R1PDw8PX19bvBxMXLzYWFhdLV2NLV17q7u8TJzNTX2cjJyePk5GlsbsnO0LW3 uMvMzdvd3Tk6OsHHyZSUlbm+wd3f4FRUVOrs7YSEhL/Fx8jIyLu7vLO3uebo6O/w8YWEhPDx8nx7 ewAAAP///64ec14AAADQdFJOU/////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////////////////////////////////////////////////////wAE /DmzAAAB/klEQVR42mI4TwAwDAkFpfZn8QD3eAZ7lTMgoMbIyc0izCMvy67I5y2ubxBuG2kX5Ols 5c5wFkPeBSG/W5IBogAmz88uCJYXX9C5ZG0oG9t2ZYiCU0jye9YbKtQznjkjCpQ3aTIGKzjFKASS 1wHJNxcYKjSeAmpSBcpztjGBFCDJq/Rv0VTYCLKUGShvNqnmOFABUF6CxekcE7+M4LlzJzQVyi3P aZ1hVjp07ty5yuLNQAVAeZEQp96ZMoIq57J3HI2V0nDQYs45t99MtWXuQiugAqA8R2qD17kSla3n lp/bJRUT4KHFXzjBTJW1qlZSAKgAKJ95bopM94pN+ef68rp0HJZ56Dqea1VlFT0mqRwGVCDCoZfe LqPekXZA85zXSQ2NxFNGQAX+rKwVksqmS4EKOPT8z4HB1KRz1meUzrkCFSTP8WVlrVY2NeYFKtCT 7dmr7r1aetoM7XNKZ5hPnTpl5Kbme27DmqywhGCQAlnXqJV+5tJyZecszymB5MUmuomyWgcAzQyO AylgV1T3WyUtt1NI6gxYvxgjIyOr6HSuecZMTEwgBYrqBxdJy5mLIeQ5T4lycdmYMkEV8InPNpTL ZT6DkF/MBQSzmKAKArfti15nbsFtkcJyeL6ItjYHRwaHjURERJ0ACIT4MBQFnkYDR5DYPpMZhkXO AggwAAUAJJgYVCkYAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconLAid;
