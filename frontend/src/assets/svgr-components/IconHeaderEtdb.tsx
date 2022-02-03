import * as React from 'react';

const SvgIconHeaderEtdb: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 85 60"
    style={{
      enableBackground: 'new 0 0 85 60',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={85}
      height={60}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAAA8CAMAAAAg0Ab6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjMjcwNTM2Yi1iN2I2LTJjNGEtOTQwMy01NmQy NDgwNTMxNTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Qzc2MkQ0Qjg1NUQ1MTFFM0IyMDM4 QTEwNjA3QUUzNjgiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Qzc2MkQ0Qjc1NUQ1MTFFM0Iy MDM4QTEwNjA3QUUzNjgiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmZjZTU2 NTBkLTQ2NjAtODE0Yi1hN2ZhLTYwNjNkMmQ2NjViZiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpjMjcwNTM2Yi1iN2I2LTJjNGEtOTQwMy01NmQyNDgwNTMxNTkiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4W2Qz7AAADAFBM VEUA4fCFw8en5erk8fLz+/sA2ulp6/QBkpxZpKq49/sA1uUAtcEBr7vb7O3j+PqZ9Puy7vIo2OV8 xcoBlqBKnaRqrbMAyNYAzNoBiZIA3u4BkJrM4+Xq9PWI7PM6k5sAtsNG2OKk8ve82t0qi5MBipQB maMBlZ92190Ax9QQqrUA6fnq+/yV19y23uHU9Pbc8/Wn7vI4w80agYr6/f1Mp65r1NwBe4NL0ttn tbtv5u4tucIA2ObS+v0NeoQA0uD9/v5V4uwqydQBh5Ca3eEA1eOM5OpI7PcA5PQBeIDF4eNYu8KI 3uRVs7oW2OYp6/kBf4dHtb2a5+xF4Osjpa3S6+0Bdn6HzNEz6/jZ+fsA5var0dScyc18ub4BfIU3 4e0BgImz1tmGvcFixMsrrrgBg4zI6uw0o6p0s7kYnKSlzdG74+Ycws0AwtBOytIWjZS02dyVxcnS 5uhHvsZmzNIUfoe05eiP0dYjho8WucQXytcFr7pvsLaRw8d+4OcGdoABdX0BpK8BrLgBprEBnqkB oKsBsr4BsLwBmqUAuMQAvMkAvssBj5kAxNEBjJYBjpcAxdMAucYAs8ABqrYBrbkAu8gBqbQAy9kB p7MAv80Bho8Awc4Az90Bo64BoawA0d8BhI0BnagBm6YAytcBgYoBl6IAztwBnKcA0+IBoq0BqLMB fYYBqrUA3OsAuscAws8BhY4AwM0A4O8BgotDl58CdH5hqa+Bur97t7z3/PwEdX8R0d4inaTH+/7I 9fi97O8ck5tj8Po3ztgIlqCC8fjC8fPq9/jU7/F44+t79PwFkJkCo65RrbQIeILw9/cPws4T4vAs lp4yjpYK3u4Ms78FucUDucWI2d9c8vygy88EzNpf2+PC5+nE7O8H0+GbzdAMoawLythNwcg6qrJe ytKv1NcRhIwHwMwFp7IEnqkDm6ZvwMYE3OqZx8tw3eQH5fTG8PMN2ObC9voN6PfN8PIZsLoBeYGi 09aj2NzL+v2t1dio2dxX0toFjJWA0tf///8Ac30ZocgFAAABAHRSTlP///////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////8AU/cHJQAAA7FJREFUeNq013VUU1EYAPAhE4a6DXRYGxMYForEpGOEioSKooiC iICiKCXOgQyVUMJuscXGFme3YoKK3d1d2GwO9t7bOw8ebPvw++uec8/5/fHdL86lyP5HUKBACTd6 MK9eVRFNzObfu+ElqS/VtWhvOMeyga31hPS5SSH1oO7mSd4lCo74xSZPmdpkXvrcBU5soDqOtSe+ tEtfW4/rbRrPQdBFL/klGqv7ywxv0QX6afYXc+fPzsGhGZOHczVSbVjDTKld+t7xGLNkcV41dFln Q3XVidzUUfRO+meMH3WYNb1mdHnELXVUG5rYZ99hI3eDFgsLmpOjWZGJKqqu3Ohn2gwTx7D7K5au qwPNfCVwrVsV0RLY/M9G7r0addvgpgK6avVdbq2qa1FoOCfYRCfsbUNnZ5XR7PGpZKq8uEMSBXon e1xq1WpLQ7XQtr6jalLlxW1a6sI81tubQtmpPro2kE5URYbyytE72+PLIG9vDdFm7QjPRZGlMm/2 Njc3HwRBdWOKCCr3kDkY1Q2KJqglfDja2n8w8bUSB4LRaQfpRDXkGBidOaN4HEE1ZMJRMwsWQS37 CUfNtKT4kKsT930Aoy0vCNM3b8qYvDErc31220pVxh4IRj2PMpTo2io1QQeM5m/nfMPQdlWqhAlH V8Y/xlDdKpXnAkejtCowVKHup14Bo7u6CjF0WpUq8wkDo2viijF0pkIV64DRoX20A1F0hkKVmMDR wl++KGqmUHnBcLQwNAhFWyrU3aWfwOgQVgyKeipUmWk/MGr3vBhF8xFV7AhG7crpgQi6ElFpVlCU J0lg+yNoFKKKggHoc1ZoPMfyx5sR5xB0DaLKSg9ohEZddnjQnxoTFDASy6kcHYqqpsZqo3FdtSwE p70iIl9jdYqgfVB12Bl10L8jHL7Ti4UVYzsqex+HFqIqzUpVdKR/kA//q9dTJ+WQJqJDUFXEUAE9 8eTNb22GsL311Sa4dVIdtUNVGSeldjTQd/xw/sfuf0a3qbysHVWq4fak6MOAphYchtX74y9yt+ao gpZj6p60mtDzkRGd+1NPdTdOmb5tR56qaE9MZekT0Y5jK4TSYCtHg9sF8pyrgypVGwYOneCU5HWa qmfUr9eKpfLuUBcdgKky7dEKNDn2xhGpC1PHQD5y3TRDJynVZ/azr1nbNrDkhO8tklYuR81RnBrq 95HPFtNElWcpDMWpZdFc7OcshaE4FR9SGEqmwlAyFYaSqTCUTIWhZCoMJVNhKJkKjX8CDAAC3GFv aCpefQAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconHeaderEtdb;
