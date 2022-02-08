import React from 'react';
import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';

import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { ApplicationMenuButton } from 'components/presentational/atoms/ApplicationMenuButton/ApplicationMenuButton';
import { ApplicationMenuItem } from 'components/presentational/atoms/ApplicationMenuItems/ApplicationMenuItem';
import constants from "../../../../constants/styleConstants.module.scss";

const MenuListDiv = styled(DropdownMenu)`
  &.dropdown-menu {
    padding: 0;
    color: black;
    background-color: ${constants.basicBgColor};
    min-width: 6rem;
    border-top: 1px solid ${constants.popupWindowStanadardBgColor}3;
  }
`;

interface Menu {
  key: string,
  name:string
}

type ApplicationMenuProps = {
  menuList: Menu[];
  label: string;
  onMenuItemClick?: (e: string) => void
};

const ApplicationMenu: React.FC<ApplicationMenuProps> = ({
  menuList,
  label,
  onMenuItemClick = () => {
    //
  }
}) => (
    <Dropdown>
      <ApplicationMenuButton label={label} />
      <MenuListDiv>
        {menuList.map((menu) => (
          <ApplicationMenuItem
            label={menu.name}
            key={menu.key}
            eventKey={menu.key}
            onClick={onMenuItemClick}
          />
        ))}
      </MenuListDiv>
    </Dropdown>
  );

export default ApplicationMenu;

ApplicationMenu.defaultProps = {
  onMenuItemClick: () => {
    //
  }
}
