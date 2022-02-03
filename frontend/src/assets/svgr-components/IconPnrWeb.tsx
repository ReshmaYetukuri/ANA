import * as React from 'react';

const SvgIconPnrWeb: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAF6wyI+AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTdCRkIy NjIwRjBFMTFFNUE4NzM4QTI5NzIxMkY5QzEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTdC RkIyNjEwRjBFMTFFNUE4NzM4QTI5NzIxMkY5QzEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjNlOWJkMmQxLWJkY2EtYWQ0YS05MWNhLWQxNTZhMTZlMTRmOSIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pnuc qtoAAAGSUExURamtzHF5rzpImMDD2fX2+Y+UvmFqqNfY5k9aoAZ2gOHi7fr8/A16g7W40+vs8wp4 gv7+/lOhpwd2gP3+/nWvtFqhqOfq6szd3rDU1+Pw8c3k5r7b3pDCxvH3+MTf4ZyhxS2KksbZ28vc 3g56hIm6vpvIzBF8hs7k5pPEyODu79Pn6SuLk0eaofv9/Xawtcbg4lOepL/c3uTw8bDO0QR1f/j7 +w97hfD39xuCiwF0fiCFjff7+5jGyp/FyJXFydDf4IGHt8vi5EOYnyWHkObx8pHDx1egpjSOlhV/ iN7t7hiAiQd3gRyCi6nQ0z6VnczO4DyUnDWOls3d3hmAiavLzgN0fkCWniKGjtTn6S6LkxN9hwJ0 fqzMzzSQmEqco+Lv8Ah3gSCDjIq6v1qkq1mkqhd/iB+DjBR+h8vc3TaRmbTW2UGXnm+ssiOGjx2C i/L4+Euco+Xx8tXo6r3b3bPV2M/l58fa25LDx3CtslWiqDWQmByBiujy81aiqZzJzenz9MPe4DeR mSI0kABzff///+7u7uF26UMAAACGdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////8A2ZlaHQAAAxVJREFU eNpiaG0ta25uZmjVbmlpaWZQBJIt1gxezExAmqG1BSzYqsTd0twMEEAMra3BIJVKQDHnZgZdiFwL Y0tLUzNDM1Rlcwt3czNAAAFVKjVzt4CYzWAxKAByvFqamlpa2FvYmUGW6cJkrIHKMrQhbGeQHiBQ TG0GA4AAAnNE4exmHaAaJxSDgWwDAShbGOoWiASI3dTUxA60FMRmYmVoamnibUFVg6wX2UwUuxBu AAggMLu11a0ZDYDEbZv5BeAmC3vD3czfggo4Ie6Pa0EHYUBxUaAbGFr8mVsYWBgYGFoYGHgh7mkG ijMxNzVxNYH81NLE2AQRB6lvaeJiAXKbGBlB4gwQ9zcXYJifjd093ljdn4DXvwABBBVvbVVxV8YQ FjfBplqhuVkCYrYEkjBnsyrCJa4wYeVmF2QXakKE9ZojUF0uBQlJP3SPxgKFK5ox/A8ORw9MYTOg sE0LAzsw4PmAgc7AzMzAwNfSIgMUrmlh4OBr8ndgbeJl52JkZQYGsyckATWxMrA1sQDjgoGRo0ke lN4ZmutBCQ6M2FtaGBlamljAqm1aWtiAYkwtTWyM8owcoKiTwemSHOzuxuLLKpCwSHMRtjDBEYJo 4V1OKHZwxSUk5nmQhAECDC4MBvYiic34AEK1mJ4QSCCq0s7QSLZFNr5YQ1ANl+oYkIUBjhjBo5+J qdoYmMustFqwA3ULFNVikc3N4ZItuIGkD0K1ONC9qi34gQxMdVBos6VUCyHQAFWd19xc0kIY+IJV JzU3p7QQAwRBqgObm+VaQMmQFUQAEyAvKDmCAWMLI5jmAKuWBqkGhrMpkM3V1MTH3MQETN1MTcxA 1exgFaAShqWJiQXENkdS3cLaxMrUxMLRxNDEBsoHbIyMjMxA1RxA+0DWQlVDXdICzjotwBKtiasF xWyQ01hgLlFpbk4GyzA0MYHd79DSgupuJlYWuC9bq5ubs4gOwdag6GZLdYKK5ZBjvo6AYlekVAXM UrnEpipCKbbUAiM3hODKDY04cpoIOKel19oZFua3yBpJ48lpsFychjcXAwDwdYyu4fkjPgAAAABJ RU5ErkJggg=="
    />
  </svg>
);

export default SvgIconPnrWeb;
