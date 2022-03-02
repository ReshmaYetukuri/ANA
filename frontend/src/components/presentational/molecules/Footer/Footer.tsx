import { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import SvgClock from 'assets/svgr-components/Clock';
import { format, addMinutes } from 'date-fns';
import loader from '../../../../assets/images/communicating_15.gif';
import constants from '../../../../constants/styleConstants.module.scss';
import { ErrorComponent } from '../Error/ErrorComponent';

interface footerprops {
  showLoader: boolean;
  width?: string;
  error: Array<ErrorType> | [];
  isWbcEventOccured: boolean;
}

interface ErrorType {
  errorMsg: string;
}

const FooterContainer = styled.div`
  display: inline-flex;
  width: ${(props: footerprops) => props.width};
  padding: 10px;
  color: ${constants.standardTextColor};
  background: ${constants.basicBgColor};
`;
const TimerIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60px;
  height: 30px;
  padding: 1px;
  color: ${constants.contentColor};
  background-color: ${constants.basicColor};
  border: 2px solid ${constants.basicColor};
`;
const TimerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 30px;
  padding: 2px;
  margin-right: 8rem;
  font-family: ${constants.fontFamilyRegular};
  font-size: ${constants.crypticResultFontSizeHTML};
  color: ${constants.basicColor};
  background: ${constants.contentColor};
  border: 2px solid ${constants.basicColor};
`;

const LoaderContainer = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  margin-left: 10px;
`;

export const Footer: FunctionComponent<footerprops> = ({
  error,
  width,
  isWbcEventOccured,
  showLoader,
}) => {
  const getUpdatedSessionTime = () => {
    const sessionTime = format(addMinutes(new Date(), 20), 'HH:mm');

    return sessionTime;
  };

  const [sessionTimeOut, setSessionTimeOut] = useState(getUpdatedSessionTime());

  useEffect(() => {
    if (isWbcEventOccured) {
      setSessionTimeOut(getUpdatedSessionTime());
    }
  }, [isWbcEventOccured]);


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
      <ErrorComponent errors={error} width="100%" />
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
  width: '60rem',
};
