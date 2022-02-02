import * as React from 'react';

const SvgIconHOther = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 48 32"
    style={{
      enableBackground: 'new 0 0 48 32',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={48}
      height={32}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAAEUDTu4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0 MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMDBGODhCQUM5RTlFMjExQUNCMEQ5NjY3NUEw RTMzRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxREEwMEY1NjJBNDcxMUUzODEwQkQ0MEU0 MkNBNDlFMCIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxREEwMEY1NTJBNDcxMUUzODEwQkQ0 MEU0MkNBNDlFMCIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1LjEgV2luZG93 cyI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjlCQzhDNzk3 MzQyQUUzMTFBM0Y0QzVCMkE1OUU3NzA2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIwMEY4 OEJBQzlFOUUyMTFBQ0IwRDk2Njc1QTBFMzNFIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpS REY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+XthoWgAAATJQTFRFADxBGmxxG25z GGluCEtQBUVKE2BlBkhNHXF2El1iH3Z73eXmI32CF2ZrFWNoInyBIXp/IHh9HnR5BENI3+nqEFle jKyu3ubnDlZbAj9E3ebm7/P0C1BV7vLzocHDvMzNDVNYA0FGiKSmCU1SPIeL8Pb3MoaKtNDRpcfJ lLq9i6qs0+TlFE5Sj7K0iqird6qtttTV0+XmF1RZIlZaVn6B0eLjYZOWU42Q3+jp3ujodqirqr7A UoqOirq8nrq84e3uXZ+jUYiMlr2/OYGGVX2AmMLFSo2R7/T00uPkjKut4e3tFVBUrMHDl8HDe7G0 bpqdnbi6tNHT7vLym7W3s8/QVY+SAT1CwdbY8Pb2EkpPYpWYu8vMeKyvUIWJmrK0GVleW5yg0eHi vtDSiaaperCz////Ss3jCgAAAGZ0Uk5T//////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////8ANY6otwAAAVpJREFUeNpiSAUDBjjFhOABBBA6JZjqCecBBBCUQnD8Epj4UlmS IRwQM5WBAa4aAgACiAQOfyozpyUrhMMvxMyZygqV0WDmlGENY8BrAEAAoXBIlmDClFBzSFVxTuVL TZVm8Uk1QZIQ9ACREtKpeorUsRwFAATQYJHQZ8SUMOQRCExl5GUTSRVj95ZFSKjyRHhxpIaypabG G6XKcyMkbAW4OBjDbURTU9nFUYzy5QKRsQqpqcJxqHZwgMy3U2YXl2dgYOAe+CABCDCcEkNeQwwH E2karBiZidBgwMPDLyDIJaSeysjMy8fGKWqRmqTMws4qrCjJjU2DKw+/NpByYmJMTDVn4wQJBbCw B+O2IQVkOgcT0HS5VEdRCZCQFquwFG4N9lxCbiFAWi5KJNVfQUYMyJTVkYy0Tk2NduHG7mlTTZDb zXTdU1PFQG4Hms6tBEyQxkpBIyFp4AEAFVgjvFJNd1YAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconHOther;
