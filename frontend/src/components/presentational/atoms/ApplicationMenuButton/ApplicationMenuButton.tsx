import styled from '@emotion/styled';
import React from 'react';

import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import constants from '../../../../constants/styleConstants.module.scss';

const Toggle = styled(DropdownToggle)`
  background: ${constants.basicBgColor};
  font-weight: bold;
  font-size: ${constants.breadCrumbsFontSize};
  padding: 0.2rem 0.25rem;

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

  &.btn:hover {
    background-color: ${constants.popupWindowStanadardBgColor};
  }
  &.dropdown-toggle.btn:focus {
    background-color: ${constants.popupWindowStanadardBgColor};
    box-shadow: none;
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
