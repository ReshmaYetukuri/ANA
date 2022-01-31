import styled from '@emotion/styled';
import { DefaultButton } from 'components/presentational/atoms/ARNK/Button/DefaultButton';
import React from 'react';

interface FooterProps {
  handleRegister?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleClose?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  footerData?: {
    closeButtonLabel: string | undefined;
    primaryButtonLabel: string | undefined;
  };
}

const FooterWrap = styled.div`
  background-color: #c3c3c3;
  color: #202123;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const FooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  p {
    margin: 0 9px 0 0;
    font-weight: 500;
  }
  input {
    width: 7%;
    height: 21px;
    background-color: #fffd92;
    outline: none;
    margin: 0 9px 0 0;
    border-color: #d7d6e3;
  }
  button {
    margin-left: 5px;
  }
`;

const Footer = ({ handleRegister, handleClose, footerData }: FooterProps) => (
  <FooterWrap>
    <DefaultButton
      label={footerData?.closeButtonLabel}
      handleClick={handleClose}
    />
    <FooterRight>
    </FooterRight>
  </FooterWrap>
);

Footer.defaultProps = {
  handleRegister: false,
  handleClose: false,
  footerData: {},
};
export default Footer;
