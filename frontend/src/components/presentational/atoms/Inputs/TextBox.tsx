import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

type TextBoxProps = {
  size?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  autoFocus?: boolean;
  width?: string;
};

const Input = styled.input`
  border: 1px solid ${constants.itemTitleBgColor2};
  font-size: ${constants.breadCrumbsFontSize};
  width: ${(props) => props.width};
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
  width,
}) => (
  <Input
    type="text"
    size={size}
    onChange={onChange}
    value={value}
    width={width}
    autoFocus={autoFocus}
  />
);

TextBox.defaultProps = {
  autoFocus: false,
  size: 1,
  width: '',
};
