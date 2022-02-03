import React, { FC } from 'react';
import styled from '@emotion/styled';

const Button = styled.button<ButtonProps>`
  border: solid 1px;
  background: linear-gradient(
    rgb(203, 225, 236) 10%,
    #fff 40%,
    rgb(203, 225, 236)
  );
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
  color: cornflowerblue;
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
  width: '50px',
};

export default MainMenuButton;
