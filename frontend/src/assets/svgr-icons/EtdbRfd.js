import * as React from 'react';

const SvgEtdbRfd = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlBOENF NEQ2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlB OENFNEM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Plb8 USoAAAEUUExURS5eYpmtrxBaXw9YXQhLUAlNUgpPVAdJThJdYg5WWwxRVgRESQZHTBZlahdobQNC Rw1UWRNfZAVGSxlqbwNBRhRhZhtucx5zeBxwdRpscRVjaB91eh1ydyB3fAI/RAE+QyB4fQE9QiF6 fyJ7gLjExam5ut7j4w9HTD1pbU11eHuXmR9TV4qipPT29t7k5FyAg6u4ud7j5Ky5u62+wKu3uUeQ lKy7vGuLjoOlp6y6u4Soq8fP0F2cnzh5fTRvdDRxdXeqrTiIjCR9gqy6vIKipYSmqISnqd7i4zZ1 emCKjjNuciJ8gSuBhoOkpoKgo6u5uqy8vYSprDd3e9fb24KhpDNscIWprN7k5fT39wA8Qf///+bm 5jU7lHQAAABcdFJOU/////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////8Ag20X4AAAAkNJ REFUeNpiiAYDhmjlqCgWICUWyiIPpKCC0ZHRKtEAAcQA5UhHRHEzRPMKcEfCRBgiI6MBAgjEVpYW 4+UQAGmPlhaLMhZg4QabARLjloeqAamNVImGmQ0GAAGEzlaQERZlZgOzFaKAQJcHxFaQiYpijuIR AbFlhKOY2aJEIkFskFoekchIDDMZwQxtCNsawYYDgABCZmMIKytIy4gJ84pyMAuwsfBAhUGCUUEg wSigILcIVBikMsoOpDIKKCgfCRVGaAcJRkYSspIxMlI/GqguODJSA1VYByQMjAUQggsDA14fxI+M 1AQLAAQQXrNxCDsoyYpLSPJJCTJxcrHChU2RRdlhwj5KsmHA2PAERQkruxBU2Buo1ioKpFbPDCjK DxUGmeAKVMjEaWgJFJWDCoPM9Y0CmavmDxRVhAqDbAuJAtmmZgAUhfkS4QaQ2kiYMJpoJLmeB2kF Bm4kME0yIgtHa2kCAzeagRES3KiqNYHCDIzIqtVVsakGIrBwJCi143YJQIDhEKauYhtlJQVZaXEZ CTFJYT5eKVFBDiZmTgEuNlYWdnTFjriV8gihKnaCKA2MirKFKQ2PCoAq5eZHzU1QU92iojxgpupF OUOVisihKIY5wCIqyh7mAMMoI6hSeUUUxTC3ukRFecHcqhZlAFUKSRxwxTBv+UWBgS7Ire5RJlCl aIqxhQA3XCmaYvxK0RTTOLoZQSWzRqQ5hAEudBmjVRigiRy7Yh0UxdHR6pGqOBQzRGpFE604WgtI oDlDlQ6JHwCoP7iaRRnZ7gAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgEtdbRfd;
