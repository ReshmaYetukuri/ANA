import styled from '@emotion/styled';

import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import constants from "../../../../constants/styleConstants.module.scss";

const Item = styled(DropdownItem)`
  &.dropdown-item {
    font-weight: bold;
    border: 0.7px solid ${constants.popupWindowStanadardBgColor};
    border-top: 0;
    padding: 0.2rem 0.25rem;
    display:flex;
    align-items:center;
    font-size: 0.9rem;
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
