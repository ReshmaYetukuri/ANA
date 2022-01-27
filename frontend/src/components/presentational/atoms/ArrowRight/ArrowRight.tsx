import styled from '@emotion/styled';

export type ArrowProps = {
  color?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
};

const CommonArrowStyles = styled.div`
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  margin-top: 7px;
`;

const ArrowRightStyled = styled(CommonArrowStyles)<ArrowProps>`
  border-left: 12px solid ${(props) => (props.color ? props.color : 'black')};
  margin-left: 10px;
`;

// const Border = styled.div`
//   border: 2px solid #c4c2c7;
//   background: #dedde0;
// `;

export const ArrowRight = ({ onClick, color }: ArrowProps) => (
  // <Border>
  <ArrowRightStyled color={color} onClick={onClick} />
  // </Border>
);
