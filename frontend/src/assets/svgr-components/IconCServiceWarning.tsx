import * as React from 'react';

const SvgIconCServiceWarning: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4RTlG Mjg2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 RTlGMjc2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmLp lUAAAAMAUExURVqGivnGM//eSP62Hf/WP31XDFt6fOzDNyhSVQxFScvV1To6OhZeYnNbGF1dXQY1 OSwqI8TNzuHj40lEGxUSC//cRTducf/MNP/JMdnf32RcJP/IMBBOUiEbCwQDARtpbpCio0qRlWBg YP/iTT85FyN9gv/aRP/ZQxllav/HL311LDYzGP/ON6XDxSNNUAUyNmSEhgg6PkQzDP/tWP/kT//f Sgc4Oytpbf/XQThlaCsoGDIyMlpaWhRZXR1tcoqrrRhiZiJJTf+6If+4HhFQVP+0GidydhJUWLnE xSZqb5t2Gt/h4Qk8QP/uWnWbnQpBRf/QOBVbX//DKgtDR/++JT93eg5KTtjc3RNWWv/rV87U1ENx dFNTU7SWLBdgZCFcYP/FLf+8I0ZGRv+zGQ9MUBJSVk9PTw5ITAk+QTAwLg4NBy8tKFeZnX6usdLa 2hFSVj2Lj//TPP/qVb/R0v/mUf/nUg1ITOTl5Qo/QzAvK//SO8zY2RpnbIu1t3GnqjCEiR5wdf+/ Jv/pVP+7Iv/CKf/EKxVWW1CPk8aaJE2AhNrd3hkYEDN5fP/AJyF5fv/ROkSDh5S1t5WwstTITKC5 uxJTV//vXGSgo4Coq4ijpGpjJ3KMjvTnWey7LnuoqzqCh6K8vV9+gNCjJ9OtL9ulIVWTl1aVmF6R lHecnxlbX9C4PfHIOpqqq1lDEMjR0v/POMnT1J6wsf/oU7GEGf/sVzNzd9eZFzN3e0J/g5KusNjd 3iBscdvf37KbMiB2e0BhYyp3e0xvck2Mj+GwKSoiDJmDKYiur5i8vh5nbPzQOR5IStyqJmeQk8XR 0mmTlkd7f7vIyb3LzJCxtJatrr/Oz5SytGqKjd3GRXySlMnPzxhjZ22OkP28JJKnqP+9JP/uWX6W mP/GLgpARGRJDw1AQ2BMFKW9v3RQDHidnyhma3WYmrTGx7ORJvzVQHmgo3qkp36jpf/lUGKYnHeS lEBAQP/hTP/jTYqxtHdmIXVrKHloIv+5ICJ7gFBIHf/BKObm5h+drX8AAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAADY0lEQVR42mL4DwYMQCwIpuIzwNTsblFZhv8FDv9D /gMEEANMxU4QacvJD2I7bgpgKK7+L5EMEEAQ2RoeqBo3+0CXsgqoif//G/ILaAmA2Kqqf+T/HuX1 MoKI/88CEQABBGXDXfBf8haC/d8cyj5UUx6REgwTd0/xX8gGU/PZ7L+KCpSt999YmUUCyK6vzp3/ 37RQsxkkXnDsv8/iVucsqJn/+UAEQAAh2Ttx+1lUJ4DBLgceW0xhLoaV+fG3UYR3TeF5GeGSUhac YbgGRTWDzP9rj3zMbmKabciv/1/Yt8mEyUIFWRgIpEpXicbqLGpZCxZWzVVV7Wv47/dfQL1KPKHx t6sAqupKxiwROZEYIAsggFCE/2Pxzv8Jy7EJ79aIO4dF+ERc4BlshoQyYDHEXszdJdoDWdiuR+N/ qO1UmTBOfwNk1VxxfhGpQFFgqKAY8iLCJaosuMKQQx/VbJfo/8BQ5VfAdAlQ9L+N3CwpOT5k4YNm /P+z52wp+aq2uhJJWE/P8f/kyI+m6oXiHajhzV10nentSfHTjdwg4eOqujmqkssOXP3yba8F+9zW zc5JIOH6umJV1e/v/8f//8GyXqIl0fk52JDp/3MU/y9Y8d/yf7eO5r9m1+c2aHHJ+1RATi4bPZH/ F4CzAAIMR6QRjEo4mCFfo3HLcwNRiq/UaDjE8QSeJ87kD0CltvHriFP8/793uBAeN7d/yvvP9Qyo 4nVcoG2Ee75MSlgZJyebEFbF5ZfcQJ7aMwmodKoLWGmwf4ZPRhQuZwiZgw0VSwlL5+QMfpShZ2jG fwOnm7nagIZe/m8JNLTCx9DsLpu+/n7cHvS+O7Pr//+NjzKASvlPAQWUkrituZOUcIeG4BNDMzNg 9v6fKaI1bUtRqclXpl9ZmdgVewAN5dfX/2+tPe1+ZFPJN1MmNYvCAMYjaXjSRpqVcVHpR2VTUXWW qvXiEg+DZGNwK7b+WfJNWFbNIlbujbimrFFI82NuqOJq1dz/urUFdf91VXX3zfv/f2vnf5sskKGF ASBDe+85ObvKKcFMLs5VVM1RrQWVzvLv/v+/EGbwny+LvV9HXDqhpTHxN3Myq4gSvPxWVFXNqa5e 2iC/46LtK6DAA/7/MbLiEoe9ltxxYt7GKmvFhz/xi/DKVRKX6nAAAAJz9tayQu1wAAAAAElFTkSu QmCC"
    />
  </svg>
);

export default SvgIconCServiceWarning;
