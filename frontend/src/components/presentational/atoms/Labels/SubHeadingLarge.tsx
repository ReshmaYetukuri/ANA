import styled from '@emotion/styled';
// import { Arrow } from 'assets/svgr-components';
import { FC } from 'react';
import { Label } from './Label';
import constants from '../../../../constants/styleConstants.module.scss';

const Div = styled.div`
  display : flex;
  flex-direction : row;
  font-weight: 700;
  font-size:large;
  svg {
    height:1rem;
  }
`

interface SubHeadingLargeProps {
  label:string;
}

export const SubHeadingLarge:FC<SubHeadingLargeProps> = ({label}) => 
   (
     <Div>
       
       <Label label={label} fontColor={constants.itemTitleBgColor1}/>
     </Div>
    )

  
