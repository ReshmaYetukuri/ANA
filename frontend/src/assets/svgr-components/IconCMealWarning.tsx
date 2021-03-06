import * as React from 'react';

const SvgIconCMealWarning: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk4RTlG MjQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk4 RTlGMjM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuHJ xGoAAAMAUExURS4qJAICASsrIxYSCjAwLhEPCC8uKg0LByN9ghZlahhpbhdnbBlrcBBaXxRhZg5W Ww9YXRJdYhNfZA1UWQpOUxxxdhptcgtQVRVjaAxSVwlMUR1ydx50eSF5fiF6fxtvdAhKTyB3fB92 eyJ7gCN8gf/eSP/JMf/qVV1dXf/TPP/nUv/LMwdITf/mUUZGRv/XQf/SOzAvK//pVP+7Iv/EK//W P//fSf/KMv/ON//cRmBgYP/gSjExMf+0Gv/ZQ/+/Jv/CKf/NNQkHA//jTf/HL//XQP+3Hf++JQZH TFNTU7XKy//MNP/aRP+4Hv/QOP/DKv+8IvnEMGpjJy5obP28JFJSUkEwDBIRCv+9JCEYByIdCyoi DN/i4jB6f//QOf+7IWBMFP/MNey7Lv/oU3loIj09PVtbW1yFiJl1GgVFSispEy8sJvzQOUeFieGw KZmDKf/cRf/IMLGEGf/iTf/ZQtTITHt0Lf/ONmJiYv/tWP/lT2mXmllZWf/uWv+2HOTk5FxcXLSW K3JbGP/FLTs7O/+zGU9PTyQcBzk5OQoJBCV6frKbMv/uWRcTDNC4PWiYm2icn2+cnv/GLf/CKiJt cS95fkA8G7ORJvzVQP/lUC91ev/ROkBAQHFODP/hTP/jTndmITeEiHVrKICgohRXXFBIHf+5IP/B KP7vXFlDEPjHNf/fSv/UPfTnWXZRC//kTu3BNevEOfy2HnddF6G9v//JMBxrcElAFklHHxkYEB8Y CWydoP/AJ3CfotCjJ//sV2deJNulIdyqJiAcEv+1G+Pk5P/iTPHIOkA2E//bRP/bRf/YQjF3e//G LrbIyf/HLn91KzYzGGFaJD44GP/PN//sWBhlav/tWcaaJP/kT0c2DP/hS//dRyomHV9fXzQ0NP+6 IP+6IdOtL/+5H2RJD2ugo5x2GeTl5f/vW3tWDH5XC/+/Jf/rVv/rV//VPteZF7OWLP/VP3BaGN3G Rf/FLCspIP+8I0dHR/+zGFpaWk5OTv/POC4rJTo6Ojg4OObm5njMd64AAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAAC+klEQVR42mL4DwYM/zmkJUCU1zlJEPX//07LwyDq v/t/gABigKqAkDxgkvd/sh/Df4X/5j8AAggozvFfFiwMUgNi8cLUA01UYLrwB8wGGrs0/9OzMIg5 /9lBBEAAQdlI5sdwI9izhBBsIX4oW577P78IQnzx/2mXYez/14tN1WBsa83z8TD2IxNfVhhbA0QA BBCyvehO4ABipf//d3NLoAgrA7H8///XhHhRhBdKy/Oc+f+fl18S1R97uScCySUiCqjC/4Ug1I5a o/Wq+ifgwmDf/b+k1Xfqg8U+h5UwYbBH/zOdNvButl9mywAT9gCThoGszE69nkAWQADh8w4uX3Ko yAGpqVxowipyikCKixNVGCgqA6Q4+VCFgaKiQIpPEFUYKCoGpAQFUIWBoiDbBIRRhYGiINuExVGF n3Nx1gMpcSk070DcIPW/hjHoAGMDXBjqBra1+3VvnzxuCBOGuqH0zczVdpqON2DCEDe0qH9WnZGj fcg+FSoMccMc527XDUkmRb56UGGoGxa8u7J18je3uTBDpHTA1M5yl+XGR9alwYR1MsFUU8IfRsZs jGj4CmcBBBiO2CEQlRwc/0FQWQ7C9Yrl4SKgWPm/rCKYt4WHi5sTr2Kg0v9KMmBeLjenBB9uxSpg pf+lRcG8KRJ8QoK4FcuBlf6XF4PElJAgrwBuxV1KMtKi8mI82yDxxyvAL4xb8VOwUi7ufkis8gtL iuPJBRNASjmrIRygUhEpvFkGGAIwZrCIFCgjW+n9s+n4XoFNMTAEYMyj6f//s4SXvbiqrnVznmpK JwuGYmAIIDg2F1f0vDXSdba+4+O6Jm5VdBuaYmAIwNm/sirVtaqOmRWUfDT47a02yX+XJ6piYAjA 2fcX6c7fHuWj38g4Xdul/Za78ZO/qIqBIQBn/2Q1s7Qz1fRLVDvrvyfigZstoxWqYkgIQIEG+8bZ FtqFXxxeBzyua33FfA/NzQo6HghOaJSjeV7GwZCHm96/jLyrgT/x9252YiOyHMMOAA6+JT2xQC5b AAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCMealWarning;
