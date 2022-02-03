import * as React from 'react';

const SvgIconPRmks: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAgCAMAAABJuvqBAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3 ZWRkMGE2YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6M0FDRTczRDZCRkM5MTFFMzk0QTBB NDM0NDU1MkIzMEQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6M0FDRTczRDVCRkM5MTFFMzk0 QTBBNDM0NDU1MkIzMEQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmYzNDVk MWNmLTNmNjctOWM0ZC05NGJlLTNmY2Y2YzFmNTg5ZCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3ZWRkMGE2YTAiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5KWKhEAAACqVBM VEUUYWYSXmMOVlu63t8QWV4WZWoLUFULUVYTYGUbbnMNVFkPWF0VY2gMU1gRW2AgeH0KTlMJTVIY aG0XZmsYaW4IS1C11tkSXWLW6Ora6+zN5OYabHHE3+HO5ObS5ujK4uS63uAGR0wZa3AHSU4dcne6 2dwedHne7e7D3uDm8fLj8PHp8/Tv9vcHSk+529wjfYLo8vO21tjl8fLt9fbg9/dNjJC9296y1djb 6+0DQUYheX70+frS7O3h7/DP5efT5+j6/Pzf7e/7/f3G4OLH4OMhen+/3N/H4OIEQ0jg7u8ndXrJ 4ePX6ev3+vsfdnu42NvE4uPf9fUcb3TB3d/i7/DU5+kham9PkZX1+vpMjI/3+/vV6Olrpai72dwF Rkvc7O3M4+XQ5edNjpLy+PnR5ui319rr9PUDQkex1NcifIHZ6uzY6usFRUq11NXx+PhQlJgjfIHl 8fHA3d80foKHvL56p6qHvL89f4Mugoff9PWOur0+gIS53d6319lurbArfIAccHXf7u+82t2IvsAu dHiTxMba6uxOkJSdx8mGt7nF3+LE4OHf7e7E4eLd7O0ec3gtgITg9vZIlJjq8/TG5OXi7/Hy+Ph3 rrBSlprH5ufY6etvrbDf9PRJhord7O7V6Org9vcia3DL4uTX6eq63d79/v7L4uVtqq0sf4O+2964 2tt5sLNtmJtrpqmz1dihzc8gZ2x7p6rR6utUm57G3+Iie4D5/PzU6OnT7u6pztDT7e7s9PVTmZ26 3d9XkpXs9fWs09UfZWrS5+jA3N9xoaTu9vdRlZnF4+TW6epQkpbw9vdlnJ+Hu77w9/fG5eY7io45 d3ueycuv09Y0foNNj5JFjZFJholhlJcgd3w8foLC3uDN4+W8291Qk5fJ4eS9292awcPn8fLt//+e COdOAAAA43RSTlP///////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////////////AMxeAbAAAAISSURBVHjaYnhEFGCghTIFff2CzEkzHz264Xfg0aMpQZyPHokkPXpU xXAaTdls5vUV5x898lOb8ehRDKf0o0dCpo92MuxDM62g+dGjzfyPHqnVq+jt4vRSevRIODJg4c1A VGXMmXXMrfzLHz3qP5YfMz28XeTRI9bq8rBANLcxb3W14t+z4NEjlfyLnF4dV4QePeJhCGM0RFfm WmYyYcW5R48a7j66XPwoSRgo09K74eAmNGVWJY9q1K5OfBR08pGNzSNT1kePOOY+esByoRJF2V7+ M48erVZZ+4gzHMSN5Hn0iPHao0dHmK6jKDNZsgNI6uk9WnUcxA2offTIsBvIyM2dQ7vIAoNOaSUR IWFWHgYORnE+Fm6mjdiVSS91coiKSD5rPPmhlue8LAle7MqUwKpOGWtrann2ZUkcYseuTGSbL8JG LjlZNuzKhHytp+nsB5rVGJ89X052mQB2ZcLWeTq7tTWnOsZnR8vJLnIRxK6MNU8HZiMvO5uLjCh2 ZTxH0wyMQhwtZkWnSMm7ywTrYlfGAFLVY+GzHaJqpTJ2ZRwGhTAbBQRFzWIVsStjLLRVl/QJTZSS d9YoMov1j8OuTByoanFo4u17zhqH76v6i+VgV8anLgmzUVdZUWydB3ZlLG0n7O0SvLdouN1RTRUz z0jHroxbAqSq65ZbE1jVJUvsykoRNsbleKRbrqFVUQMQYAAKwzUjCzuxrwAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgIconPRmks;
