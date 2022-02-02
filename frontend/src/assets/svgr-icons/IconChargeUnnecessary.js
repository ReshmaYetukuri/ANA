import * as React from 'react';

const SvgIconChargeUnnecessary = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 36"
    style={{
      enableBackground: 'new 0 0 48 36',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={48}
      height={36}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAkCAMAAAGPnHmuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0 MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNTU5QTYyOEI3M0JFMzExOTBBQUU4MjkwNzYz QjYyQyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCM0MxOTY2RjQxQzExMUUzQTQwMUJGMjFB QkUxODU3NyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCM0MxOTY2RTQxQzExMUUzQTQwMUJG MjFBQkUxODU3NyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93 cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOkVCRUI0QTBB RkY0MEUzMTFBRkEyREVGQzNCNzFBODA5IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIxNTlB NjI4QjczQkUzMTE5MEFBRTgyOTA3NjNCNjJDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS REY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+rIludgAAARRQTFRFzP//GHJ5aaGm qOPkq8rNyv39l9bYo9/heL3AW6erCmduQoiON4qQEWx0x/v7VZecP5GWw9nbvvT0mtfZmb/CbKOn DmpyAF9nkLm9YJugeKqvSJedcbe7h7S3daitcqerr+jqgbC0vdbYn8PGMoeNZp+kutTWe6ywLoOJ ldTWFnB30uPkOIuRRYqQGnR6bLS37fT0Q5SZHXV8RpabFW93WZmeMIWLJHZ85O7vWpedS46Uer/C K4GHB2VsI3uBicrNqMjLYKqvdru/pcfJUp+kkNDSquXm4eztk7u/6vLyNYiO9vn6IHh+tNDSjbe7 F3F4f8PGhMfJNYmPBWNrHXZ8zN/hwvf4Za6yM3+FGm92JHuC////g/FXAQAAAFx0Uk5T//////// //////////////////////////////////////////////////////////////////////////// /////////////////////////////////////wCDbRfgAAAB+0lEQVR42mKIBgMGGOXLFh4K4jFK 2cMEAQIInWLz9WEAUozRDPowQYAAglIoHBYGBg0Ih48vWsYIxIIp83QAEgABhE0Pbg6rAgOEw8fC B6QYFMEcRgZGEEcewfFiQDJABMM0gABC4ZAhIefIrimGJMElwBTNJMAVrcVgHa3KwGqB0CHGEMUA VBnAYAIUYZBESDAC3ckYHc3DEBQtwcCghmQHyANAwMvAwBDoQaZzAQJoEEmIabI7ymGR0GBgUGBg ZUFICOhER+sIRFuwMqhGWzNoISRCGLi5GUKiFRkYQqN9GMIREtpCbGxC2tGSDECeCUMAQoKfkYGB kT9aHiRhxCCDkDAFSZhGqzEwSEQHMfBg6IjWZ7D3YmCQQknqYNojEBgfvFh97iDiSf1ABAjQTbm0 IAgFUfjkKx+5MBUX4UaDVkoiFEm6sLSFoItAivv//0ejGEEouW5W586db+ZwGe7kxZ8Aezd4PAJ3 PxOwoxZ9tJE9B9AkQFwdjysRkLQRICmArcCELVAkjF021PtM2yicSWwuIxM4GTg8D4DMdYZyqgu7 fEgit8cs7RSAB5TdG0fTqQZDj29gYS6pHPzS7H6AmmhkBmNGRkKpfwJVuiZ997w7JddpNWbJt2jR sbD8/nRTSwxRqreJZ+Ucx/m4NU56fL3G+sn4t219Aad9/hWZsivqAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconChargeUnnecessary;
