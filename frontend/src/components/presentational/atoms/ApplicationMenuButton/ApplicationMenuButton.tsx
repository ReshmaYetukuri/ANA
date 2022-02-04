import styled from '@emotion/styled';
import React from 'react';

import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import constants from '../../../../constants/styleConstants.module.scss';

const Toggle = styled(DropdownToggle)`
  background: ${constants.basicBgColor};
  height: 25px;
  font-family: 'NotoSans-Light';
  font-weight: bold;
  font-size: ${constants.breadCrumbsFontSize};

  &.btn {
    padding: 5px;
  }

  &:hover {
    background-color: ${constants.basicBgColor};
    color: black;
  }
  &.dropdown-toggle.btn:focus {
    background-color: ${constants.popupWindowStanadardBgColor};
    box-shadow: none;
  }

  &.btn-primary {
    border-color: ${constants.basicBgColor};
  }

  &.dropdown-toggle.btn {
    color: ${constants.standardTextColor};
    border-radius: 0px;
    display: flex;
    align-items: center;
    border-color: ${constants.popupWindowStanadardBgColor};
    background-color: ${constants.basicBgColor};
  }

  &.dropdown-toggle::after {
    border: 0;
  }
`;

type MenuButtonProps = {
  label: string;
};

export const ApplicationMenuButton: React.FC<MenuButtonProps> = ({ label }) => (
  <Toggle>{label}</Toggle>
);
