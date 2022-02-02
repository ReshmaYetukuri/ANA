import * as React from 'react';

const SvgIconCOtherWarning = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAmCAMAAAH/xrnDAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDk5MzYx RTM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDk5 MzYxRTI2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvMI V1wAAAMAUExURQQEAr3Oz2BgYP/iTT85F//aRP/ZQg1VWv/HL0uBhX11LDYzGP/ONzx4fDo6Ok2G ikQzDDx2ev/tWP/kT//gSh1iZv/cRidxdv/XQUh+gSsoGBtfYwtRVoKkpzIyMlpaWq7DxC1tcaC6 u8nS03+eof+6If+4Hv+2HP+0GjF0eYGjpZKxs2aTliMdCpt2Gkd6flmKjv/uWi9xdV1dXf/QOH1X DK3AwqzAwf/DKv++JSBnbP/rV1NTU3OanP/VP7SWLHFbGBUSC//FLWSPkisqIv+8I0ZGRv+zGSxr bwlNUk9PTyRuci4rJCdjZzAwLg8NBy8uKg9YXRJeYw5XXNjd3RBZXhJdYhNgZRRhZhViZxZlahlq bxZkaRlrcBdnbBpscRFbYBhobQpPVNne3tfc3LvKy8rU1f/qVf/mUcrV1dje3v/eSP/LM//TPP/n Uv/JMZ+4uf/CKYCho8nT0yh0eTAvK4Olp//SO//EK/+7Iv+/Joarrv/WP2yeof/fSf/KMilmamuc n9jd3qy/wP/pVHKXmoWrrU+KjYeusLvJypGusISnqnKZm1mNkP/MNP/NNZ61t6/ExSVvdFuPk9yq JsaaJOvEOf/JMNTITHVrKI6pq2qanf+5INeZF9ulIfTnWXijpZmDKfHIOlOBhFaHilCLj2deJF2T l2RJD6u9vv/jTXFODP/oU//sV9C4PZS1txlZXklHH2iWmdCjJ1lDEESGip62t+GwKSoiDJCtryAc Ev/vXBkYEMvV1vzQOf/ROoSoq/y2Hoatr1F+gZOytLGEGcvW1/28JP/AJ/+9JGBMFP/uWbzLzGpj J//GLUB/g/nEMP/POLORJvzVQP/lUD58gNjc3a3Cw2mYm0N0eDBzd0BAQP/hTOy7LndmITN4fHlo IrKbMlBIHf/BKGeWmd3GRfjHNf/fSv/UPR9kaXZRC+3BNYWprAhLUMrU1GKLjkuEh3ddFy8sJjZ+ gklAFv/MNRkXDyAYCI+srj09PRtcYf/cRdOtL520tmFaJObm5mGdDs0AAAEAdFJOU/////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// /////////////////////////wBT9wclAAADfUlEQVR42mL4DwYMIMIMREWF+gKpzNA9YrvAgpb/ AQKIAa6it5jhf+N/9v8MsWn/15iAROrdAQIIIgsCkhBT1k/8L6uVBGZH/RfVd+HyAbKjjIDcRwsd 9ASg6v1BBEAAIfRCXYDGLguGsGv/p4UFp6wEsTsYI612ykDUVGuG/f/LwgJmR1oF/xdirskHsiPD gNIiuRyVMHP+VKj5w9jGIAIggJDtwuEEiP2iwRjC4byhkuy/kIQbE/kjw0NCPf7L/L+ZAhM+lBil FP7/f/AEJLO3xiZ6p4W/CwGaudGwRThbAuLyRKCZ1/+bA9X8y1v3255nc+EWSGAbQLW6sJX3OVXN 0fBBdUnpBX9HBkcbIAsggIj1Di7hLjNswi8DezCEtTlDAtkxDNkUpBhYLKOMEE6O//9f4X9QWaB0 8wZPuPCx/9FtMRFWBoGdrUn/VeDC8f/bYpRCElLZZZJSkBwYHfcmwui/Bzuau+NiQs4khPzXl2c4 u4zBGCycHB8dlxlhVSwq/T9g/tqMO6yLSkHC8cv/e0eEJAQC1cywvvKcLbd/Kkg4+v5/haD/qdf+ /+dLf5p9eV/OlKqfQOGJMbeCOME23F71UOL13Yqjam4gKxU4u6D237O7OL3QVW01mue/8XA8rlR/ JY8m7HDKh4HhE0ZQucBZAAGGI3ZIikpyFYcUhAZqEalYMTQwuJOgyU1Xw4PCEgRDlrCzF+FQzIjI QkE6/1MDg9mbi2SS3mNTzBgfK56VdT4mMkLpf1gC0AE9P37J/J/l+fYwuuLkz1n/94rHRcVoal8N CtMBmercKpO0GGtolMRGt09q0oyM0AZm7dBAyf8TGmR8VVKwB514YlzU5P//PwSFlf3/b87O3vD/ P5MbnxyfGxOK4uQOoKmzGTP5IyO6///XCQ20BYn6OXLtXpueJ3wn+4G/H1xxbXzs0gWTomL4/3cH hfEq2to6F///L8e9+7R1S8YqETFWiRcmz3Z4QRXHRlcDyQMRwLIBGFui20CGeEkJpeddYa77zWZX frEv/5zFdxuI4va4qBv//z8JCitGeEBuZsaqL7qsEvYMl3I4dAUsK1fwQd18JDICGFu8IUgel/ev E2OryTX5CjT0xElVNQ0GJjzRbew/bT9PznSnwirXOerupo5M+NKGjW5//Xa9ecdVD841/S5ljD8h OX5kCKAo8QMAArgFaiVFo88AAAAASUVORK5CYII="
    />
  </svg>
);

export default SvgIconCOtherWarning;
