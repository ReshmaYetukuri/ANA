import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export type LabelProps = {
  label:string,
  labelFor?:string,
  fontColor?:string,
  onClick?: React.MouseEventHandler<HTMLLabelElement>
}

type LabelStyledProps = {
  fontColor?: string,
}

const LabelStyled = styled.label<LabelStyledProps>`
  color: ${props => props.fontColor ? props.fontColor : `${constants.standardTextColor}`};
  text-align: center;
  margin:0 10px 0 5px;
`

export const Label:FC<LabelProps> = ({
  label,
  labelFor,
  fontColor,
  onClick
}) => (
  <LabelStyled htmlFor={labelFor} onClick={onClick} fontColor={fontColor}>{label}</LabelStyled>
)