import * as React from 'react';

const SvgEmd: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4OURD NUQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 OURDNUM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pssl 3DMAAAJkUExURUAAEZwVOYgQMIIPLmAHH4sRMYUQL1EEGJMTNX8OLHsNK2QIIV0HHpUTNk4DF1QF GnELJmcJIngNKUwDFpcUN5ASNGoKJFcFG1oGHEkCFY0SM24KJUcCFHUMKEEAEkUBE5sUOEMBEpkU OI8SM5ESNGMIIGsKJLyeo4EPLff09bqrroYQL3QMKI0RMncMKbyrrqucn7qeo/Dp6uve4LGdob6r r76rrpgUN72rrrurrn4OLOze4bmeo+be33oNKr2epNTGyJoUOH8OLW4LJcCCjmgJI2kJI30OK3kN KoEvQYMPLsassWYJIaIyUNzQ08GfpcytssGsr5BFWNvGyuHZ287Fx9nCyLeBi+3e4dCut8KssFkp NGcrOOfe35wXOnYMKcusspIePsafqc6irtXGyq1XbowRMrieonwNK7l+japFYGUJIbOdoc2tsp6N kbSdopksScissbmqrdjR0reeotnJzY8mQsibp2wKJKBseq2coMWssG8rPaNIYbiBjKlygXsuP9jR 0+Lb3buCjXpZYLmrrdPFyOne4NnMz5xWacm1ur+CjsessbKDj7lwg5lJXlsGHbeIlKRRZ+/p6phu duzp6auHkcejrbmBjIwxRocQMN7U17RyhMqsstrS08KfqPj09YQPLriqreHe32YJIruZopsdP7Nc c9XGyNnGy4oRMb6epM/Fx9HFx7+Dk86ts+Td37KdoYsRMtLFyIIeOZpMYcSImL6Cjere4IMwQnwO K8ypsr+rr3YYMdOyu7F4h49ZaOXk5JYzSe3p6rWdonVYX4VAUuXk5byCjYceOv///+bm5ufhNM0A AADMdFJOU/////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////AHlANp8AAAK1SURBVHjaYjgN BgynGUWYBYGUCPMUPiAFFQQDgACCUAzmjFKyEgxMxvYSpxiQxAECCEJuFfABs1UYI6ROeQtKaAHZ J6WYZQUl+OQZYAYhGwoGAAGEwZ6up8YCYsfxMipwMHFJs/CfZujTdeHI5Tp1ap4kUI1XM1PhqVOn JOWAbA+wAkk5EsyHAoAAQmYDwdJjSMKRqWmzmN31BCqWsEyACS/jVWFkVBDhkGJi5pKVFmSR4OcD Ca/UZVLYbi3FlNBuf+oUyyl+vlPyYEMWWnHU7WDm8jYUBAqekmw0YAALT+xFaJeUl2NgYEB1FW4H EhAGCCCihFMqF6MJ++3foiPtqjoNIRyyrmAVm5OdjrObKk8NVDjZUeQ0IyOjEq8oKxunkIAYN484 O1D4oAjHaTRRYZAhHMqnGU8BRU/5C52yCTSNOSUsAxJWZj2tdAqo9tQpddsSUwv2NVWKIOFa7dO8 p4AmnFI/5ZBvYSkcCgmqJI3ToqeA5p4S49680bI1+hQ0qHadRrJNRhEWgp2n0UTpGrBkCgMEGA5h khR3zK8P2qvmmq3ahVPx7N2Zk8qYndzt9HQEnNXcfFRZeA6gKW7at225L5HOCHM0F+EFxTwQKCgB maJSrExszJxcQrIC0mKC3Cw8EuL87HxQk7N4OVSA6YHR5RQYHFp/asFMTq6dmqcMxaJAAhtM2PmE JaGKy1WUdVlPMyp0n7IGmxpw6pSRkKfmqVPp3HtOmQFNPXyqRUYeqvh44iYm7dNKIifABgczzz21 2ih28gqHU0d4zE7pA00tOrVIUQ4WGnO0vTRO83LMOGUMdmvPKfUGTVvutlM54vqntIQlZaaeOsrA AFNcqmGVcVpUKhziZs/qUzYgb609ZcKuBRIozoMkMGg493vEn8YWAkBT5RVBeRxZMYXRPaqYMAAA 4Bfd89unVJ0AAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgEmd;
