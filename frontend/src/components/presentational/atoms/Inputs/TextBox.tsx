import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

type TextBoxProps = {
  size?: number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  autoFocus?: boolean;
  width?: string;
  height?:string;
  maxLength?: number;
};

const Input = styled.input`
  border: 1px solid ${constants.itemTitleBgColor2};
  font-size: ${constants.breadCrumbsFontSize};
  margin:0 2px 0 2px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
  height,
  maxLength,
}) => (
  <Input
    type="text"
    size={size}
    onChange={onChange}
    value={value}
    width={width}
    height={height}
    autoFocus={autoFocus}
    maxLength={maxLength}
  />
);

TextBox.defaultProps = {
  autoFocus: false,
  size: 1,
  width: '',
  height:'',
  maxLength: 10000,
};
