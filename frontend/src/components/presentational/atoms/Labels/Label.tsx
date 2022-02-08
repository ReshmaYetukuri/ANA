import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export type LabelProps = {
  label: string;
  labelFor?: string;
  fontColor?: string;
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
};

type LabelStyledProps = {
  fontColor?: string;
};

const LabelStyled = styled.label<LabelStyledProps>`
  color: ${(props) =>
    props.fontColor ? props.fontColor : `${constants.standardTextColor}`};
  font-size: ${constants.breadCrumbsFontSize};
`;

export const Label: FC<LabelProps> = ({
  label,
  labelFor,
  fontColor,
  onClick,
}) => (
  <LabelStyled htmlFor={labelFor} onClick={onClick} fontColor={fontColor}>
    {label}
  </LabelStyled>
);
