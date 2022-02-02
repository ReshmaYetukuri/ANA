import * as React from 'react';

const SvgIconOc = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 45 45"
    style={{
      enableBackground: 'new 0 0 45 45',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={45}
      height={45}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY3RkE4 OTI1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY3 RkE4OTE1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjA0MzkxYWMwLWNmMGYtYTc0Yy1iYjExLTFlYjJmYzljYjkzOSIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsJ9 dUQAAAGSUExURYiam8zn6bHIylRhYR0iIqe9v0VPUHB/gLrT1QZ2gDM7O9Hv8Q16g9Tx89Pw8gh4 gpKmpwd2gEWco77j5sPd31qhqMzd3pPKznWvtOfq6sbZ252ys8nq7Z/R1Ym6vqTU2KvY3Hi6wA56 hIHAxS2Kksvc3sjq7LDO0TWOlqXV2dLv8TuWnrnh5KrX2xeAiVOepM7t7xuDjM3d3tDf4GNxchJ9 h1egpnm7wH++w6DR1XawtcDl53y9wjiUnDKRmQ57hR+FjgFzfQ16hI3HywR1fySIkReBihiAiTSS mqzZ3DSOlp/FyLDb377k53u8wc/u8Lvi5R2CixF9hhB8hjWTm6vLzgJ0fnyNjjaTmz+YoJbM0Euf p6zMz7Hc3z6Yny6Lk0edpMrr7RyEjQV2gJ7Q1L3j5kidpRmAicvc3SyNlr/k58Pm6QN0fhyBiiuN lS2OloLAxcLm6B+DjIq6v7Lc4Mfa2y6OlqPT1yCDjK3Z3XCtsm+ssh2EjXq7wQd3gUqfphd/iJbL 0AAAAABzfdXx8+7u7q+26+wAAACGdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////8A2ZlaHQAAAh5JREFU eNqklYdXE0EQxvdqLglghACBhKIINsSGIogFOyr23nvvvZeZyf/t7OU6ufb83svbvbnfTe6+3Z0R zYg+Dvcef7wa20uE0O21L5ikIN238xBiRnpgbqUMnL8zP7vUoMbDB6e698XS42vk5cb+Mvkq9+9p T9/o4Iu9myiq9a/b0CeKiCvGOmm5umaKUXotR7aepPZanArT4+zv4d0UpzP7g/TAbcR7PRSvniMB eo7f+SYlafS+R/exz2OUrFUevRnxWGcK3fXKobe9wIVRStNnh/6GeIvSdaFFn0X8m4E+aNODiDs2 ZKC3HJD0e8TffkwxhDCcuSVERfVvdUu6F3GXF7F0YOmWfE6TUyiFTBTrEEfcQFUHoSgC9CqRCaZF VaF79JCkjyK+dQMF0OSgQYHqoCt2Ao+elDTv69NuoAR1OdT5/wv8RFgTkuafFwCwv0oF4PwiQpej uRPpCee9n7sBEypyqIBJl2E6Qk9GPREtw0qcl/NLH8kIexL0WzFBMwwNTEX6o1dUYxrCfg8jXveX 0l4SzfZOyJXSC+G1jOwTRVUVd66qVnSfNF8iXsu8B5vfEa9moK84Z+cSLiymwiO5zuXT4Jl/k0LP +PWkxvXkQ3I9KQZqFRfjH5lrVfNJnjqYUmO/TuWo3z9/Le8NF+N6w6f/7zvsTM3uaecezc8+u0uN paGknpazX7Z68bscNGuQ+/yfjhj6nwADAExFn8JZqwWXAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconOc;
