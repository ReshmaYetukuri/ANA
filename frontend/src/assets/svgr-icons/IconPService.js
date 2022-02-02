import * as React from 'react';

const SvgIconPService = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 38 32"
    style={{
      enableBackground: 'new 0 0 38 32',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={38}
      height={32}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAMAAABJuvqBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3 ZWRkMGE2YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzU5MzE0QkI4RkIzMTFFM0E4NDNC NUY1NEQ1M0E4RkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzU5MzE0QkE4RkIzMTFFM0E4 NDNCNUY1NEQ1M0E4RkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjYxMzM0 OTQxLTZmMjMtOTI0NS04OWNkLTg4ODdiMjczM2VlMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3ZWRkMGE2YTAiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5sfeMrAAADAFBM VEUVWl+gvb4QT1Pj9vcTVloIOj4NRkrQ5eY0dXkZZGlKi44eb3N/m50PTFAJPEAMREgUWFwWXmIL QkYaZmoOSU19sLIheX4mX2IBKSwKP0IEMDQEMjYRUFQaaG0YYmYWXGEfcncXYGUCLTAFNDgDLjIB Ki4jfYKeuLm+1NUwhooRNzoSVFgGNjqPwsUHODwNSEzO4+QJPkKBurwLQUVvjY7O4uMSU1fO4+MH OT3g9veq1NWGra8DMDMFNDdLl5sDLjHq/f0PS08wVFbW7u4RUlY+jpNff4Df9PQGNjnF5eYEMjXO 5OUTVVmcy80KQEQHOTwOSk4IOz/e9PTO5ORmqKzA2dogdXobam8scnYie4Cny810sbTd8/PC3+Br q6/f9vYCLC+GpqcYY2jr/f6Qra9inaAKP0NigYMHNzsSPD/E3d3Y8PDH5OW10dILMjV0sLNuoKMZ ZWm42Nlgk5YWXWFWhogKQUWvycoGNTmkx8hQcHImbHA8eHw+fH8jZmqEp6kvXmEbaW5inJ8HODsG NzsOS0+Ora6y1Nax0dIbUFQfY2fk9/ff9fZVfoFVlZhoi40aZ2sTV1tTkZU6a25WmJwMREeJq6yP qascRUlSdHYveX0zXV90p6pYnqITVVqAn6Hp/Pywz9FwlJafursSQ0ZCiI2DpqeHo6RJfYDO6ut4 rrDE4uPH4OHG4uNxrK8UV1wRUVVAYmQUWV4jUlYiVFgtVVjd8fFni4zf8/N1oKLW7/Db7/BmpqrZ 7e17p6kaZWlGaWu92doXX2NnkZTT6OjT6+sVXGAyXmIBKy7f9fUMRUnU6+sJPUHS7u6atLbW6+xZ jpAhSUwBKi2AnJ3A3d7D399sjY+DsLKkxsebt7jD4uMca28gXmEhb3RLcHPk+Pjl+fpZiIvE29x6 ra9ysLMhYmauz9CBp6lNf4FvmpwqXWCEsLKGsbMwcnVimp3r/f220NGv09QSUlZHg4cTUlYTU1cK QUROhYgQR0sVR0sGNzq22dpYf4EHNjoYYWXt///x3nSDAAABAHRSTlP///////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////8AU/cHJQAAAj9JREFUeNpi+E8UYCBXWU7fLK52gspu3Q2XFd4fRUhZauOEwqR/ tYSUcU0olFMUrCOkbA6nnGIJw3dCyrI5DpUwPL1K0KdBb4r3HSXo06ArzyoXHozBpmylA5S3toCD QYBFewMTr/jh0+jKdiks/f3xsej//w/eyjMIzDMDqgrQP9WZhabs/Sru240TOIv+vz62aaLPJxkm RxG2U0J+Dcnobls96V2E3Gfnrk0s2i5MvK36bPxCfoZ8H7B44fqhkhoBFrMvIAvZhIzTDAMtErEo cz7EsN7HbMULXpCF3ww3H9fT6ccWIBcmart8XfNcBGLhn+06yvewKesAhsPL/7lsU43TzgRatN20 9dqKNXh3ipcy/7//o0zyTKD/r0fsXjZauGPBYYshH6uezt9t/2fYK+3GqWwa0MIMD1vpa/9nJpzQ wKXs/M9A/5YKWy+pTOblJy6p41K2CGghUJWNitI5DQmJyziU7VjS7KEsLWVjn3DiwII8iXQcyrq9 vYODDQwMzM3N2f8fMd1LKJ/ecKzHSG+6ampqVrqaapq+Rmr5YgpN///fETFmTLkoIaHuJiHhpAFR dlYt5L/VEzXf/0aaRpHx/0Wr3a31l+nNTzD5r86jZfrfaSPUtGg1Nc04NRCYG9bzP3a99eReRqnL EkBTqiSAQAuizDPkv6Wrq5ru//971nGf/P//4Su+8sWq6hIm/zUktDT+m5pAlFnaqanZeQLdJjZF tND9///QwNn/1SXUp2tB3CbBQ3yJBBBgABZrl6KpfiNtAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconPService;
