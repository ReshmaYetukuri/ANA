import React, { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const Button = styled.button<ButtonProps>`
  border: 1px solid ${constants.itemTitleBgColor2};
  background: ${constants.commonButtonGradient};
  padding: 0 5px;
  width: ${(props) => props.width};
  font-size: ${constants.standardSubTextsize};
  font-weight: bold;
`;
const Header = styled.div`
  margin-bottom: 9px;
`;
const Footer = styled.div`
  color: ${constants.basicColor};
`;

type ButtonProps = {
  width?: string;
};

type MainMenuButtonProps = {
  header: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  footer: string;
  width?: string;
};

const MainMenuButton: FC<MainMenuButtonProps> = ({
  footer,
  header,
  onClick,
  width,
}) => (
  <Button width={width} onClick={onClick}>
    <Header>{header}</Header>
    <Footer>{footer}</Footer>
  </Button>
);

MainMenuButton.defaultProps = {
  width: '',
};

export default MainMenuButton;
