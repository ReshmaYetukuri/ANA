import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import { ApplicationMenuButton } from 'components/presentational/atoms/ApplicationMenuButton/ApplicationMenuButton';
import { ApplicationMenuItem } from 'components/presentational/atoms/ApplicationMenuItems/ApplicationMenuItem';
import { Menu } from './Menu';
import constants from "../../../../constants/styleConstants.module.scss";

const MenuListDiv = styled(DropdownMenu)`
  &.dropdown-menu {
    padding: 0;
    color: black;
    background-color: ${constants.basicBgColor};
    font-family: 'NotoSans-Light';
    font-weight: bold;
    font-size: smaller;
    min-width: 6rem;
    border-top: 1px solid ${constants.popupWindowStanadardBgColor}3;
  }
`;

type ApplicationMenuProps = {
  MenuList: Menu[];
  label: string;
};

const ApplicationMenu: React.FC<ApplicationMenuProps> = ({
  MenuList,
  label,
}) => {
  const [selectedMenu, setSelectedMenu] = useState('');

  const handleIt = (key: string) => {
    setSelectedMenu(key);
  };

  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);

  return (
    <Dropdown>
      <ApplicationMenuButton label={label} />
      <MenuListDiv>
        {MenuList.map((menu) => (
          <ApplicationMenuItem
            label={menu.name}
            key={menu.key}
            eventKey={menu.key}
            onClick={handleIt}
          />
        ))}
      </MenuListDiv>
    </Dropdown>
  );
};

export default ApplicationMenu;
