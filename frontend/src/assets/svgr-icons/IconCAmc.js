import * as React from 'react';

const SvgIconCAmc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 44 20"
    style={{
      enableBackground: 'new 0 0 44 20',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={44}
      height={20}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAUCAMAAAG2dB9lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk5MzYx RTc2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk5 MzYxRTY2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PktM 4BsAAAJ5UExURe7v8MLDw8DBwu3u77e4ub2+v+rr7MPExb/AwfLy8uzt7sbHyMPJzMnKy+fo6ezt 7evs7fX19ejp6r6/wO/x8err6+bn5+7v78XGx/Dx8eXm5/Dy8unq6/Hy8uTl5sjJysXLzvLz88vM zOHi4sTFxr6/v8fJydPT0+zu72ZmZsTKzcXLzfb29sDBwba3uPX19svMzeLj5M3OzmRlZT0+Pubn 6NLT1NjZ2tvc3enr7NHS0vPz89bX2KGiotTV1t/g4d/g4M/Q0OLk5K2trsbMz9na2/P09N3e3yMk JCQkJK2uru3t7a2ur87T1U1OToOFhfT09dzd3e7w8LzBxezs7Onp6jY3N+jo6MjO0cTJy4WFhtHV 16Wmp1BQUaipquLk5fT09M/T1r/FyPT19czR1PPz9NXZ2xscHRscHISFhSEhIbq6umxsbevt7WBg YcvR06ChobK3uurs7cbHx87OzqKiounp6b/AwNze34WFhZqcnNLW2Hd7fTo6Oubo6O7u7/b2909Q UO7u7mdoaPf394yNjsjN0Nrc3NDR0uDi44KGiPLy872+vpWVlVRUVMvP0tjc3cTFxSIiItHS08bJ ytTZ2s/T1U9PT/Hx8mVmZoGCgoOEhdrd3iIjI6Chours7KKio6Kjo9TV1evt7sXFxsnN0Xl6e1FS Ut7g4VJTU5WYmT09Prm6ulJSU+Pk5dHW13+AgOXo6dnb3MTJzYyNjcnO0XV1dmVlZd3e3kBBQXFx ce3t7ufo6N/h4tfY2Li5uszS1PDw8K+vsL7Ex3BwcZSXmGtrbNbX1+jp6YaHiMHCwrq6u/Hy8+/w 8by9vvDx8lBPTwAAAObm5lIuc6oAAADTdFJOU/////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////wBxb2W8AAACzklEQVR42mK4dAEEGC4xu3j0CDNcUjjffe4cQAAxQMTOTz9zkYmB 78zZU+cAAojh0vnz4kJbz+rs454IVLvo4hlnf1umc+cAAogBoh0ELjFcOH9WQIrnjCAvN5B9Nk4q 44xbSCwTkM128aJXexm78DkgOz5RViSIU/XcuUsAAQTUex4IJMUFhMScHCzM7ayMeEFaQcJnmQWE pNp4zpw5L5jAy83OzgQSPsvMdlGuZrPPSg9/dXUldiZhkIGXLrDxZSn0T852Fjkbpbjw4sWT5yBm b0qaxsy1WGC+Jdtu7zUsQKCndwkggJCciwCXLoF8BwQMXKJ8csrurjZmjgby8hegwiDRTm3fM4r6 yUpqEhJQYaCo6QqtqWekBQOU1VQYGcHCkgz8k47MubjsjInxgl61Y4y6uiBhoGi5WZjWxXl1S7Zf VFRh5GBlBQmL88tcvHix6qL0xbOanseBoufOgYT5ZQJX8WhcvHj+7FlNzp0X/c5BhIXEDvCInJEG is7grAephQiXRB7W0ODKLWKzbPLm3g/25YVLAAHGcOnSBfvzMCDJIM4lICrEJybnpGzvbuFqbmNn ZuVoZMBrwCsP9jskGpCVSskZKjsYCrY06OjoC4oZKfHKc8tzS6AoPsvADFJqKrU3Qptn/fkzZ6Td 9AUDDirxqnFLsEuwMyIpBirln3tR1VSq4uLFwglnzpy+aHxG8FAf0PPLW9kZmRiZdGGKJUFK2Ro3 xFyc4qJ18ehFCdmCtZnGoZ6lqYHFKkClHMIcwqxQxWfFgUplduXJpXWlB2+86LPHZPU2kdkz1S+q h0OUsp4DhyhYMUjpiS210Qo8S2eZnLnodf68yNmzlZrWthdzGJlYmkGBfA6umE2GT2ydrwJPCsOZ M7LSYKVnz1orcnJ2MHGosp47h6KYT8wwX5unGhgAsuchSoMYODk5ZXcgKYUpxpb4sKbHSwBJYqT9 qQXHtwAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconCAmc;
