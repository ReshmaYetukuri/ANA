import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss'

export interface SubPortalButtonSecondaryProps {
    label:string;
    width?: string;
    height?: string;
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = {
  width?: string;
  height?: string;
};

const Button = styled.button<ButtonProps>`
  color:#00a09b;
  background:${constants.contentColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border:1px solid ${constants.itemTitleBgColor1}
  padding:0px;
`;


const SubPortalButtonSecondary:FC<SubPortalButtonSecondaryProps> = ({label,width,height,onclick,}) => <Button  width={width}
height={height}  type="button" onClick={onclick}>{label}</Button>

export default SubPortalButtonSecondary
  
        
  
     
  