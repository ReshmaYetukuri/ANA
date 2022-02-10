import styled from '@emotion/styled';
import { Dropdown } from 'react-bootstrap';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownItem from 'react-bootstrap/esm/DropdownItem';
import constants from '../../../../constants/styleConstants.module.scss';

type DropdownSelectProps = {
  values: Data[];
  onChange: (e: Data) => void;
  initialSelectedValue: Data;
  width: number;
  isShowError?: boolean;
};

type ToggleProps = {
  width: number;
  isShowError?:boolean;
};

type OptionProps = {
  isShowError?:boolean;
};

type Data = {
  id: string;
  name: string;
  value: string;
};

const DropdownContainer = styled(Dropdown)`
  max-width: 25rem;
  width: ${(props: ToggleProps) => props.width}rem;
  .dropdown-toggle:focus {
    border-color: ${constants.itemTitleBgColor3};
  }
  &.show {
    > .dropdown-toggle:focus {
      border-color: ${constants.itemTitleBgColor3};
    }
  }
`;
const Toggle = styled(DropdownToggle)`
  color: ${constants.standardTextColor};
  padding: 0;
  border-color: none;
  border: 2px solid ${constants.itemTitleBgColor3};
  font-weight: bold;
  height: 30px;

  &.dropdown-toggle {
    &::after {
      content: unset;
      display: none;
    }
    &:hover,
    &:active,
    &:focus {
      border: 2px solid ${constants.itemTitleBgColor3};
    }
  }

  .show > .dropdown-toggle {
    border: 2px solid ${constants.itemTitleBgColor3};
  }
  .dropdown-icon {
    height: 28px;
    padding: 2px 3px 0 5px;
    background: ${(props: ToggleProps) => !props.isShowError ? `${constants.commonButtonGradient}`: `${constants.errorMessageBgColor}`};
    &:active,
    focus {
      background: ${constants.inputFieldFocusBgColor} !important;
    }
    border: 2px solid ${constants.itemTitleBgColor3};
    &:after {
      display: inline-block;
      vertical-align: 0.258em;
      content: '';
      border-top: 0.48em solid;
      border-right: 0.48em solid transparent;
      border-bottom: 0;
      border-left: 0.48em solid transparent;
    }
  }
  &:hover {
    background-color: ${constants.inputFieldFocusBgColor};
    color: ${constants.standardTextColor};
  }
  &.dropdown-toggle.btn:focus {
    background-color: ${constants.inputFieldFocusBgColor};
    box-shadow: none;
    & > input {
      background-color: ${constants.inputFieldFocusBgColor};
    }
    & > .dropdown-icon {
      background: ${constants.inputFieldFocusBgColor};
    }
  }
  &.dropdown-toggle.btn:active,
  &.dropdown-toggle.btn:focus-within {
    background-color: ${constants.inputFieldFocusBgColor};
  }
  input {
    border: none;
    width: 92%;
    padding: 0 5px;
    height: 100%;
    color: ${(props: OptionProps) => !props.isShowError ? `${constants.standardTextColor}`: `${constants.errorMessageFontColor}`};
    background-color: ${(props: ToggleProps) => !props.isShowError ? `${constants.basicBgColorInputField}`: `${constants.errorMessageBgColor}`};
  }
  input:focus-visible {
    outline: none;
  }
  input:focus,
  active {
    background-color: ${constants.inputFieldFocusBgColor};
    .dropdown-toggle.btn {
      background-color: ${constants.inputFieldFocusBgColor};
    }
    ~ .dropdown-icon {
      background: ${constants.inputFieldFocusBgColor};
    }
  }

  &:hover {
    background-color: ${constants.inputFieldFocusBgColor};
  }
  &.dropdown-toggle.btn {
    background-color: ${constants.basicBgColorInputField};
    color: ${constants.standardTextColor};
    border-radius: 0px;
    box-shadow: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0;
    width: 100%;
  }
`;
const Menu = styled(DropdownMenu)`
  background-color: ${constants.inputFieldFocusBgColor};
  width: 100%;
  min-width: 0;
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
  color: ${(props: OptionProps) => !props.isShowError ? `${constants.standardTextColor}`: `${constants.errorMessageFontColor}`};
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

const DropdownSelect: React.FunctionComponent<DropdownSelectProps> = ({
  values,
  onChange,
  initialSelectedValue,
  width,
  isShowError,
}) => {
  const handleClick = (data: Data) => {
    onChange(data);
  };

  const checkIfSubStingMatch = (subString: string) => {
    const match = values.find((element) => {
      let isStringIncluded = false;
      if (element.name.toLowerCase().startsWith(subString.toLowerCase())) {
        isStringIncluded = true;
      } else {
        isStringIncluded = false;
      }

      return isStringIncluded;
    });

    return match;
  };

  const handleChange = (e: { target: { value: string } }) => {
    const match = checkIfSubStingMatch(e.target.value);
    if (match !== undefined) {
      onChange({ ...initialSelectedValue, value: e.target.value });
    }
  };

  const isSelectedItem = (subString: string) => {
    if (initialSelectedValue.value === '') {
      return false;
    }
    const match =
      subString
        .toLowerCase()
        .startsWith(initialSelectedValue.value.toLowerCase()) && true;

    return match;
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Space') {
      e.preventDefault();
      const spaceAddedString = `${initialSelectedValue.value} `;
      const match = checkIfSubStingMatch(spaceAddedString);
      if (match !== undefined) {
        onChange({ ...initialSelectedValue, value: spaceAddedString });
      }
    }
  };

  const handleFocusOut = () => {
    let initialValue = values.find(
      (valueItem) => valueItem.id === initialSelectedValue.id
    );
    initialValue =
      initialValue === undefined
        ? (initialValue = { id: '', name: '', value: '' })
        : initialValue;
    onChange(initialValue);
  };

  return (
    <DropdownContainer className="dropdown" width={width} >
      <Toggle variant="" width={width} isShowError={isShowError}>
        <input
          type="text"
          value={initialSelectedValue.value}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          onBlur={handleFocusOut}
        />
        <span className="dropdown-icon" />
      </Toggle>

      <Menu width={width} isShowError={isShowError}>
        <DefaultOption />
        {values.map((data) => (
          <Options isShowError={isShowError}
            className={` ${isSelectedItem(data.value) ? 'selected-item' : ''}`}
            onClick={() => handleClick(data)}
            key={data.id}
          >
            {data.name}
          </Options>
        ))}
      </Menu>
    </DropdownContainer>
  );
};

DropdownSelect.defaultProps = {
  isShowError: false,
};

export default DropdownSelect;
