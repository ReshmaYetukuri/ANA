import React, { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const Button = styled.button<ButtonProps>`
  border: solid 1px;
  background: ${constants.commonButtonGradient};
  padding: 0 5px;
  min-width: 50px;
  width: ${(props) => props.width};
`;
const Header = styled.div`
  float: left;
  margin-bottom: 9px;
  width: 100%;
`;
const Footer = styled.div`
  color: ${constants.basicColor};
  width: 100%;
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
  width: '90px',
};

export default MainMenuButton;
