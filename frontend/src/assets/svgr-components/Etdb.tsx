import * as React from 'react';

const SvgEtdb: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 44 38"
    style={{
      enableBackground: 'new 0 0 44 38',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={44}
      height={38}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4NTE5 OUU2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 NTE5OUQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pv9a 45cAAADqUExURRBaXwhLUAlNUg9YXQdJThJdYg5WWwpPVBNfZBZlagZHTBdobQRESQ1UWRlqbwxR VgVGSwNCRx5zeBVjaBpscR91ehtucwNBRh1ydxxwdRRhZgI/RCB3fCB4fQE+QyF6fwE9QiJ7gN7j 497k5Ku4ud7j5PT29oOlp6y6u0eQlIWprCR9goKipYSprISmqIKgo6u3ua2+wDRxdTRvdIOkpiuB hqu5uvT3997k5ay7vDZ1ejh5fYKhpHeqrWCKjjiIjISoq6y5u6y6vCJ8gd7i44SnqTd3ezNscDNu cqy8vV2cnwA8Qf///+bm5n9eQtkAAABOdFJOU/////////////////////////////////////// ////////////////////////////////////////////////////////////////AKxN+84AAAHA SURBVHjaYvAFAwZfRR8fRiAl5s4oB6SggmAAEEAMUFLU3IeHwZeTl8ebAUkcIIBApKKoGCcrL0i7 r6iYjyEvIw/YDJAYj5y3N8wgZEPBACCA0NmyEnxSzOxgtqwPEKhxgdiyEj4+zD5c4iC2BJ8PM7uP uDeIDVLLJe7t7Uu0+TAAEEDIbAxhRVlRCTE+TilWZl52Ri6YD4GCPm4gQR+gII84VBik0scYpNIH KCjnDRVGaAcJensTspJCYYAAIkfYVl5GSFKEW5iDgY2fCS6siSzKAhM2lZfRAsaGHShKmFgEoMLO QLUOPiC1ypZAUUGoMMgEPaBCBjZVDaCoNFQYZK6JD8hcJTOgqAJUGGSbjQ/INiUVoKg3VBjhBpBa b5gwmqi37yAMWGKFAQIMhzB1FXspysvKiApJSIqJ8HFzCktxsDIws/HyszMxsqArtsetlEsAVbE2 RKmuj481TKmFjydUKY8gam6Cmurq42MFM1XZxwmqVFwaRTHMAeo+PkYwB6j6OEKVyimgKIa5VcfH xwPmViUfFahSSOKAK4Z5S98HDNRAbnXxMYAqRVOMLQR44ErRFONXiqaYxtE9qtgXALoFi7ZvK0hz AAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgEtdb;