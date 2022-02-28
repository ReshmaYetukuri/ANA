import { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../../constants/styleConstants.module.scss';
import { ToolTips } from './FooterToolTip';

interface footerprops {
  erroritem: ErrorType;
  handleClick: (id: string) => void;
}

interface ErrorType {
  errorValue: string;
  errorId: string;
  isselected?: boolean;
}

const ErrorItem = styled.div`
  width: 100%;
  min-height: 26px;
  padding-left: 4px;
  font-family: ${constants.fontFamilyLight};
  font-size: ${constants.breadCrumbsFontSize};
  color: ${constants.errorMessageFontColor};
  background: ${constants.errorMessageBgColor};
  border: ${(props: footerprops) =>
    props.erroritem.isselected
      ? `1px solid ${constants.amberSubPortalButtonBgColor}`
      : ''};
`;

export const ErrorContent: FunctionComponent<footerprops> = ({
  erroritem,
  handleClick,
}) => (
  <ToolTips title={erroritem.errorValue}>
    <ErrorItem
      handleClick={handleClick}
      erroritem={erroritem}
      className="error-items"
      onClick={() => handleClick(erroritem.errorId)}
    >
      {erroritem.errorValue}
    </ErrorItem>
  </ToolTips>
);

export default ErrorContent;
