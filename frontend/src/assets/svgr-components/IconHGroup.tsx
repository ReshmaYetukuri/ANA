import * as React from 'react';

const SvgIconHGroup: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAAEUDTu4AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA2lpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpkYzljNzE5MS1lZGNkLTA5NGUtYTViNC02NmE3 ZWRkMGE2YTAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OUUzM0IxNEU3OTJCMTFFNEI1Qzk5 RjczREM1ODZDMEMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OUUzM0IxNEQ3OTJCMTFFNEI1 Qzk5RjczREM1ODZDMEMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjA4ODI2 MUE4Mjk5NzExRTRCMDhDRDczNkE5Qjg5QTZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjA4 ODI2MUE5Mjk5NzExRTRCMDhDRDczNkE5Qjg5QTZBIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3Jk ZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+LmhI8QAAAwBQTFRFBm51OoeM 2/T12/HxAU1SzuztKmpuG3uBAWdudaSnIX6Eg7u+hba5r9jag62vCnJ5CExRAUZLgrS31/LyK3uA yebnLWtvAWhwAWJpaKertdvdAW52qdHTAW11Fm91mcHDPJSaFmpwG1pfIW90AUhNHGJnBklOAUtQ AWVsAVthAVheAV5kAUdMAVpgAWhvAV9mAVBVAWZtAVddAWFnAU9UAVlfAWRqAVJXAVxiAVVbAWNq AVNYAVFXAVVa3/b2AVZcAVNZ5/v7AVxjAWtyAWRrAVlgAVZb3/X1AVRaAVJYAV1jAUxRAUpPAWtz AUlOAV9lAWpxAVBW6v39AWFoAVNaAVZdAWdtAWRsAXB3AV1kAWBmAmNqAVleAWpy5Pn5AWBn2vPz AVFWAU9VAVhd6Pz82vLzAU5Ux+LiU5icCG51VZ+jAWxzC2BmAWVtJHh91+/wRX6BnsXHpc3Ps9ja 0uztkL3Aq9bYJYKIzujoAW51AU1T4vj4YKGmx+PkaJiaBlxir9XXXaOo5/r7qtLU6/7+IGNoicHE TJOXkLm7ebW5QpCVXaWpD1hdD3iAdrG0Qnp+drW4B2twCXB3g7e7AmFoNnl9JnB1a62xL3p/Bmhv n8jKAWlwXI6RqcnKqcvNeaWoFXB1GXR61e7uptHUBlNYAVtihri6bJ2gBmBmnMDCEWpwFF9lEXqB RYSJRImOS4WIzObmdaCiqszNudvcvt7fhcDDvOHjJICHLIOJzOjpzurrZ5aYebK1i7i6B1BVgqqs tdTVOpCVa6Kl0eztx+fo0+7vx+jpZ6Onl8bIdK2ww+bnKG50weHi3vT0B01Sg73Aa5yeXIyPS4uQ zOfoDGhvyujqjL7AicLGCGJoxOXmx+bnAV5l1Ozsjby/qM7PvN/grNTWF1dbW6Wpg7W46f39FnV8 eq6xUJqeyeXmqdTWdKirxuDhhL3Bhr/CRZKXSZOYgayvEHd+erS3DHF4DVJXAUVJAkZLaqSnpM7Q EGZtFWdsrdbYi7a4S5GVnMXH7f//HePIOwAAAQB0Uk5T//////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////AFP3ByUAAAM3SURBVHjaYvgPBgz//7dZPQZRGprmIAoEAAIIg9K3B1ES///r/AcIILCg9P+w /14wFeIP9LdYngVzGP4HayZbp/1Xg8jMsDXwFgPSAAEENQhhqoJs1nt9RZgMq4ZxKkzG2XDBTy1r CMeXQ0Lb1DpJHczRM/PXtTTx1gFzNERA6tm+QvSkGnlW+TEDGQABBLfnOiuYSpj8H8UnQHt9/3No SPzX1vyFKnEwVu9oQsbhOFejaSgSXLM5XBj1IzWV3RxsVBES3Z//a1gZe1m4GtnaGFT9/zIHJtEY 9glImmpZWgcC6fmCFxFGyWlrml7aW/hnvbqfzkMUyzEAQAARlBDeCqGviaJJRFSWp8zWiGvXtghC lZCW3c5laHblr5MumoTw2//PXSQY/999gWoUk/PsHf/3nPy/Tsv+MooEewDHzBPG2styQj3MkSVe Muhp3De+beFaYutpMA8hcX46h6GZnb6Trpa7dWDacj64hPN/DRcJOy9NLTd3GxPv/ypwidlSZhLx dpox9iHuJiw+B3TgEhwaINIUarGOIFyC28y4GRZG83QE9yNcJQO0WPmVvDxnq4+K4FwUnz/WAkaq ibePHx+hYAcIMJwSRGo41Rshzc8LZFxdfBNI3pLT115RhE/DGmlp2WznlE49jtxws5r/ef6RTpqu +Xg0bPso6zuJ9/9TQw0zieApjqKKmrr1s/D6QeoN9+8n/3cttJIwXnXm///NPEL3HPFoeOQbO1uP w/CdY3XxjwY7x++6psn2lh5TcWpg4g8Q1wvTkJSJNtbX9rLQLH1m5Gbr4JlYi13DBIYyPaDxGmbu UVH+2k6aujFGTSEhnjYGJh37ODE1HGNwZv1vaKjhYiVhp63ttVTXVCvU0t3cPDApjeV/hc+5dHQN 7AGZQf/Dw4Ge1bezsNB01TKyt3VwNzAwqWLx/t+yT0cJQ4MeRxeMrQs0HuhZa3OYQL+OIIaGIxOB rpGEBKGWFtizNgZgnmOdjqCg2mtMT/dFB8f7a4sI7UQKkw0fxPxUdAS/bcQerAnHb1hommoZWXo4 mCcamLB4q/sAlQvsZsabWhf9O7T29OolJj2qbAUXVt6hOHkDAOCSXugwzY1YAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconHGroup;
