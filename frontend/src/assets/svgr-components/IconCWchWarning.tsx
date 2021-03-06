import * as React from 'react';

const SvgIconCWchWarning: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4RTlG MjA2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 RTlGMUY2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiVW NloAAAMAUExURWRcJP/IMBVVWiIdDAQEApWztY2ytGFhYf/iTT85F3WXmf/aRP/ZQv/HLrnKyxVi Z311LDYzGP/ON2aZnDo6OkQzDAtRVv/tWP/kT//gSv/cRhlrcDNucv/XQSsoGEyNkTIyMlpaWlaT lsfV1v+6If+4Hv+2HP+0GiN5fpt2Gt7h4gxTWP/uWhNeY11dXf/QOH1XDBZdYv/DKhxxdv++JRRR VhFbYA5XXGOTlhZkaTJqbxxwddvf3xdma//rVzp6flNTUwhJTv/VP7SWLHFbGBUSC//FLSsqIv+8 I0ZGRv+zGSRqbkZ+gk9PTzx/gx9tcgdITS4rJDAwLg8NBy8uKhJdYhFcYRpscRhobRRhZhdnbBpt chNfZBNgZQ9YXRtucxlqbxZlagpPVBBZXhBaXxhpbgxSVwpOUxVjaAlNUg1UWQ5VWhtvdB5zeNnd 3R50eR91eh1ydxxvdBVkaf/nUv/eSP/mUQhLUP/TPP/qVQlMUSB3fB92e//LM//SO//fSf/pVP/W P//MNP/NNf/CKTAvK/+/Jv+7Iv/EK+Di4v/KMmpjJztydmWUlyh2evzQObPGx/+9JPTnWSV1ef+5 IBkXD9ulIZGtrklHH2ybntCjJ9OtL/HIOtyqJv/POLTHyM/Y2WRJD//AJ6bDxP/oU5mDKcHQ0bGE GTJzdy96fjd6fjlvc0CFicaaJOGwKSoiDPjHNe3BNZOvsYWmqNbc3IqpqxkYEP/vXHefoRJPVL/M zf/ROoausNTITN3GRRlmah5xdq/HyGBMFC1may9rb/28JBxgZdC4PXFODPy2Hv/jTf/GLT09PcjS 0nVrKLORJvzVQP/lUFOPkllDENPa2tTb29Tb3EBAQCpzd//uWf/hTLKbMndmIbnLzHloIteZFzSC hz6BhVBIHf/BKOy7LuHj4/nEMJ61t//fSv/UPZy2uHZRC4CoqoWqrevEOXddF5m7vZ26u8vV1l9f Xy8sJg5UWeDj46u+v0lAFv/sVyAYCMjU1QZHTMTQ0f/cRebm5vE5lCoAAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAADtklEQVR42mL4DwYMQGwLocL+mzL8TwzbJsUM5KX9 N/kPEEAMMBXSQDL3f+T/1QwL7P8v0QeKZHZ5AQQQRLZIGqKmGqjKNjLsf89hhv85Cav+h5m7CwQ6 go01T3u01EVTFKL+fzCIAAggKPs/gh2NxI6Asgv+R0dkxKT8FwOyjYEiukBc/p9B6xpQQfJ/Tk6Q moj5uob/xTkaGUF6LZKz/ktW8LaDzclKypvdoRoMNfO/HogACCBkezGcAHGHdASysLIykM4BCtoW R8aEAdnTwcIFuUBmQoRtBlAwxfz/f6t0JpCwMdul3yCNumHJEBMcTUHC4X4fEzMiWUECM3QaJEpl OaFW7o/0Dks2P/KfoeT4P2ehWS2XYS7Zap6VlvTfnaeuya1tinog3IFpSZnlea3Pgl1ZXB2AXIAA Iuwd7MLW8eHYhOPDE7AJhydEoQh/gJiQGpXIHxsKZO86CxJ+UKMEMgEiagYUFksCCdfkywNNgIrG AYWTMkHC+YVKYOMgJgBBpiNIuND6rjCIBzEBCLgCQMLWK6VToyb8/w8yQZGlm4FFD+wSNulPNyz5 vUHqQib9LLvFPacV7EC/KHu+mNCUzf//77W7+IKnonktxDus/DE+KXHZ/0Uq95Ve6K+d23YG4kub UKCo9v/rp27LbnzSsVzVE+Z5oKjY//93nOYxtnionoCHiYy2WPr//1OFeB+3q71WRAiLpVf9/+9y KJCF5QtGNLjDWQABhiN2iI9KY+ui+OhwIhWDlEonEKkYpDQiiqBiY+uceIhS28Ri/sjYmFAMxYs1 qjUOgnlgpakIpWGQmH3+VYzpO1RxdU0BKJVAHABWmgFVmhIHFrYSSwJmMIjigvzcQnkk20BKdZEd YJWeWQ5TnFtofGAPkhxIKdQB0PRV5QjMo2DFWsbWk236pBP83zyFyIGUJoMdwO4poiDiyQ5k/dkJ NXlNfPgyYZBbLS0ttiDMC3IV2P6zskTiVum94CB4aHx7mJDq//bqTEv+yBjdUJ+/YAkFwe037RrK TklKccu+1N+w3hcezp0zEy0zMnqv7AgNS0mOM9/0/7+vnHhlyUWO+n88TnXzmhhPG/1yQIoUvhVA U8FKs7O+Ag0+V3bqBzO3rDPL+VpeZlGT9oUiqDH4yhCsVDsNmLgVg+uleBor9EGGLpqooqrOwo4W 3Z3HwEqT0v/n/dcLfrdbqJbRraXNY4qal4HrZ4y0IQNWmlkFVOzA3Ny1TnPaUZWT9w1+yenhT/yu 71lCiCzHsAMAKrW87CZT59MAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconCWchWarning;
