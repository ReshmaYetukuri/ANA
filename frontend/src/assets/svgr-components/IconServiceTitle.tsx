import * as React from 'react';

const SvgIconServiceTitle: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 35 35"
    style={{
      enableBackground: 'new 0 0 35 35',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={35}
      height={35}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAMAAAApB0NrAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDY2ODNC NzlBMTE0MTFFNEJDMjhEMDk5MTFGRDYzNDUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDY2 ODNCNzhBMTE0MTFFNEJDMjhEMDk5MTFGRDYzNDUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjM2YjBmMzA4LTI3MGEtYjI0MS1iMWUzLWI0YjFjYjAwM2MyNCIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pppt zucAAAFZUExURf///+729szj5Xe0uqrQ1N3s7oi+wjOPlxF8hlWiqCKGjmarsSmKkrva3PT5+f7+ /rrZ3Pv9/f3+/om+wwR1f6XO0TGOlhuCiwJ0fn64vcHd3+319vz9/USYoHCwtrHU15TEyN7t7tLm 6IS7wC6MlHGxt1qkq/n8/Nfp66HLz0KXnw16hGCorkaZoZnHy7DU1+nz9AN1f1ejqSqKkhZ/iByC i3WzuYq/w0uco8ri5PX6+h2DjOXx8vr8/DiSmiiJkb/c3hJ9hsDc36TN0Uqco/H3+MLe4H24vXm1 u7bX2hqBina0uejy873b3Ye9wkibopPEyFShqA97ha7T1gV2gD2UnA57hJfGyvj7+yeIkYC5vkOY n3y3vCCFjefy85rIzDqTm7TW2bfX2tzs7TyUnAZ2gPP4+ajP0/f7+1Gfpl2mrE6epZLDxzCNlT6V nVOhpxB8hVijqgBzfYvGS4AAAABzdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////////////wDvi69+AAABbUlEQVR42qTT1XbDMAwG4N8OldtBYVvH zMzMzMzMrPe/mOOmp9vSpWetrhL5iywrx6DMgWzMR0vtawbTPQIEi5xNCCLyxx3NrGnw5GiqpHlz NDN5gixmOFdkv7zs1tn07j6+H/sKbWbSZ73c3HfIdlA/9/zLFOSfuzdCLtpbQSr6fppou5lco4Jv BHHfr34GisIIjB18N5i39byUhyHg7sECAaDRfq5tc0kptswLMGE3rWKlYac6QVgEqLSbGEe8idYT 5rIzgNGYfYbNXTVEW0FpFkhsGv1jznWJOlfUD1ykN4XXVs+Hm8BneuNODudkGFhOb1aTZpDOUJHW nJYwK0p6plk4p7sjQ2VZ3EGDA143g2aomh8oJZXrnFTx92RSGlUj44gpxP0qJ9LaXMyrc515XIpM SiM0FPPA3DRiQSNdPhoyKY1iEJ8Sn4iKIuEB0ylVx+pH1NAMrwaophGNeIRxmf3IZC7z+b/5EmAA /KiFbNE9+poAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconServiceTitle;
