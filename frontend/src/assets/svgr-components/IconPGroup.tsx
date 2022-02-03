import * as React from 'react';

const SvgIconPGroup: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAMAAABJuvqBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3 ZWRkMGE2YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzA3Q0UyREI5OTQ2MTFFM0E5MUND Q0UxNDA5QTFDQTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzA3OUZDQTI5OTQ2MTFFM0E5 MUNDQ0UxNDA5QTFDQTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmM5ZDFj ODE4LTE4MzItMzQ0NC05ZDJiLTc5MGIyNDdkYWNmZSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3ZWRkMGE2YTAiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz6YfiWpAAADAFBM VEUGbnU6h4zb9PXb8fEBTVLO7O0qam4be4EBZ251pKchfoSDu76Ftrmv2NqDra8KcnkITFEBRkuC tLfX8vIre4DJ5ucta28BaHABYmlop6u1290Bbnap0dMBbXUWb3WZwcM8lJoWanAbWl8hb3QBSE0c YmcGSU4BS1ABZWwBW2EBWF4BXmQBR0wBWmABaG8BX2YBUFUBZm0BV10BYWcBT1QBWV8BZGoBUlcB XGIBVVsBY2oBU1gBUVcBVVrf9vYBVlwBU1nn+/sBXGMBa3IBZGsBWWABVlvf9fUBVFoBUlgBXWMB TFEBSk8Ba3MBSU4BX2UBanEBUFbq/f0BYWgBU1oBVl0BZ20BZGwBcHcBXWQBYGYCY2oBWV4BanLk +fkBYGfa8/MBUVYBT1UBWF3o/Pza8vMBTlTH4uJTmJwIbnVVn6MBbHMLYGYBZW0keH3X7/BFfoGe xcelzc+z2NrS7O2QvcCr1tglgojO6OgBbnUBTVPi+PhgoabH4+RomJoGXGKv1dddo6jn+vuq0tTr /v4gY2iJwcRMk5eQubt5tblCkJVdpakPWF0PeIB2sbRCen52tbgHa3AJcHeDt7sCYWg2eX0mcHVr rbEven8GaG+fyMoBaXBcjpGpycqpy815pagVcHUZdHrV7u6m0dQGU1gBW2KGuLpsnaAGYGacwMIR anAUX2UReoFFhIlEiY5LhYjM5uZ1oKKqzM2529y+3t+FwMO84eMkgIcsg4nM6OnO6utnlph5srWL uLoHUFWCqqy11NU6kJVroqXR7O3H5+jT7u/H6Olno6eXxsh0rbDD5ucobnTB4eLe9PQHTVKDvcBr nJ5cjI9Li5DM5+gMaG/K6OqMvsCJwsYIYmjE5ebH5ucBXmXU7OyNvL+ozs+83+Cs1NYXV1tbpamD tbjp/f0WdXx6rrFQmp7J5eap1NZ0qKvG4OGEvcGGv8JFkpdJk5iBrK8Qd356tLcMcXgNUlcBRUkC RktqpKekztAQZm0VZ2yt1tiLtrhLkZWcxcft//8d48g7AAABAHRSTlP///////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////8AU/cHJQAAArZJREFUeNpi+E8UYCBZmfD1raxIMgnXJotiUXaqN0KanxfIuLr4 JpC8JaevvaIIU5lChHSlbPn/lKzZYRrv4/6362t7WSgGYShbIy0tm+2c0qnHkRtuVvM/zz/SSdM1 H9M0aVlZ3+3/uTgMNcwkrvz/q+2kqfsL07RtH2V9J/H+fwpSFTzFUVRRU7d+Fjaftr0F+vS5houV hDHj//+pdx+/wBYgUm+4fz/5v2shUNWqM///b+YRuueIoYzpoHPsbL0dR/8n7Mk4efh/3DpXLSP7 aZfRlT3yBariMHznWF38o8HO8buuabK9pcdUdGXszgHiHIYzH5xYYKyv/XPZlhytUEsPa/OzqMqY +APE9cI0JGWijUHhqln6zMjN1sEzsRZF2UsuBqCVGi73GY31b0daaLoql4BU2RiozkNSNoGhTE8P FK7uUVH+oHCNMWoKCQGqMunYxwlXdt53+n8OcOjb6euDVJlq2btbW5sHJqX9X67OB1V2jMGZ9b+h IShc7bS1vZYCVYVaupuDVLH8r/A5lw5R1u38+f9/DXDo23kBnQ8MMTdbdxuglVXe//9/UZkDUcYe kBn0PzwcqErfzgKsyt7Wwd0AqIrF+3/LPh0liDKgJ6X+mwEjPN7fThPofGC4hli7m5iksXj7/D+g o6MGNU2PowsWyrog54PCFSbQryMINa2RI0zjE1TU1BQS+oFQ/nwdQcGLEGVHJgKdLwlJDVpaRpBw BfMc64Cq1F5Dw40bGGLGIs0Y2W4Tm46O4Nf98FjoiwY6X1tEaCeSmg0fxPxUdAS/bUSKUxk5SOgr X3q1V75Q/g/n+lZ1H5Cqh3NRUkjC8RsWmqZaRpYeDuaJBiYs3mBVAruZ0RN56uMZMOcDQ9/bx89P jI8Zaxmy6N+htadXLzHpUWUruLDyDkVFDT4AEGAA+vYgLaPbVJwAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconPGroup;
