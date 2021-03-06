import * as React from 'react';

const SvgIconCMeal: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk2NjI3 QjM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk2 NjI3QjI2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnxZ DEwAAADMUExURQA8QSN9ghlrcBZlahhpbhdnbA5WWw9YXQ1UWRNfZBRhZhBaXxJdYgpOUxVjaBpt chxxdglMUQxSVwtQVQhKTxtvdCF5fh1ydwdITSF6fx50eSJ7gB92eyB3fAZHTAVFSiN8gQNCRwJA RQA9QgRDSAI/RAE+Q7XKy+Tl5VyFiN/i4mmXmuPk5KG9vxxrcDF3e2icn+Tk5CV6foCgoiJtcTB6 f2ydoC91ei5obC95fmiYm7bIyRhlakeFiXCfom+cnjeEiGugoxRXXObm5nP2oZIAAABEdFJOU/// //////////////////////////////////////////////////////////////////////////// //////////8AcdKPEgAAAdlJREFUeNpicAYDBjjFBKG4IZQIkAIIIAaoFKM4H5BUtxYCq1YBkwzO AAEEIhmdxWD6wCxumC4+JBOEnJ3VEDaBAUAAYWFrsSLY5pwINicblC3K6szGixA3lkMyRwmJzYCD DQIAAYTMxhRmBGIZZ2czVj4UYWmQ5c7ONpzcKMIO4qJM+sDwYhNCNduO1R5IOvGKoFnJCSblVNCE 2SAeUEMT5oVwGdCE5VCEAQLwPQcrAIJAEIYLBUWCEi8aREUEXTv2/i/WSHvZofIy8F389/+cryvb pWAuS7yUCWONZuiIMUEzdMCETjO0x3ROM7T+5rxmaP3NJ82HNScmRTrnaYiZWBpmYmlYiaVhJ5aG jVgaGmJpYM7zK9O7BWiUTnYQhMEgAMu+7yCrICIa4xJjNDEmHkzf/50sraRe+gNcOuU7zcC5noEF AQ1vmdO4f4jyBC7RckXSWZQVCcSYoqog6a1IrsnHa0JR6pN0d03D5uOcUJR4dCvDtjQ+vlVF6iee eKELWpqq8/GHUFl50V1VPYyAnq8DlY6/tcPICcBRcAPj8ekEcQZi3MB4PB2yugExboCFZtuCGDfA QrvpQYwbYKHfdSDGDbDQLRYgxg38fZzAcVbPx/N//qnnC/NRfnT5CnsRAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCMeal;
