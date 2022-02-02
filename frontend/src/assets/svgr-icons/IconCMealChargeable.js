import * as React from 'react';

const SvgIconCMealChargeable = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAACIwYlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA8xpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQyIDc5LjE2 MDkyNCwgMjAxNy8wNy8xMy0wMTowNjozOSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkzMTgz RjhEQjM3MTFFODhFNzFFODc2ODkzMDU0ODEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkz MTgzRjdEQjM3MTFFODhFNzFFODc2ODkzMDU0ODEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3Rh bmNlSUQ9InhtcC5paWQ6NDljY2U1NGMtZWNjMi0wMDQ1LWFkMzgtMDUwMDM0NjQ3ZjEyIiBzdFJl Zjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6ZTQ4OTdmYWEtYzgyZC0xMWU3LTgy NzgtZTc0YWEyZjk3ODBlIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBt ZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+f1gg0wAAAklQTFRFADxBI32CDVVaB0lOmI12El1i2dXM FGFmE19k/uyUGGhtHXF2IHd8opmECEtQGWpvHnR5+aoIF2ZrC1FWCU1SHG90/MxQ+8I7Ck9UF2ds 5OHbDlZbDFNYH3Z7DldcFWNo/dlsGmxxFmVqG25z/NZkEl5jCk5T/M9WCUxRAkBFHnN4IXp//eaI EVxhDVRZBkhNBUZLC1BVE2BlA0JHD1leEVtg+rMaEFpfGWtw/vOiD1hdDFJX+rss/P39Aj9EInuA G21yFmRpGGluBENIAT5DBURJb2FB+a0OEFlexYsVIHh99agJ+rMbZVUzhWsvGmtwInyBZFMucmNE 6qIOxp4+/u6Y/d94+rEXhWYlHXJ3//WocWNDHHF2+8VAFWJn6qEMIXl++rwtxY0Y+asKAT1CEFtg yt7fe6qty9zdCEpPhWcmYFIwdauu/NBY7NBwuooi79JxHnV6hGYmW1U2+ropH3V6/eOBmI53FVle OoGFx7Bk+a8T4N3W7MNUFGJnhXNCeKap9/r6TGBLZFMtuYUYx7Fk/NhpFmZr+a8SrsvN+rYi2dXN eauu/dtv5OLc/eWFuoUYBUVKMnl97sVUHm5yAD1C+rkoZY+STIuOR2FPYVEuMW9rGGlt+NVoNXyA +8VCn5WAc6OmPIiMMnJuY1MvS19KHXN4//uzwK9svo0iMGxwuo0reKirW1U3HHB1BkdML3NxhnRC G290L3RyvaxqIXh9+8dGSWJPJG5zyd3eMnyBj66x+74z+8E5e6equo4qGGVqAAAA////L2PWdAAA AMN0Uk5T//////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////8Ajk4gvwAAAkVJREFUeNq01WdzUkEUBmAMBEMI kYsGFCRBDU3pJBBKEIQY003vPfbee0tiT+y99957191f5u4yyWUnuuAHlxnmvrzPnNm5c2YQwH84 AvItFtVV1YnEqWC17PXBtdf3NFTL1Enx7nvvGiWWpnyl6mft20kQf+b3xNvPO4qu0fjWI1+bTwJ0 xs7g44+YLobzykl54EvRghkUPr6vse0hwOdmb+XGu3guLM8i5VFkZ1N4206JDwA0GYCgp28Qz4VZ W0j5DNk8Ci9cb5EAYAHozhea65+jue+hVk7KS8hOpvCVQ01bT+JbfPh2bFfFKjwXyltJeQbZDHry 2XzdqI5c2lPavQn2QC1s7SDlJ2TTKSxqUBrXGJXgOwBHuLL7eC7seEPKX8guobC4WtUJgApsBqCf a7mK5j6AOWFSYltAv2fZ02AvuUU/N3wZz5XCcA0pM9ILCzQ0PlG7rtLTDEo57tTQK618rjQnXHOO lMjmpk3YjZV99RXdZS0y9Z0NyM6ZNeUGKQsX5abN/MPWtVe1461bHbeZt8nP2E6dgMfPUukLbA8v Jwnb6X/HcARbxY94wHYaAxcvQ3Z/cTxsRzabgSHMVETGHp8gK2RiRWTv2ONXZO1MHOlyjd/potDu YOIul54PdkcJE7v0Vj44SqJMrLd6+XA66mZiq9fPh6jbzMRef8Kiuc0hJvZrbHwwh2JMrLEF+BCK nWdiW8DJh9iAgIkDTgMfBgRs7DSYEuok2GBakTo2JS5aMpwtfJk6Tvo38T/wbwEGAHGgFsdIlWCl AAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCMealChargeable;
