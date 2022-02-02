import * as React from 'react';

const SvgIconCWch = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk2MTY0 RjQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk2 MTY0RjM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsaS hQMAAALTUExURRJdYghLUAlMUQlNUhFcYRpscQVGSwVFShRhZhhobQpOUxdnbApPVAZHTBlrcBNf ZAdJTg9YXRptchNgZQtQVRZlahtucxlqbxBZXhViZxBaXwhKTwZITRhpbtnd3QtRVhdmawxSVxVj aA5VWg1UWQRESQxTWBxwdRFbYA5XXB5zeAdKTx91eh50eR1ydxtvdBNeYxJeYxxxdhZkaRVkaSB3 fBxvdBRiZx92ewpKTw9XXB1xdiBbXxprcODi4g5TWOTl5QRDSBBbYBRSV2KTljdobBZkaKu+vzty duDj44WmqEV+gdPY2bnLzGeZnIqnqoWqrbrKyzJzd7/MzSpzd6G1tzxscDSChz6BhcHQ0RZWW7C/ wUJydoCoqjJqbwZGSzNucsLMzRhZXsTQ0YausBVTWN3h4Zetr6/HyCV1edvf36bDxB5xdjFqbhVU WTRvcxJPVMjS0lSChTJtcWyOkCh2es/W1+Hj46O2tzJrbwpJTglOUzhobGuPkoWkpgtJTnaXmhZm ax9tcnOWmL3JymWUlzhscDlpbUyNkDlxdNPa2r3Ky0t6fRNQVbPGx02OklaUl8/Y2cvV1rjJypaz tXGVmDt+g9re3hJVWmSYmxBNUhxgZXmcnp61tyZdYr3JybvIyZ26u5OytDd6ft7h4hVjZ3efoW2c nzx/g97h4S9rb+Pk5ECFiRxVWiR6f5GtrmOIiw1RVi1ma9HX2DNlaRRRVhdeY0Z+ggdITQlKTyJ4 fXWWmGOSlR9scRVcYVSBhTlvc0yNkR9eY5m7vX2cntTb2w5UWd/h4am7vSRqbhlmalaSlVOPkjt6 fgtMUdTb3OLj46e7vMbU1cjU1YqpqyZjZw9NUjl6fiNbYCNpbSpfY8fV1gNCR93g4JOvsYuxs5y2 uI6ytLTHyC96fsDMzWuZnFN/gtrf35Kpq9TZ2ThpbBdkadbc3JOqrB1wdWuPkebm5uqATVgAAADx dFJOU/////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////wCpCmekAAADUklEQVR42mL4AAYMQKwAoVg+ODN8EGWZ0wLiKQp8+AAQ QAwwFXxAUusDx4cDDBPPfmBmB4ows38ACCCIrBkfRI0pUJUCB8sHj00MH/TFF39gsfpQvbMKbKym IrNAPMQKGAAIIEy2EBKbE8rW+SDEqcQv9UEEyDYCihgAMeMHhrTzQAUSHy4yXgOKcz4y3PdBhHHe FpDePRIqcoy8xyHmqPDI8baj2QUQQMhs7MJCfJzIwrcvAWl9oKCCCQc/C5C9HiysowVkinMqKAEF paw+fIjjygMJG90/cxmk0YBFAkTtXyDQCxJmnbZQVIljCkjIIYmZ0SaR/QXEylMcN1kkNFd9EGFm jOFlT0e45IqmiiKPHKMALzuqAxV5mBnleNkdayBcgAAi7B3swupirNiExVjFsQmzinOjCB+GmCDL LSopDFIVXAgSDreYADIBIqoBFJbnAQlb6B4EmgAVFQQK8zCDhHX1ToONg5gABMzSIGE9dd+ZIB7E hA9Pehp2gITfPbaV5e4DspxAJlxlkr7LBhJ+yDcpxNj8JFi/Pw+TdOgNVbADV3Bfn8zPIOX14YM9 F1PbCTZVH4h3Fpnzb5cSVP5wiItJ2pmtHu7LLAagqNoHoKgM2wZkzwNF5T8wacuwvUUJk3w1ea4P QFFV1KAqFuFi+gAUvYM/GgACDIcw8Yqt1c3EhFiJVAxSyidOpGKQUk5ugoqt1fXFIEoVRE0kOYT5 GTAUZ68z3ZUB5oGVyiKUsoBj9sNce/kZ7lDFphY6uv0wB4CVKkGVSgmChStFeLiioIp1dLX0OpBs Ayk1QHZALhczYypUsZaeUU4KkhxIKdQBENDMJC2wFaJ4iZF65vNSW/Gm2HKInCEDi5MExAEfVk7d yMRoI2fJWwA1eY0Ya6Qf0K2Nxm4ub5B9v7mIh5mJUVrgfTQbexhUsWeEuOzegKNPX5tz8BsyeCdD VHZ3ioCUnqt9uduSXdV1NTyc7ZaLGistbe1axsAiJSGoee/Dhzp5ES6g0iNlz3jZ2NlLLqBGSmAQ 0FSwUmWVYx+mg5VKC8gAld6ajy0GH2wDK1VTlP8gB1SqDVI6qwJXdNvNBivl4fogB1HKvtYBd9pI UFMERhYz0wc5sFJVx1fUTfw4AQCNX0lWowEsIwAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconCWch;
