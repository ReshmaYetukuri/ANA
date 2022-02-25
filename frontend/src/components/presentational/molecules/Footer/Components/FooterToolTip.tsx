import styled from '@emotion/styled';
import { FC } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import constants from '../../../../../constants/styleConstants.module.scss';

type ToolTipsProps = {
  delayTime?: number;
  title: string;
  children: JSX.Element;
};

const ToolTip = styled(Tooltip)`
  .tooltip-inner {
    display: flex;
    width: 98%;
    min-width: 40rem;
    font-family: ${constants.fontFamilyLight};
    font-size: ${constants.breadCrumbsFontSize};
    color: ${constants.errorMessageFontColor};
    background: ${constants.errorMessageBgColor};
    border: 1px solid ${constants.linkColor};
    border-radius: 0;
  }
  .tooltip.show {
    opacity: 1;
  }
  .tooltip-arrow::before {
      display:none;
    border-bottom-color: ${constants.popupWindowStanadardBgColor};
  }
`;

export const ToolTips: FC<ToolTipsProps> = ({
  title,
  children,
  delayTime = 450,
}) => (
  <OverlayTrigger
    placement="bottom"
    delay={{ show: delayTime, hide: 100 }}
    overlay={<ToolTip id="button-tooltip">{title}</ToolTip>}
  >
    {children}
  </OverlayTrigger>
);

ToolTips.defaultProps = {
  delayTime: 450,
};
