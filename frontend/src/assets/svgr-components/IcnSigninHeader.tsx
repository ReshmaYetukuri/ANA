import * as React from 'react';

const SvgIcnSigninHeader: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 60"
    style={{
      enableBackground: 'new 0 0 512 60',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={512}
      height={60}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAA8CAMAAAAngfI3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2ppVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo3ODJENjBBQzVBMDlFMzExQTI3REU5RTc4Mjg3 N0JCQSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo3QTZFNTYxODU1REIxMUUzQjAxRERBN0Y1 MjA2NjkyOSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo3QTZFNTYxNzU1REIxMUUzQjAxRERB N0Y1MjA2NjkyOSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93 cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiMDQzMWIy LTYxODktOTI0ZC1iZDYyLTE0ZTk2MmM4NGM5NiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3 ODJENjBBQzVBMDlFMzExQTI3REU5RTc4Mjg3N0JCQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9y ZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PumoU9UAAAMAUExURUI7nv/I A7PI7ijLOfX8/+Ps9YyXzaG56Wxwtq3I8Ob1/rXS88Xi+aSr1ej2/qm+7LDJ8anB7d7x/uDy/u35 /7TN8qG15tSW/qS96pai09bs/IOLyaW56TozjOzx95215tnu/JGRkezZn6bB66vB7s3l+vz9/sjl +szo+73V9QWh4vL0+VLOawEW/0dAqbPAyfv+/8HZ9rjV9MPf+J+foI7eq7zg97rY9eTs/9Lm+/ju 8qK55r3Z9tHp+3DSkK7E7/X2+p/H6fD6/56y5aK86eT28fb5/ff8//P7/uqWq3V6wkxImPn6/fTN YbTX7NvVvM0A/8vU47LN8sDd94aMwOjv9sPa90tDsqG355y75v+9Aqzjz/vy9fD08c/r/Mng+czd 86a+6+7x+C3SQMje+LDG8PH79d/q9LPL8dHq+73b97hT+/v585rUyLrQ8rnc9fb3+u7y7tTq/Pr0 /8DX9lhXo8HK5tzv/ev489rw/SlVpebx+c3h+eTz/qnS6uv3/+vr/7fa81Rn/v8ALfX177jN8ez2 /dLb6rjR9MXb99Xo+VhTuKHN66vD5qvE7vj5++ry+O/1+vr8/vH0//X7+BV3wen0+/f9+VS/6+zx /72G+aS2/e5wiN7p/56459Vh/7e+4PL4+Ke94kVY/eD08ejv/3+U/ZOo+PT2/+bkyLJ29put2Wp9 /KSrsf38+Pv4//JadMHi7Z6157jU89zl4MDq3e/z+Pz3+L8A/7bP893t+tTj9LvT9Mvf7qXM4dTt 8vn9/+Pv+Pr7/XqFwZyy5Jy05rzW78rA/Lep9vD5/vL7/9290GNksKe76+v4+trg7/f8+7HI5dTs /Njo+e7599zr+eLz/vD3/J7B5r/a88XV/sDY8Na9/Y+j9vXv//P7+05LpcTo+dLs/PP3+7/S8O/p 72RhpZ6z3MC0+Nzz8MrY8PL5/sTb8pmv+319tu/z/yTCM5yw4/Pr8Pv9/Kq/7Oj3+bfI/p3Z9eX2 +ayy19jn/7XQ+b3S/a3C7fz+//7//wHNQ+cAAB2sSURBVHja5JsLXBXXncdHhcv1gQ80lgteSnwg xhfRENvFB0FFc8FmUYm0NjbRqJGNhmZFdIm1JiuaGEHQJZsHLtHEJkVtCg1ZjW0AH7sYkoqJjzTt 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 SUVORK5CYII="
    />
  </svg>
);

export default SvgIcnSigninHeader;
