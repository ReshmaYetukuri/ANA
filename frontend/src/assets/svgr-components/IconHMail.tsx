import * as React from 'react';

const SvgIconHMail: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAgCAMAAABjCgsuAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA3FpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEu MC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVz b3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1N Ok9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDowMTliMjJkMi1mZDkyLWNlNDQtOGIyZC1hNWI5 YmJjMDgyZDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEQ3NTJDRDY3OTQzMTFFNEJBNkZC QkU5RUM3ODNFNkEiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEQ3NTJDRDU3OTQzMTFFNEJB NkZCQkU5RUM3ODNFNkEiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5k b3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOmJiM2Rh OWNiLTNkNDItMjc0NS04YTNhLTVmMGJmY2Q0YjllOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRp ZDowMTliMjJkMi1mZDkyLWNlNDQtOGIyZC1hNWI5YmJjMDgyZDYiLz4gPC9yZGY6RGVzY3JpcHRp b24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5B24puAAABs1BM VEUMUlcLUVYKT1QWZWoUYmcYaG0KTlMTYGUXZ2wVY2gJTFEZa3AZam8bbnMIS1AabXIHSU4ccHUG SE0jfYIAPEEdcXYGRksBPkMFRUodc3gEREkedHkSXmMie4AfdXoNVFkEQ0gDQUYfdnsgeH0CQEUC P0QheX4RW2Ahen8SXWIPV1wQWV4APUIOVlsjfIEQVlvJ5OUtbHAkam8XYmcca29rnJ/F4eG23N0V Wl+519i/3d7J5uepz9HG5OXU7OzV7e4sfYIwdXoOVVoten+NtrgTX2QtfIC21tgvdnqVwsQVYGW9 3+EqgIV8qqwoaW0daW6AtrkgaW5aoKSy09TG4uN1r7Ioa3AmbXG02tydwsSlysuu0dJwoqXO5+jP 6OlLlpuEr7Jrqq0dZmsqgobQ6uu+29wbbHHB3+ArfYLE4+QhaW6rzc8rgIXM6OkscXUrf4QtbXIa XmOGs7Wy1dakyMpzoqW73uBEkpe62tsmZ2vN6OkbZGmSvL7S6+wWW2Ccw8V7q63T7O1ipajM5ucf YmefyMoveH3B4eMdYGWWvb9jlpkueX2KvL5Sm59kmp0SWF3///9qrnL7AAAAkXRSTlP///////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////8AMvlhmwAAAW9JREFUeNrMlFVXw0AQRgMUihVLcUJwpxR3 d3d3d3d3t/5kvjQnTWbbh/DWfdidmb33ITN7wtn+uTi3FfhTbGOLFkHISEtOio+NDg81BQcEevt6 +RmMcT+4/BCpwM9iL+1yyU/hqljkGIH/xnGy5YK/w8WxyHmwAj+As3PXiT9AuRu8JytYhAcEr2uU b75CcU7ifRhB+t55ROt1Wr7jFqUmO+9PBbk/wwirW1S+cAKF9wY7H0QEpZ99iCsbFf5yEul4nsyH EMHR/y8k258yv9CK5Ejhw6jg6H87sosXid+oQLj5q/ARRFDnZXpGutRmMI4OIRgsc/BRRNDMa6UK +X39ziOO8huVjyGCdr5FhyjUXmNb3tfwCUQg8+09k4slb1o+kQj0PfSvSjXrE+FTiMC8nwKrzTZ9 TvlUIlA+M31kpqaH4SOJwPDZWXv5LE8Fls8VnfgcIujgzUTQwVNBB08FHTwVdPBmd/9V6l9/AgwA G8EBfL8uvHwAAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconHMail;
