import * as React from 'react';

const SvgEmdRfd: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlBOENF NTE2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlB OENFNTA2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvF7 4WsAAAKRUExURYIvRUAAEbyao5wVOYgQMIIPLmAHH4UQL5MTNYsRMVEEGH8OLHsNK5UTNl0HHmQI IVQFGkwDFk4DF3ELJmcJIngNKY0SM1cFG5ASNGoKJJcUN1oGHEkCFW4KJUcCFHUMKJkUOEMBEkEA EkUBE5sUOM24vpESNMWpsI8SM2MIIJNNYPf09XQMKIEPLax7iHEQKrqrro0RMoYQL2sKJIo+U3cM Kbyeo38OLWgJI7SKlrqeo8assZtdbeze4WYJIXogONTGyKucn3oNKr6rr7Gdob6rrryrrrurrr2r rn4OLMCCjuve4JgUN4MPLr2epObe324LJfDp6n0OK2kJI4EvQZoUOHkNKrmeo8ejrezp6WcrON7U 16RRZ5ksSdnCyOHe35pMYc/Fx7eIlOLb3ZBFWNrS08afqd7X2dvGyoIeObKdocibp4sRMtOyu5lJ XtjR076epNnJzbieorSdotLFyM7Fx+Td37+Cjm8rPcqsstzQ056Nkc6iru3p6pxWac6ts/j09aNI YapFYMissb+Dk3pZYLl+jaIyUIQPLuXk5YoRMb+rr9jR0owxRquHkXwNK7WdonVYX8GfpbeBi8Ws sHwOK5sdP4wRMpIePtCut8ypsriBjLRyhJwXOsm1uocQMO3e4biqrbmBjLeeomYJIpYzSeHZ28yt srKDj4VAUmUJIaNse6Bseure4LF4h4MwQsKfqI9ZaNnGy8SImM2tstXGyK1Xbr6CjbmqrWwKJMKs sLmrrdHFx1kpNOfe37OdocGsr3YYMe/p6ryCjbuCja2coMessdPFyOXk5One4Jhudrlwg1sGHdXG ytnMz7uZooceOqlygXsuP9XHy3YMKcusso8mQrNcc2kBHf///+bm5i+Fr1YAAADbdFJOU/////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////////////////////////////////////////////////////////ACDO6IAAAANOSURBVHja YrgFBgy3mKVYRYCUFOspISAFFbylfuvGLYAAgvAYfJjF5KUZWLz9pG8ywKQZmG4BBBCEnSBsBxZR Y14gdtNaRNoAyL4gxiovIi2kzAgxT4vhFtONWzCzwQAggDDYEabGbCD2XF5mFQ4WHlk2gVsMpw29 OLbw3LyZKgNU43uEpfnmzZsySkB2GFiBjBIjupk39JggQiC2PoINBwABhMwGgvMrkYRnbps+nzXI VHjnErYzMOFpvGrMzCpSHGIsrDzysiJs0gJCIOFNhiwq223FWK6e9Lt5k+2mgNBNZbAhHZ4cs9ey 8lhbiQAFb8rkOzKChZNWILTLKCsxMjLCXHXjxg1g2Ny4wXDjBhOSA6HCWqBQZkISBiImUODfuKEK FgAIIDTvYPfl2TXxaMJV6zJ1ZC00+xDCy1piu9jNnXQCgjX5KqDCNaFSt5iZmRV4JTjZuUWFJfn5 xLmAwiekOG6hiQqCDOHQuMV8Eyh6c5LozfADzlE3BeVAwhqctxRuAtXevGnmv9jZgyvxqCJIuNHo Fu9NoAk3zW46FHu4C5ZCgipN95bETaC5NyX5S7Lcd++9CQ2qqbeQbJNThIVg3S00UUZ0z6OGCTBM bUCBm37jhgmyMAMwaG+AA1jVHkW1JTgqboCDHqH6MlbVDLcYbMDCN7Ru4YsdgADDIUyS4nMbLqYc NLZYpTkPp+LoWW0x11jNg5xMdYQDjIPtNNn4NqIpTs7dfL2dSGfEhfpI8YJiHghUFIBMCTFOFnZW bh5ReWFZSRF+Nj5pcQEuIajJTbwcasD0wOx1EwyW1t9s6OXmWa9900pyF0igzIVLSFAGqjhbTcOQ 8xazSvlNW7Cpy2/eDBQN0b55s4i/+6Yr0NTam61yylDFnTNyWIxuKUgdBhucwVp5syBw36GtDjcn 8LnedAOauuPmQkUlWGjMMfLVvcXLseimN9itx26aXdL25z9+c7+4200DQRm5yJsTQWkGorhQ17P/ loTYZIibQ6bcDAd5a89NFy4DkEBPNSSBQcM5L+zKLWwhADRVWRGUx5EVUxjdhBQz3QCyTW6shjBA UsDiRJUBWqZgV2yJovjWLf0b6jgUM9zQu0W04lt6NxjQnaFO3cSPHQAAjyXnkAd18fMAAAAASUVO RK5CYII="
    />
  </svg>
);

export default SvgEmdRfd;
