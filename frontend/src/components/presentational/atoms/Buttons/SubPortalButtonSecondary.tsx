import { FC } from 'react';
import styled from '@emotion/styled';

const Button = styled.button`
  color:#00a09b;
  background:white;
  width:15rem;
  height:1.5rem;
  fontWeight:bold;
  fontFamily:NotoSans-Light;
  border:1px solid black
`;

export interface SubPortalButtonSecondaryProps {
    name:string;
    onclick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const SubPortalButtonSecondary:FC<SubPortalButtonSecondaryProps> = ({name,onclick,}) => <Button  type="button" className={`button-${name}`} onClick={onclick}>{name}</Button>

export default SubPortalButtonSecondary
  
        
  
     
  