import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

type TextBoxProps = {
  size?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  autoFocus?: boolean;
};

const Input = styled.input`
  border-width: 1px;
  &:focus {
    background-color: ${constants.inputFieldFocusBgColor};
    border-width: 1px;
  }
  ,
  &:focus-visible {
    outline: none;
  }
`;
export const TextBox: FC<TextBoxProps> = ({
  size,
  onChange,
  value,
  autoFocus,
}) => (
  <Input
    type="text"
    size={size}
    onChange={onChange}
    value={value}
    autoFocus={autoFocus}
  />
);

TextBox.defaultProps = {
  autoFocus: false,
  size: 9,
};
