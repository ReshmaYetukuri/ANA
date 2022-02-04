import React, { FC } from "react";
import styled from "@emotion/styled";
import constants from '../../../../constants/styleConstants.module.scss';

type TextAreaProps={
width: string;
onChange :React.ChangeEventHandler<HTMLTextAreaElement>;
value:string;
};

const TextAreaDiv = styled.textarea<TextAreaProps>`
  width :${props=>props.width};
  min-width:100px;
  resize: none;
  &:focus {
  background-color: rgb(255, 254, 146);
  outline: 0;
  }`;

  export const TextArea : FC<TextAreaProps> = ( {width, onChange , value})=>
      <TextAreaDiv  width={width} onChange={onChange} value={value} ></TextAreaDiv>

  