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
};

const Button = styled.button<ButtonProps>`
  font-size: ${constants.standardSubTextsize};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 0rem 1rem;
  color: ${constants.contentColor};
  background-image: ${constants.primaryButtonGradient};
  border: 1px solid ${constants.itemTitleBgColor2}; 
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