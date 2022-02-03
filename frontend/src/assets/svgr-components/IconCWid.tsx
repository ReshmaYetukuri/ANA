import * as React from 'react';

const SvgIconCWid: React.FC<any> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 44 20"
    style={{
      enableBackground: 'new 0 0 44 20',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={44}
      height={20}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAUCAMAAAG2dB9lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlDMkZE NzY2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlD MkZENzU2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgWp ZGYAAAIfUExURQ4ODggICEVFRURDQ0ZGRkVERENCQkdGRkdHR0ZFRQQEBAEBAUlISEhHSNjY2EJB QfX19T49PUpJSUZFRkRERAYGBgMDA0lJSezs7AwMDElISUA/Pzw7OxMTEwcHBxUVFQICAunp6UdG R0FAQAoKCjs6OiwuLxAQECwtLkJCQkBAQCkrLLi3t0NDQzs7Ozc2NjQ0NBEREUVERSssLS8wMQUF BTEyMxgYGCosLTo5OTIxMUZGRy8vL+Li4oeHhz08PEpKSj8/PyoqKjk4OCAfHyksLRMSEgkJCQ8O Di0sLEFBQT09PT4+PhoaGi0vMMzMzB0dHS0uLykqK29vbzU1NaysrKCgoIaGhiIiIjw8PBsaGjIz NICBgTAyMk9OTlRUVDIyM9fW1sHBwTg5OWRkZLe3tyQkJL/AwDMzNG5ubiUlJTU1Nj4/PxYVFT8+ Pjg4ODg3NyUkJK2trYmKiquqqmlqa0VFRhQUFIWFhSQjI2VlZi0wMUNCQzc2N9fX1zQ1NjU3N6Sl pREQEDc3NyEhIYyMjAwLCyYmJgoJCXp6e4+Pj3h3d72+vtLS0p6dnTw9PXl5eaGgoTk5Oc3Nzfb2 9tXV1RgXF76+vqGhoVZVVXFxcXh4eCkpKcDAwJKRkaWlpkNDRIGBgaenp87OzicnJ+Dg4BcXFy0u MDAvLzM0NYiIiDAxMignJ7+/v0hISEhHR0tKSlBPT////wAAAObm5mh0EuoAAAC1dFJOU/////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////wChHAOwAAACxElEQVR42mLYshEEGLbMFpjBwMCwRYODeTMDQAAxQMQ2CEhsEmUQlGKS2wwQ QAxbNmxgd/TjWF/JUM6whdNHTXzTpopNmxkAAogBoh0EtjBs3CCkq6q9jl1WBcjmmbkxaB37wg4x IFszcbody6bMTZuB7GQzXhYjNoXNm7cABBBQ7wYgEGJnltbTt/JcEhFgLuuxbAtYWJydLU81UJtn HQc7pxuDiqghSJiHk82/a2qjuARHGKfOLHdRsc0MIGF+QUuN5VK8HCxMrMwrTIEmQ4QjqxvWcQgz iehqKmupMIJA2haAAEJyLgJs2QLyHRCsY+UXdDawcSp08ZU3lNwIFV7P6uVdYLyah3c9i7y6JCNU eD2rsn2tcf06oKgNUJQLLOywfkq8QHZpzDo+pdBuxTZGLm6QsNB6kRL/1p4cu/V8wqypinJc3JtB wuuZtSLXWtiu2yTBt4mvZdMmxc1gYWYtGTMLpnXrlYSZmNlAaiHC0jImrrzr1lsDPcQmCBYFCzOZ Ba7jYCkzWlDDrzzNHezLjVsAAoxhy5aNcRtgQGgdOxMzv7Sg3iR9AysbT6c1WREuAVHmubKGHu1g v0OiAax0PTurLr+0t54zUGnIeiFxnvXr2UPM5WWbGCRV5FEUiwOVsnk52qs2+xlrR6/jAQbEenYW ZXk3daBSRlFZJMU8RYtZ2SbX2aumz+/ctEliHd+mTZtswznDgdQmRUZRLjF1mGIHnvWcrLbz+pLm LipeGtS/SmLder6JLJycOjoTQIp7ucS4NzNAFQOVirAppwgIZKgJCFSJr7OT4FDiC+NkDd0UHKwo JwpSuhmumJNZU8tHxjJBzUJNRAroVA4lFhYmYHJh5peUM+VSAAcnXDEwrGQsYzVcTayhSoXBStnY fOFKEYoFZfJNNLRXrgMrtQYpNRIBKtWcIwZXCleMLfFhTY9bAOyTVtl1PS3TAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCWid;
