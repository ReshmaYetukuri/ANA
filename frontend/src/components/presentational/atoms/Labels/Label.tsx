import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export type LabelProps = {
  label: string;
  // eslint-disable-next-line react/require-default-props
  labelFor?: string;
  // eslint-disable-next-line react/require-default-props
  fontColor?: string;
  // eslint-disable-next-line react/require-default-props
  fontSize?: string;
  // eslint-disable-next-line react/require-default-props
  fontWeight?: string;
  // eslint-disable-next-line react/require-default-props
  onClick?: React.MouseEventHandler<HTMLLabelElement>;
};

type LabelStyledProps = {
  fontColor?: string;
  fontSize?: string;
  fontWeight?: string;
};

const LabelStyled = styled.label<LabelStyledProps>`
  color: ${(props) =>
    props.fontColor ? props.fontColor : `${constants.standardTextColor}`};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : `${constants.breadCrumbsFontSize}`};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : `300`)};
`;

export const Label: FC<LabelProps> = ({
  label,
  labelFor,
  fontColor,
  fontSize,
  fontWeight,
  onClick,
}) => (
  <LabelStyled
    htmlFor={labelFor}
    fontSize={fontSize}
    fontWeight={fontWeight}
    onClick={onClick}
    fontColor={fontColor}
  >
    {label}
  </LabelStyled>
);
