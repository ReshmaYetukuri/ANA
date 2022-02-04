import { FC } from 'react';
import styled from '@emotion/styled';
import constants from '../../../../constants/styleConstants.module.scss'

export interface SubPortalButtonSecondaryProps {
    name:string;
    width?: string;
    height?: string;
    // isFullSize: boolean;
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

type ButtonProps = {
  width?: string;
  height?: string;
  // isFullSize: boolean;
};

const Button = styled.button<ButtonProps>`
  color:#00a09b;
  background:${constants.contentColor};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border:1px solid ${constants.itemTitleBgColor1}
`;


const SubPortalButtonSecondary:FC<SubPortalButtonSecondaryProps> = ({name,width,height,onclick,}) => <Button  width={width}
height={height}  type="button" className={`button-${name}`} onClick={onclick}>{name}</Button>

export default SubPortalButtonSecondary
  
        
  
     
  