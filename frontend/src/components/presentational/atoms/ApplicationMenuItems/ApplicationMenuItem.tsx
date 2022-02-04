import styled from '@emotion/styled';

import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import constants from "../../../../constants/styleConstants.module.scss";

const Item = styled(DropdownItem)`
  &.dropdown-item {
    font-weight: bold;
    height: 25px;
    border-right: 0.7px solid ${constants.popupWindowStanadardBgColor};
    border-left: 0.7px solid ${constants.popupWindowStanadardBgColor};
    border-bottom: 0.7px solid ${constants.popupWindowStanadardBgColor};
    padding: 0.25rem 0.25rem;
    display:flex;
    align-items:center;
  }
  &.dropdown-item:active {
    color: ${constants.dimmedTextColor}; 
    background-color: ${constants.popupWindowStanadardBgColor};
  }
`;

type MenuItemProps = {
  label: string;
  onClick: (key: string) => void;
  eventKey: string;
};

export const ApplicationMenuItem: React.FC<MenuItemProps> = ({label,eventKey,onClick}) => (
  <Item onClick={() => onClick(eventKey)}>{label}</Item>
);
