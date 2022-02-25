import { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SvgClock from 'assets/svgr-components/Clock';
import { format, addMinutes } from 'date-fns';
import loader from '../../../../assets/images/communicating_15.gif';
import constants from '../../../../constants/styleConstants.module.scss';
import { ErrorContent } from './Components/ErrorItem';
// import { ErrorComponent } from '../Error/ErrorComponent';

interface footerprops {
  showLoader: boolean;
  width?: string;
  error: Array<ErrorType> | [];
  isWbcEventOccured: boolean;
}

interface ErrorType {
  errorValue: string;
  errorId: string;
  isselected?: boolean;
}

const FooterContainer = styled.div`
  display: inline-flex;
  width: ${(props: footerprops) => props.width};
  padding: 5px;
  color: ${constants.standardTextColor};
`;
const TimerIconWrapper = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  padding: 2px;
  color: ${constants.contentColor};
  background-color: ${constants.basicColor};
  border: 2px solid ${constants.basicColor};
`;
const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 30px;
  padding: 2px;
  font-family: ${constants.fontFamilyRegular};
  font-size: ${constants.crypticResultFontSizeHTML};
  color: ${constants.basicColor};
  border: 2px solid ${constants.basicColor};
`;

const ErrorDisplayArea = styled.div`
  display: flex;
  flex-direction: column;
  width: calc(100% - 110px);
  height: 45px;
  padding: 2px;
  margin-left: 5px;
  overflow: auto;
  font-family: ${constants.fontFamilyLight};
  font-size: ${constants.crypticResultFontSizeHTML};
  color: ${constants.errorMessageFontColor};
  cursor:default;
  background: linear-gradient(
    90deg,
    ${constants.errorMessageBgColor} 98%,
    ${constants.basicBgColor} 2%
  );
  border: 1px solid ${constants.dimmedTextColor};
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 45px;
  height: px;
  margin-left: 10px;
`;

export const Footer: FunctionComponent<footerprops> = ({
  error,
  width,
  isWbcEventOccured,
  showLoader,
}) => {
  const getUpdatedSessionTime = () => {
    const sessionTime = format(addMinutes(new Date(), 29), 'HH:mm');

    return sessionTime;
  };

  const [sessionTimeOut, setSessionTimeOut] = useState(getUpdatedSessionTime());
  const [errorValues, setErrorValues] = useState([{
    errorValue: '',
    errorId: '',
  }
  ]);

  useEffect(() => {
    if (isWbcEventOccured) {
      setSessionTimeOut(getUpdatedSessionTime());
    }
  }, [isWbcEventOccured]);

  useEffect(() => {
    setErrorValues(error);
  }, [error]);

  const handleItemClick = (id: string) => {
    const updatedError = errorValues.map((errorItem: ErrorType) => {
      const tempErrorItem = errorItem;
      if (tempErrorItem.errorId === id) {
        tempErrorItem.isselected = true;
      } else {
        tempErrorItem.isselected = false;
      }

      return errorItem;
    });
    setErrorValues(updatedError);
  };

  return (
    <FooterContainer
      width={width}
      error={error}
      isWbcEventOccured={isWbcEventOccured}
      showLoader={showLoader}
    >
      <TimerIconWrapper>
        <SvgClock />
      </TimerIconWrapper>
      <TimerWrapper>{sessionTimeOut}</TimerWrapper>
      {/* <ErrorComponent/> */}
      <ErrorDisplayArea>
        {errorValues &&
          errorValues.map((itemError: ErrorType) => (
            <ErrorContent key={itemError.errorId} erroritem={itemError} handleClick={handleItemClick} />
          ))}
      </ErrorDisplayArea>
      {showLoader && (
        <LoaderContainer>
          <img src={loader} alt="loading" />
        </LoaderContainer>
      )}
    </FooterContainer>
  );
};

export default Footer;

Footer.defaultProps = {
  width: '50rem',
};
