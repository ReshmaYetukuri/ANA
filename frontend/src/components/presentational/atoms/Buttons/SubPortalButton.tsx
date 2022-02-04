import {FC} from "react"
import styled from "@emotion/styled"
import constants from '../../../../constants/styleConstants.module.scss';

type ButtonStyledProps= {
    width?:string;
}
const Button=styled.button<ButtonStyledProps>`
  color:${constants.gradientColor1};
  padding: 8px;
  background: ${constants.commonButtonGradient};
  border-width:1px;
  text-align: left;
  font-weight: bolder;
  min-width: 100px;
  width :${props => props.width};
`

const Span=styled.span`
  color: ${constants.errorColor};
  font-size: 1.5rem;
  font-weight: 900;
  padding-top:6px;
  float: left;
  margin-right:8px;
` 
   
type SubPortalButtonProps ={
    name:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    width?:string; 
    isRequired?:boolean;
}
  
export const SubPortalButton:FC<SubPortalButtonProps> =({name, onClick, width, isRequired})=>(
    <div>
        {isRequired && <Span> * </Span>} 
        <Button width={width}  onClick={onClick}>{name}</Button>
    </div>
)

SubPortalButton.defaultProps={
    width:'100px',
    isRequired:false,
}



