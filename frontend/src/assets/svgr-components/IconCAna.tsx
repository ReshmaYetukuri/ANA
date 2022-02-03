import * as React from 'react';

const SvgIconCAna: React.FC<any> = (props) => (
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
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAUCAMAAAG2dB9lAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1 MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDlBRDkx MEM2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDlB RDkxMEI2OTMyMTFFM0JFQkZGQkIyOThDNDRGOTMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOmNhNDkzNWUyLTEwMDgtNWE0MC1iZjBmLTRmYjI2OTI1OTgwYyIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pq0P emcAAAJqUExURcDBwu7v8MbHyOrr7L2+v+3u78LDw+zt7efo6b/Awezt7ubn57e4ufLy8sPExcnK y8PJzPX19evs7enq6+/x8e7v78XGx/Dx8b6/wOXm5+jp6vDy8vHy8urr6z0+PsjJysXLzsvMzMTF xr6/v8fJycDBwba3uNTV1qChouHi4sXLzfX19vb29s3Ozubn6OLj5Ozu7+jp6dLT1OTl5vLz89vc 3fT09cvMzdbX2Onr7PP09PPz88TKzaChoX5/f2FhYeLk5NjZ2rm6ut/g4M/Q0MXFxq+vr97f393e 39zd3c7T1T09PsTFxVJTU3V2duPk5fLy89na2+rs7dHS0u7w8O3t7c/T1r/FyMfN0MXGxvT19ff3 9/T09NDR0lBQUMbMz8zR1LzCxTc4OJiYmb7Ex+7u7iEhId3e3pyen9DU1tLW2JKTlPHx8vb294SF hdTZ2vDw8Do6O8vP0q2urx8gIMHCw+Lk5bq6u+3t7jExMdHS0+Lj46KiokFDRJ+goGFhYt/h4oKF iNze39/g4eDi47i5usnN0R0eHubo6Onp6d/f3y8vL8PIzN7e32doaOvt7dnb3ISIiiEiItPT1Ds8 PBscHaWmp7vBxNbX17S1ttzc3NHW15KSk+Ll5sHCwtfY2IGEh4KGiHd5erO0tc/T1d7g4X5+f9zd 3oaGhjQ1NpianMnKyurs7FBQUd/f4MTJy6qqqsjO0e7u71RUVFNTU2xubpSXmMnO0YWGhrS1tevt 7ru7vCQkJMvR09PU1D4+Ptfa3BscHJydnqGiopaWl8zS1MfLz/Hy8+/w8by9vvDx8lBPTwAAAObm 5jMNk6AAAADOdFJOU/////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////////8AVQahbAAAAslJ REFUeNpiOHsaBBjOssa7VkownFU4FXDyJEAAMUDETp0p72Rg4Dh+Yt5JgABiOHvqlKjU9hM685l8 gGoNFc6cOrOD4eRJgABigGgHgbMMp0+dEJIUOC7IzwRkn2AuXFDlvoGPAchmPnPMVqSXr+8kkF0W JiMSwqt88uRZgAAC6j0FBOKiQlLcDs6mjurBuvwgrSDhE6yH6iUn1h4XMxU8w8DEBzLl7OkTrMyr dyc2ash4+3TtUVzLICFxEiTMzOGvUHRc5pTIiQCTagagyRCzJ4QvYeXaJbTGkrki1IkHCNTUzgIE EJJzEeDsWZDvgICRS5bDWNMj0MLIxVxe/jRUGCTaouV13EQ7SlFFTAwqzMh1Rm/pmfzjZwQnp6ko sbGBhcUZ2RcbLbJJOiN9xuzMViU2VVWQMFBU+MyBqXPlOrLPWB1WiuNkYQEJi7ILe66yUS+WOzXn zJYZbN0sJ0+ChNmFuTMFDI5Lnzpxwpq3lBMoChaW4j4qIAIWzeHdBBYFC+9bn2JgwNUfxGyZGsrU Cvbl6bMAAcZw9uxpvVMwIM4oyiUkK8XBbeyg2exhGuhooW4U7KJrzm/OLw/2OyQakJVKGutrOusL Rufq6GgLcusq8sszyTOJoSg+wcgKUqon2bBRS2D2qePHpa20Bc0KFPlVmMT4xPjYkBQDlbILTbE/ w9QUsfBgicbx45FnlguardjcnsekxMfGwMagClMsDlLKLGxvJ5lxZnrPNrnjfr6nXM+si6nZ77nz zBE2Bk4JTgkWqOIToiClhnZnQGDScQ056VNOZ+rOuLuBBc5Mk2A5CQ5RsGKwUu7klQoCbUFAQ229 gYlFUu6M25lZTEBTl52ZeRISoGDFzMIc3P5eCgIJjMePy0ifAioFAmsTXt5YBk5lcMgjKebg1t+r JZAFDACZUxClIYy8vLwy6UhKYYqxJT6s6fEsAGg2nATzf2y6AAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconCAna;
