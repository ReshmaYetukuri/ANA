import * as React from 'react';

const SvgIconCDocsWarning = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4OURD NjU2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 OURDNjQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqDm k3cAAAMAUExURSsqIv+8I0ZGRv+zGVtbW09PTyQcBy4rJDo6Ojg4OCIdCwwKBgICARYTCzAwLhEP CC8uKhRiZxVkaRZmaxNgZRJdYhJeYxdnbBlrcBhpbhFbYCN9ghptchBZXg9XXA5VWhtucxxwdQxS Vw1TWAtQVR1xdh5zeB50eQpOUyB3fB92ewlMUSB4fSJ6fyF5fiN8gSJ7gAhLUAdJTgZITQVGS//q Vf/LM//mUf/nUgRDSP/eSP/JMQVFSl1dXf/TPP/aRP/ON//SO/+/Jv/jTf/ZQzExMf/DKlNTU//p VP/HL//EK//MNP/NNf/KMgkHAzAvK//gSv/cRv/XQf+4Hv+0Gv+7Iv++JQNCR//WP//fSf/CKWBg YP/XQP+3Hf/QOJx2GSoiDLSWK42rrf7vXNeZFyh9gv/sV2JiYllDELKbMv+6If/AJ8vW1//QOf/G Lf/hS35XCz09PUBAQOGwKXVrKP/vWyspExVQVdCjJ//oU8aaJBkXD9OtLzQ0NP/YQj44GP+2HKjA wg9UWf/kT/+6IP+/Jf/rV//FLWBMFPzQOfHIOv/ROoOvsnFODNTITN3GRWeQk4ijpv28JP+9JCxj Z8LNzv/uWbGEGS8sJkEwDEJucpmDKUh5fdC4PUlHH//fSv/POLORJvzVQP/lUNulIf/ONnloIlqU mF2bn//hTGGGif/jTndmIf+5IF9fX1BIHf/BKKe6vPnEMOvEOfy2HmdeJP/UPWpjJ3ZRC+3BNf/Z QjV0eHddF8DLy8zY2OPk5ElAFv/VP2RJDyAYCP/cRf/HLvTnWf/MNWFaJP/IMP/JMCAcEqrExv/i TP/iTUA2E//bRNyqJv/bRTR6ftTZ2tXb2wdESf/GLhkYEHt0Ld/i4jYzGPjHNf/PN//sWP/tWP/t WarAwR1hZf/kTv/lT0c2DH91K//dRyomHTqFillZWey7Lv+7If+5H/+1G5l1Gv/uWlxcXHtWDEA8 G//CKgJARQNBRuLk5P/rVlJSUv/VPrOWLHBaGHJbGBIRCubm5jzc5ZIAAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAAC/klEQVR42mL4DwYM//XVwJSaMJgSlrsReJrh//8p /8P+AwQQA1SFzn8xICkjpgIkxVQq44Dilr7MAAEEJKX1ddRkIPr+g1hichA2mMXwjB3EfiinYrR+ 9p/4mRDT/nODCIAAgrKh5v+X1tVSlISydbVy4OJAUUEYG8YEsSUFpf7//1wPZgtKKf9/cC7CGsSW Utb+H2B39M1/sPkm/2u8gvn/Q+2yBREAAYRsL6oTQJ7R7YFwBZGFdXW01BRlLgNZUsjCIEFJYZBK ZWRhsKCYlJwyqtlwwXkfPB5bBZ2HCoMFVbT/n7CYe+m3Q0VUBsyxE1S0jUz+M9Q5erc7rQ1h/49w 95Vr//038fP68boDOQABhM87uHwpbaCnqa6qICEuhCJskHoLwhVBFgapXQ7miiILQ0xoBLJkkYWh 5oqI/pdHFoaKAllKyMIwtf//ayALQ0Rl5ZVQ3Q0V/f//Fc/2rTwfYcIwtQLH0szzL3T5Q4Uhohr/ +34snu9i51MFFYaIGnKY9lst6jS76FQIEd4NFjUucs6M2fnaa3owEzQErzYBRW3+r/l199QXxthe RMBuNLYJ/1+91HND6LsdLMjhverr/78d7Dw8MzCiAcEBCDAcsUMgKqVBQN9AV09HU0tdTVVRQUZC UlwYt2L9FftQJYUEcSmGmPryDJKkiBgOxegOAJkqKoVDMTa3ysrhUIxuKgjIK+NQjKxURExUCmSq kgoOxahKIWIa2jgUo5sKBtFMnK4cTOkYipGVyiuDHMD372bpPVOL5pVWy7j5UBWjK3W9nTytzcPc OeC5fcy23DsJrMiKkZUC3cpadt/U4snZyCO7Djou8LbOczvsjqQYWamh0f/aEvPVB7jsgxJ5Fpp5 sj0NCz3EgZz+9ic9gik1NvnPwh8Z6BJhF3fc+rpb9uSW2BCeaPQCZOocsFIbS2Ahyr2528HsZHtU K+PbBuYC3nXY0vP3ieWW4d/+///J5eNb/H7JpKwtKZ8Ov7DFnfj3zvr/n3ePnwCR5Rh2AADTxHd5 hWURDAAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconCDocsWarning;
