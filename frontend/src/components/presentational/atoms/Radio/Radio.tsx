import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

const CheckBoxStyled=styled.div`
  .radio{
    appearance: none;
    display: inline-block;
    width: 13px;
    height: 13px;
    padding: 1px; 
    background-clip: content-box;
    border: .5px solid ${constants.itemTitleBgColor2};
    background-color: ${constants.basicBgColorInputField};
    border-radius: 50%;
}

  .radio:checked{
    background-color: ${constants.standardTextColor};
}
`

interface RadioProps {
  groupName: string;
  value: string;
  isSelected?: boolean;
  radioButtonChange?: React.ChangeEventHandler<HTMLInputElement>;
  radioFor?: string;
}

export const Radio: FC<RadioProps> = ({
  groupName,
  radioButtonChange,
  value,
  isSelected,
  radioFor,
}) => (
  <CheckBoxStyled>
  <input
    type="radio"
    name={groupName}
    value={value}
    defaultChecked={isSelected}
    onChange={radioButtonChange}
    id={radioFor}
    className='radio'
  />
  </CheckBoxStyled>
);

Radio.defaultProps = {
  isSelected: false,
  radioButtonChange: () => {
    // on change default function
  },
  radioFor:''
};
