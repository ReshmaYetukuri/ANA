import * as React from 'react';

const SvgIconCTmp: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAUCAMAAAG2dB9lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk5ODI0 QTY2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk5 ODI0QTU2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PqB6 ai8AAALHUExURe/w8e3u772+v8LDw8DBwre4uezt7err7MPExcbHyO7v8Onq676/wMnKy+fo6ejp 6vDx8cDBwcTFxsXGx8fJye7v7+bn6L/AwfDy8q2trsjJysbHx+bn59vc3ezt7urr6+jp6evs7fX1 9WZmZvHz8/Hy8sbMz+Hi4tHS0q2ur/T09cTFxdna2z0+PoaGhvPz89jZ2lJTU62uruTl5tbX2L6/ v6ytrba3uNzd3vP09MTKzbi5uoWFhU1NTmVlZers7PX19tLT1PLz8/Ly8+Lk5N3e36SkpH5/gPT0 9HV2dmFhYs/Q0M3OzhscHfPz9IWGhlJSUuXm5tTV1sfM0MvMzR4fH8XLzu7u7sbLz+/x8d7e38/R 0T9AQNze4GJiYsXKzc3S1OTl5cDGyZiZmmBhYeTm5u/x8t/g4Kenp6ChoTk5OiQkJI2RlO7w8NDR 0VVVVbq7u7e8v73Dxk5OT6ChosnN0F1eXx8fH1NVV1RUVI2PkYKGiKSkpdjb3dHT09XV1svMzImJ iujo6Onr7DIyMrW3t+3t7vLz9Nna2t/h4m5xc+vt7mxvcTEzM0ZGRo6PkMzOzkJERdrc3EJDQ+np 6Xh7fRwcHGtvcMfN0NfY2aGmqMXLzXl6fNnc3uzu74KCg5+goJSUlN7g4cvQ0rGys7zCxJOUlERE RFFUVYqLi2VmZt3e3s/U1pqam6Wmp9/g4VJVVtDU1lBTVWRkZZKTlOjq7FJSU2tucKKio8HCw+bo 6qioqDU2N8fIyO3t7dLW2aOjo7q7vKipqevt7YOHic7T1bS1turs7fHx8sjN0aKiouPm59PT07S5 vYaHiNHV2Lm6uuLj5KCgoTM1NjAyM7/FyNDU1yMkJBoaGnR1dWhoaaqqq2ZnZ9DS0qOjpJ2foNTV 1amqqk9PUIWFhl1eXvf39xwdHvHy87y9vvDx8lBPTwAAAObm5u2LrXoAAADtdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// AOpBRAoAAALhSURBVHjaYnjzCgQY3jBGSErzMLypfvn42AuAAGKAiL18/fw1CwPfc4YbLwACiOHN y5ev+c8avs7n1AaqVZj+/GVlufWLFwABxADRDgJvGF69ZFDMWtOuxKsNZDOwx855rsTLwQNks1dt 1Z3kx1H8Asg+mmZjdkLU1PbFG4AAAup9CQQCoor8Mi7psgZBGj68nJxvwMIMjK/5O3v2ZGs6vH7t xcnBwgISZmBkV6gNO/1c9eVzD31pDhaeFy9Awux8568w6qpKvg7Qk17CYvriBUQ4/iojo1y3on1z eNveC6wgYP4GIICQnIsAb96AfAcEXHLyfMbqrjomjt4hUlKvoMI6t+VTns0OeO3m0DFNRFgYKsw1 85BYhZWnxet7r1+3CjEzg4UFuNjq183Y5PRc4vUONhEhZkFBkDBQlFssOEzlucRLLcsJQsziTEwg YVE2bpneDSqvDV9eV144n/kW04sXIGE27sAji/2fv5a96aT8eqc4UBQszJ+qdlnlue5rBgZ9O093 pjtQ4btJGxnnyR0+zm4fvu+gNdiTr94ABBjDmzevxF7CgACXqJyiPD+fjLGL+npXWR0DkyBHDW+f EF4pXimw3yHR8PLSawiI83qdbHxRPe/166c1IH7f7gZeKU5hTmFkxS8ZuAxeP5TnF3vSNXXi/kxD zddabq+VBLSXt4hwCnMwczAjKWbgYmQzeZ0htujkiu1z616XPDd6rXTgtccZXhFOIQ5mFkEWQZhi AZBSdu4Hr+8HR1iV+T9/rirxUvK11qnXq0WkQUrFeZh4mKCKGURBShUsQl/PUtul8vq1hsTLl2av lS391k4GOvpRIw8o5F5AFYOVypT65hS+Lnj+/LXRti2Rm5fpKU953Q8x9cULJMXs3HyB14p8wYFh JPFaMnLB62h9vVVNr1eyiJtClcIV8yUmqC0N1XwOdKvsa8nXZgwMuc7ONnZRgu4xQO2255AVY0t8 WNPjGwBkPdxVYG5JWQAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconCTmp;
