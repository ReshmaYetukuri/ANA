import * as React from 'react';

const SvgIconIrg: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 37 33"
    style={{
      enableBackground: 'new 0 0 37 33',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={37}
      height={33}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAhCAMAAABp0ZInAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzUzMzM5 OTg3Q0M1MTFFM0FGQ0E5NkQ2QjUzNzAxOUIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzUz MzM5OTc3Q0M1MTFFM0FGQ0E5NkQ2QjUzNzAxOUIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmZhYjU2NjU3LTdhZmYtMWY0Mi1iMmIzLTE2ZDVmNzQyMzRmNCIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pkf1 bhQAAAMAUExURbVzc5lKSsVxcbRHR82FhZQdHZVubrFAQK44OMBlZbpWVsSKipUxMYhbW6cmJrVI SHtERNLDw+PExKksLIlISKgqKrhRUevT06QgILJCQp4SEqovL8Gurmarsa02NsN5edW5ufHs7OC7 u6YkJL1cXK2RkaYoKLadnalNTZQlJa9TVIxhYZ4QEKEZGeji4qIbG5h0dKAXF5wMDOLa2uHX16Md HYUXF6sxMaRFRb9iYvv396UiIpIuLmmWnMKwsJx7e50ODpIXF5oICJoGBvn29tCUlGWMkalJSZ0q Km2ip5kFBcF3d6Y+PmUREZkpKZwxMZotLZsnJ60+PpIJCgBzfcFnZ7pVVcl7e8Z0dEmbortYWMd2 dsp9fasyMrlTU7xbW75eXsJpacRvb686Oh2CjLdNTbhPT8NsbLVKSrJBQct/f7ZMTLlSUrNERMh5 ebZLS58UFMyBgcRtba88PL9hYcBjY7NFRbA+Pqw0NKMeHsyCgs2Dg8Rubs6Hh5sKCsh4eKAVFbxa Wr5gYMZycsZzc601Na87O8FmZrdOTsd1dbE/P5wLC6wzM75fX7xZWcp8fMuAgMl6eqQfH8Jqas+I iM+JibA9PcJoaKgpKc6GhsNra7pUVDiSmsh3d7+rq/De3vDf38p+fu/d3XMnJ/Hg4M+KitCLi5iJ jPLk5LymprhbW5ZFRcGtrZxSUtuysrZoaLNKSu/c3IU/P554eKE+PmmZnnItMLNnZ7OQkLdeXseB gYZfYsR3d7+FhXIsL6EiIng/P/bs7NrLy8l9fZpvb5BnZ51VVend3e7b2/Dr64RZW71hYYVUVINX WvTn59afn65cXI0nJ6hERJE4OPf19bNVVY8JCrKamraFhfj19ak8PLBFRbFGRqo4OI81NbNMTH4v L6dnZ4k4OMCfn5t4eKw8PKZJSdOZmaZ0dKV5eap2dsiCgrpaWqIsLG4qKsd6evHf35x5eeTY2KA7 O5pPT5hycrpmZtHExKhBQch+fq1AQIhhZLOCgrSDg2uutP///77FT40AAAM1SURBVHjajNRnUBNB GAbgI7QgmggBCxCKSJEqvYMgSBEbRiSRKrHQBEREQBFRRFGwAoINRVFB7L1i77333nvBbj6/vQvB 6Djj/rnZm2f2dt95bymBQCzkS/49+EKxQEAJFgSvUF9eNq5SKSc9MXLgiIVTJ7HGDosboDaqpPME 0fxki52bFwgocbB67fK58qgqroigUtH8dlOSuIFeYkq4orasBQ2KmMgaWVVRlNmMUrmKKaeEFF8d kVJuzszEGTQazKDYmNJW0QxK+MKnJFK0ZMas8TJUwKAhqdzRHROyJksoyR9oToUaQaJwKVLNmsxG VamUm86gSSxEA9TcCvBw4dFDhwxXZFAhKoIiEdEJyFAyQSkJquXx7MIoVLnkcFKEMbmVMCipBemi ks/SjcmSoBc7WBnx+mOidHmoEGkCGU/iqsnDvf1XzPJlJ3cy0axDpI0KVzpjaAQO3pZnq8FBb7UR +AcmcVeCkUlXE0d4+oqnzUFFstx6BLy1GrYvBr0N9YcBNnLXgFFjTes+ntsse8/jGKOiY1oG3g2Z BYthdX30CYBDm1aCWc0t/ekuul36cYw9UNFZovpYELsUNH4EtAfH16EAXT3XGRj07PkN0WxUESTL t6D3MTZmKX2K9413VQGa+hiQCbXXI9sJFWswZlkNegoTRLjWQxuw0Qor3wdmfW9QKgAqytlO1qjo mHDfCqLw9bDoPuUPGo/iNcHmHM+0C1G21naoEB0IOA2ff2Ymo7qQog7wQL/uGuz/xAlD5Wttl48K V+pE72f3naOoEooNAe5FrT1Gv7vYxtcuTQcVVu7NVR8fn3dtXXc9O3m7OIP9vMkyiNfv4KpVV1R6 9fJN07FCRXp5ydz8savrTcXQD9cz2Ppj+vYOwiyVnZ2dyUpW3VC1lJfuJZtkyZtHYnLCjRNkj+q3 XsqQqRTl0ygPlXx5C6e78BB5yJC9fZ4fKmkvCYqXoQ7ZTrZ2iLoRRJR8ebFNpsaIcEs0mpbn1z1E QvEtpOWV9lKb8xfqz6eE35PIn1n8J0rTaUYhW4SU2MucRhiTixTJEmDQ5R5ivHO8jp9vRvIxMZ/b 0wPvnP+6v34JMACgWydnJ2asQAAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconIrg;
