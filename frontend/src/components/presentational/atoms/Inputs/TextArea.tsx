import React, { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss';

type TextAreaProps = {
  width?: string;
  height?: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  value: string;
};

const TextAreaDiv = styled.textarea<TextAreaProps>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  resize: none;
  font-size: ${constants.breadCrumbsFontSize};
  &:focus {
    background-color: ${constants.inputFieldFocusBgColor};
    outline: 0;
  }
`;

export const TextArea: FC<TextAreaProps> = ({
  width,
  height,
  value,
  onChange,
}) => (
  <TextAreaDiv
    width={width}
    height={height}
    onChange={onChange}
    value={value}
  />
);

TextArea.defaultProps = {
  width: '',
  height: '',
};
