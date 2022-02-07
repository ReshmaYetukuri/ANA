import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss'

export interface RegisterButtonProps {
  label: string;
  width?: string;
  height?: string;
  onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

type ButtonProps = {
  width?: string;
  height?: string;
  // isFullSize: boolean;
};

const Button = styled.button<ButtonProps>`
  font-size: 0.9rem;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0rem 2.5rem 0rem 2.5rem;
  margin: 0.3rem;
  color: ${constants.contentColor};
  background-image: linear-gradient(
    to bottom,
    #5295ff,
    #458dff,
    #3784ff,
    #287cff,
    #1673ff
  );
  border: 1px solid #8a8686; 
`;

const PrimaryButton: FC<RegisterButtonProps> = ({
  label,
  width,
  height,
  onclick,
}) => (
  <Button type="button" width={width} height={height} onClick={onclick}>
    {label}
  </Button>
);
export default PrimaryButton