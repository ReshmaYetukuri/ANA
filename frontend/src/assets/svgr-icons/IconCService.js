import * as React from 'react';

const SvgIconCService = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk2QUVB NzI2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk2 QUVBNzE2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pumi YVAAAAMAUExURQg6PiZqb97g4SFGSdfZ2svU1XWbnQpBRAxESBZbXwtCRhBOUj93epyurw5KTgxG Sgc4PCROUZqqq3yPkV16fBNWWs7U1BhiZ0NxdMnPzwY2OhdgZSFdYVqFiSBCRQ9MUBQ9QBZeYgQy NiJKTQEpLBJSVg5ITAk+QgQxNQY1OQMvMyBFRwErLgMuMQU0OAItMCN9gsfNzZqnqBFRVX6usXuO jxRZXVeZnQk9QS9PUb/R0szY2RFSVl11dqXDxRJUWAc4Oz5bXgk9QD2Ljw1ITOTl5WyBgxNVWeDh 4RtpbhRYXMzX2BpnbAIsLx5wdXGnqsvV1hpobBllahlman2SkxFQVBRYXQg8QLjAwQo/Q4u1twY2 OTCEieHj49ne3tnf30qSlnqkp8TOzxpnazBTVipbXzhmaZusrYmqrSF5fk2AhIqxtBdfZGmTlr3L zHidn5Smpw1AQ8PMzBVWW6m0tF6RlFaVmFN3enecn3uoq9vf32qKjUBhY32QkuHi4hZdYbC6uiN8 gWSDhNjc3BJUWRBQVBFQVRhhZidwdV9+gDN4fEJ/g5S1txhfZHSVmJatrpurrJ2qq9jd3tPX1yB2 eyp3e0SDh02Mj1uJjYijpI+oqaK8vWeQk3eSlGKYnEd7f7vIyZCxtJWwspSytH6WmLjExdLa2hhj Z56wsRtTVh5nbJKusJ2vsVWTl1CPkxJTVwpAQ4KgoR5ISihmayFZXShSVc3R0nWYmrTGx3mgo7/O z36jpUlmaGSgo22OkAk+QRE5PAs9QTqCh4iur5i8vgUzNyJ7gMPKy26DhAMwM9rd3iBscRZdYjFW WYCoq3KMjneKjODi4gcwNDNucTptccnT1BVcYMjR0mZ8frnDxBFMUCBNUa7AwUxvchtqbh9eYrK7 vEmQlCNITCNMThllaVd6fZCio3ySlGOFh6XCxKC4uZOiowg7P9jc3djd3Wd/gSlpbi1pbKC5u6u4 ucXR0jdjZjNzd4GdnxxrcB1uc4urraW9v0FjZidzdwk8QObm5mBF4fEAAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAAC0ElEQVR42mL4DwYMQJwEpmQswNR5bRDl3P7f9j9A ADHAVKwGkWH8miC2ssd/Bivv/3L/AQIIIuujCFXzN4PT2CUSauL//2/0FCBsA4NjnsaSbipQcQgA CCAMdtxyJPGPUPb0QFdReS6YuP0t9k4RmJq5UpN1YGxBZjk5MDvG2uTQfw4tR7C48+H/TjoslkYo 9gIEEBK7p+sLFuFJ4mfMMIVZZ3DabNmHIvzuk+Jm91B5Fy51BiEU1bLc/6s3hAtIajxCN5tB6qjW gVoVzBD4/98d2WwDEwODTL//bM3lmvr/I1RUTNFVwwFAABEWnlaKTfh0UHsuFuFV0pxzsBnCI4vF kF+XW1olliIL/+wK/s/jtZ6bj4O9CVl1gDSbqCpQdEO4A4oh+aLGYi5ckW+2HkU1O1TiPzBUpZ5p YbjEQkBT4b/vNjThuwKaGroeKq/RhAUfP2LWvsF8AktQvdqI5O4jBnbmBvFlUxff+c77x9dQxQ0i HONvZdCYnfhfJpU3xPS/iooKRHjvf/OH/2dX/P8qKGRkySJnaPqf1NgBCDAcwsQrPncvMHg541Wi FO9KfiIurXhtPnEm786p5wy7f51YNzO9vYjHzevmLfsf8Dv2//8dvZxmovY23PJ8LvwcT+uwKnZd 2OETtJyxahGnl/v6NpBSDi529X8HxXA5I/YD2NAr8nxq/BxcGyxuMzhEP8fpZtbi9cbc/f/TgIZG OjEIFIgc1ajB7UGPWTNP/f+/YsP+cKChm/4f19K95Io/NIoK3whIaR7VOPn+/x4dlQa8im++cZDS U9LQ0vXVmfhAReUCVdMGfsXWBib/7aKc/f/bGbycUvn//7es/30r1ziln01hMbSVs/1vpFKCZLKV SYKBuUEUqHT23Pn//wK+F+qfJ2gJg8qjCBCBbHJ8goGBubX3Wr8f3Xlm24ECSzRDgMYZGTqqqLiB CEtDGnsQAH32QSrm12dSAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCService;
