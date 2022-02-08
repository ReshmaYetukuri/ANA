import { FC } from 'react';
import styled from '@emotion/styled';

const CheckBoxStyled=styled.div`
  .radio{
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: inline-block;
    width: 13px;
    height: 13px;
    padding: 1px; 
    background-clip: content-box;
    border: .5px solid gray;
    background-color: white;
    border-radius: 50%;
}

  .radio:checked{
    background-color: black;
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
