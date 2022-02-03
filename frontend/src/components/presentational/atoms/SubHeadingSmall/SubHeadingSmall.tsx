import styled from '@emotion/styled';
import { FC } from 'react';
import { Label } from '../Labels/Label';

const Div = styled.div`
  display : flex;
  flex-direction : row;
  font-weight: 700;
`

interface SubHeadingSmallProps {
  label:string;
  fontColor?:string;
}

export const SubHeadingSmall:FC<SubHeadingSmallProps> = ({label,fontColor}) => 
   (
     <Div>
       <Label label={label} fontColor={fontColor}/>
     </Div>
    )

SubHeadingSmall.defaultProps ={
  fontColor:'black'
}
  
