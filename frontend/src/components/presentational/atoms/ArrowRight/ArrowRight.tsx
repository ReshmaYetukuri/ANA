import styled from '@emotion/styled';
import { FC } from 'react';
import constants from '../../../../constants/styleConstants.module.scss';

export type ArrowProps = {
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CommonArrowStyles = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
`;

const ArrowRightStyled = styled(CommonArrowStyles)<ArrowProps>`
  border-left: 12px solid
    ${(props) => (props.color ? props.color : constants.$standardTextColor)};
  margin: 0 10px;
`;

export const ArrowRight: FC<ArrowProps> = ({ onClick, color }) => (
  <ArrowRightStyled color={color} onClick={onClick} />
);
