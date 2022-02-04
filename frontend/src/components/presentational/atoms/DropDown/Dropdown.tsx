import { useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import constants from '../../../../constants/styleConstants.module.scss';

type DropdownSelectProps = {
  values: Data[];
  onChange: (e: Data) => void;
};

type Data = {
  id: string;
  name: string;
  value: string;
};

const Toggle = styled(DropdownToggle)`
  background-color: ${constants.inputFieldFocusBgColor};
  color: ${constants.standardTextColor};
  font-weight: bold;
  width: 12em;
  height: 30px;
  &:hover {
    background-color: ${constants.inputFieldFocusBgColor};
    color: ${constants.standardTextColor};
  }
  &.dropdown-toggle.btn:focus {
    background-color: ${constants.inputFieldFocusBgColor};
    box-shadow: none;
  }

  &:hover {
    background-color: ${constants.itemTitleBgColor2};
  }
  &.dropdown-toggle.btn {
    background-color: ${constants.basicBgColorInputField};
    color: ${constants.standardTextColor};
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 0.5rem;
  }
`;
const Menu = styled(DropdownMenu)`
  background-color: ${constants.inputFieldFocusBgColor};
  width: 12rem;
  border-radius: 0px;
  border: 1px solid ${constants.standardTextColor};
`;
const DefaultOption = styled(DropdownItem)`
  height: 30px;
  &:hover {
    background-color: ${constants.itemTitleBgColor2};
  }
`;
const Options = styled(DropdownItem)`
  font-weight: bold;
  padding: 5px;
  &:hover {
    background-color: ${constants.itemTitleBgColor2};
  }
  &.dropdown-item:active {
    color: ${constants.standardTextColor};
  }
  &.selected-item {
    background-color: ${constants.itemTitleBgColor2};
  }
`;

const DropDown: React.FunctionComponent<DropdownSelectProps> = ({
  values,
  onChange,
}) => {
  const [selectedValueObj, setSelectedValueObj] = useState<Data>(Object);
  const onClick = (data: Data) => {
    setSelectedValueObj(data);
    onChange(data);
  };

  return (
    <Dropdown>
      <Toggle>
        <span>{selectedValueObj.name}</span>
      </Toggle>
      <Menu>
        <DefaultOption />
        {values.map((data) => (
          <Options
            className={
              data.value === selectedValueObj.value ? 'selected-item' : ''
            }
            onClick={() => onClick(data)}
            key={data.id}
          >
            {data.name}
          </Options>
        ))}
      </Menu>
    </Dropdown>
  );
};

export default DropDown;
