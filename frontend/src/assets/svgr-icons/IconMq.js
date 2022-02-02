import * as React from 'react';

const SvgIconMq = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 45 45"
    style={{
      enableBackground: 'new 0 0 45 45',
    }}
    xmlSpace="preserve"
    {...props}
  >
    <image
      style={{
        overflow: 'visible',
      }}
      width={45}
      height={45}
      xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAtCAMAAAANxBKoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ bWFnZVJlYWR5ccllPAAAA7JpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6 eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1 NDkxMSwgMjAxMy8xMC8yOS0xMTo0NzoxNiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wUmlnaHRzPSJodHRwOi8vbnMuYWRvYmUuY29tL3hh cC8xLjAvcmlnaHRzLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9t bS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3Vy Y2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcFJpZ2h0 czpNYXJrZWQ9IkZhbHNlIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InV1aWQ6OTQzMzMxODcy QTIwRTMxMUExOEZBMzBBQTY3OUU2REMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjY3N0Uw MzI1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjY3 N0UwMzE1QTc1MTFFNDk3NTRBNTkwOTFFQzdERTUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhv dG9zaG9wIENDIChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlE PSJ4bXAuaWlkOjA0MzkxYWMwLWNmMGYtYTc0Yy1iYjExLTFlYjJmYzljYjkzOSIgc3RSZWY6ZG9j dW1lbnRJRD0idXVpZDo5NDMzMzE4NzJBMjBFMzExQTE4RkEzMEFBNjc5RTZEQyIvPiA8L3JkZjpE ZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PkS2 /X0AAAGSUExURVRhYYiam7HIyp2ys8zn6R0iIjM7O8Pd3wZ2gHB/gNHv8brT1Q16g0VPUOfq6gh4 glqhqL7j5szd3gd2gNPw8nWvtNTx85PKzkWco4m6vsnq7aTU2KvY3GNxcoHAxZ/R1Q56hC2Kkni6 wMbZ28vc3sjq7NLv8Xu8waXV2QFzfRuDjKrX28/u8Lnh5KDR1R+FjsDl55/FyHy9wgR1f83d3jiU nFegpjKRmY3Hy3m7wBeAiTuWnrvi5XawtbDO0VOepDWOlg16hA57hazZ3BiAiTSOltDf4L7k53++ w7Db33yNjs7t7ySIkRJ9hzSSmheBiqe9vwJ0fh2Ci0idpR+DjDWTmyCDjKvLziuNlUedpMLm6JbM 0KzMz7Hc3xyBinq7wbLc4ILAxb3j5hyEjRmAiaPT10qfpiyNli6Lk8vc3Yq6vz6YnwV2gB2EjcPm 6XCtshF9hgN0fpbL0Mrr7ZKmpy2Oli6Olp7Q1G+ssj+YoAd3gRB8hsfa27/k563Z3TaTmxd/iEuf pwAAAABzfdXx8+7u7oHSpuQAAACGdFJOU/////////////////////////////////////////// //////////////////////////////////////////////////////////////////////////// //////////////////////////////////////////////////////////8A2ZlaHQAAAidJREFU eNqklYdX2zAQxmV5JCaEAiWMQKDs0kFbOqGliwLdQPfee+89dZf/uydb8Ug84tfvPVtP8u/J9z6d 7li1Tj/62hcfbIBosRC6VLoESQrSnXt2AjRJt82vlwvfr85ML5exfO/zZO/RWHpsWE7397Sgr5ae 3dH0jVaa7N2M9dr4MYLekQdYN9iNjeqazdfTB2ll0wmM1sJcmB4jf09vxzgd2Bak254A3O/AeHWs BOh5ivkmJmnghUd3ks+DmKwRjz4EcLY7he66ouhdb2FqANP0UNGvAZ5jui669DmAd03Q+xx6FODM RBP0qSOSfgbwSC0UeMEZOc85g6bpho/3Srod4LiaM2HKr7oQGqJRFFJ6yER2GKDfoyWGljMURSWH uilWa/SQpI8BXPNp2py2Jlp3/6MJq0ZvlTTl9RaPtomzLEZvW9hyKSdETn0dlzQ96NHcND8IXdLM CQpRCF67SA17c00GE02Pq7hf+bRhKvKkqDimCmEE4w55wnFVMxyauwHbgoU8CfnN1ahJztK5LcxC yO8+gL9RNMVCsgrhs0zIE14MHKWbJ9VbANdjMokcYkUezMHqF4CvcYmnM1ZRp/Nb3Z01mFpITdj+ TPfycfDO302hZ/16UqJ6cie5nuQDtYqK8cuma1X1aZY6mFJjf81lqN+3vzX2hstxveHT//cdcqbk 9LQ352emf77H8vJQUk/L2C/dXnwhA00apT7/pzWG/ifAAEHXkRZT9jTOAAAAAElFTkSuQmCC"
    />
  </svg>
);

export default SvgIconMq;
