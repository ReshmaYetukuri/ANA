import { useState } from 'react';
import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';

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
  background-color: yellow;
  color: black;
  font-weight: bold;
  width: 12em;
  height: 30px;
  &:hover {
    background-color: yellow;
    color: black;
  }
  &.dropdown-toggle.btn:focus {
    background-color: yellow;
    box-shadow: none;
  }

  &:hover {
    background-color: #aeb5bb;
  }
  &.dropdown-toggle.btn {
    background-color: white;
    color: black;
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.375rem 0.5rem;
  }
`;
const Menu = styled(DropdownMenu)`
  background-color: yellow;
  width: 12rem;
  border-radius: 0px;
  border: 1px solid black;
`;
const DefaultOption = styled(DropdownItem)`
  height: 30px;
  &:hover {
    background-color: #aeb5bb;
  }
`;
const Options = styled(DropdownItem)`
  font-weight: bold;
  padding: 5px;
  &:hover {
    background-color: #aeb5bb;
  }
  &.dropdown-item:active {
    color: black;
  }
  &.selected-item {
    background-color: #aeb5bb;
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
