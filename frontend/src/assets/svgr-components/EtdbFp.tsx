import * as React from 'react';

const SvgEtdbFp: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAACIwYlVAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTA4RjMz QTg5NzA4MTFFNDlGQ0ZFNjBGNzJGQkM0RkYiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTA4 QTJBQTI5NzA4MTFFNDlGQ0ZFNjBGNzJGQkM0RkYiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmI5MDhjNWQyLTUyZDItYTg0Yy1iY2JhLTc3NWJiY2Y5ZjA0MiIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjGN lTsAAAJ2UExURe3//wFZXwFaYAF1fQFFSgFWXAE+QgFDSAFNUgFPVAE5PQFiaQFYXgFITQFGSwFm bQFLUAFMUQFKTwEyNgFXXQFQVgE/QwE8QAFbYQE6PgFkawFESQE7PwE3OwFlbAFnbgFOUwFJTgFd YwFweAFRVwFyegFTWQFSWAE4PAFVWwFBRQFARAFcYgE9QQFqcQE0OAE1OQFCRgFCRwEwMwFobwFj agFHTAFzewFfZQFTWAFgZwFgZgFhZwFeZAEzNwEsLwFiaAE/RAFVWgFrcgFqcgFvdwFPVQFeZQE2 OgFxeQFudQFpcAEvMgFBRgE8QQFhaAFdZAFfZgFQVQFscwE+Q+z+/gExNQF0fAEtMAEuMQFtdQFu dgFsdAEzNgFUWgExNAE1OAE5PAFWWwFARQFcYwE0NwFSVwFtdJ+9vk97fUZtbwIpKwEuMhQ5PAFo cAFITAErLQFnbxtMUGKJiwFXXKO/wAFDRwE3OrDGxwFjaafT1QFkagJMUcTm5ypZXDdXWqjMzgFO VJzAwUdxc/P//+r9/UBpaxRSVZm5uoOmqAFMUgEtMQErLkuMkXOYmgFFSQEqLQFrcxp8gj5zdun8 /AFRVgFUWa7GxgJVW4Gvsfn//6fAweL29gE7QOP39wEwNAFLUYupqpmztKC6uwY+Qtru7xhERwFl awIqLQFvdq7W2AFHS9To6D5sbziChofAxAIoK9bw8AFNU1B2eIGbnAFbYhRxeLTX2E+dokZwc2KD hT6UmQw3OwJhZwEyNQF0e7bOz+P29trv74unqAEvMwE9QgI6PuL4+UuYnRRpb6jU1gFGSpy0tE6G iQFYX8LZ2v///wAAAFgATUoAAADSdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// ////////APyIqu8AAAI/SURBVHja7NTVU1tBFMDhvTHiTlyxJDQGEQINJIEUS/BibZGidXej7u7u 7u7u3tP/qBvydO/kgb7Rme7zN/f+5szZRb//4qBRhul0+qvszOqmmFFTV6Hi2wbWiAXaGpZO70qJ W7MzJ05yGi/xAnaix8KRCBh5Cp3VLUuFWwuqxg1GvQbe2AwaM6eRbRYuiii5lR2eVBjbCWUg8hXV 0+SdB+5K/Wm9DvXi/q52cLVQcUEiGPApVvFLs0zi2dpcllrvapkRAlmcihPBYIQw2AlbMni8zvpk 4Vt0Yf20NiquujIYBQM09BE4eKtZmB9R3pjy9fPD4Jcdq89RMQ6ehSNw8MF0tvRa2hjH1E+PnaJw PdFZ/uM4BVfviYk0QcwTwX4cfH7Ds6hxaQXNli7x79tPxk1OoyYcgJ9g4ZweDt55q2wugIqZBZDG 2kLGTjxh6AMmNErM3/IVyo/Ne72aIpBbTKCNqOc1k7AXTzgxORwsxMHcVStjhroMPnCA0XtCL/tF wqLlQTxhSAZ/UOvXLRPxiolSEENNrbUkfoyE8fo84NuAIxbswutj7d541Reg9ST+BVyXJ3SIhHkN doJZWC4xM3DwZLfs4p0XqgUDbAEo1O6utsvXSRivjzwnGVzLrSzxbHt9k19oGv7yy/bdQ4i8/EA5 Rx8d5kgZuaDviM+5vYRyUwzUkDNHVgjzHND/fvv0+4iCfdSQ5+/WbmJxu0+FZn5HI7iD6OTm+fee nn2DRnhhEUKj9934j/9R/EeAAQD6FTMnsswwTgAAAABJRU5ErkJggg=="
    />
  </svg>
);

export default SvgEtdbFp;
