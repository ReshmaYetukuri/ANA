import { FC } from "react";
import styled from "@emotion/styled";
import styles from '../../../../constants/constants.module.scss'

type TextAreaProps={
  width?:string;
}
const Textarea = styled.textarea<TextAreaProps>`
  width :${props=>props.width};
  min-width:100px;
  resize: none;
  &:focus {
  background-color: rgb(253,208,0);//amberSubPortalButtonBgColor--- need to be added
  outline: 0;
  }
`;

export const TextArea : FC<TextAreaProps> =( {width})=>{
  return <Textarea width={width}></Textarea>;
};

TextArea.defaultProps={
  width:'100px'
}