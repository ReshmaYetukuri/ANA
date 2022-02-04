import styled from '@emotion/styled';
import { FareComparisonTitle } from 'assets/svgr-components';
import { FC } from 'react';
import { Label } from './Label';
import constants from '../../../../constants/styleConstants.module.scss';

const Div = styled.div`
  display : flex;
  flex-direction : row;
  font-weight: 700;
  font-size: x-large;
  svg {
    height:2rem;
  }
`

interface SubHeadingLargeProps {
  label:string;
}

export const SubHeadingLarge:FC<SubHeadingLargeProps> = ({label}) => 
   (
     <Div>
       <FareComparisonTitle/>
       <Label label={label} fontColor={constants.itemTitleBgColor1}/>
     </Div>
    )

  
