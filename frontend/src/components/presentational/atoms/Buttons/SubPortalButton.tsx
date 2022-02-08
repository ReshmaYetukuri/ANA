import {FC} from "react"
import styled from "@emotion/styled"
import constants from '../../../../constants/styleConstants.module.scss';

type ButtonStyledProps= {
    width?:string;
}
const Button=styled.button<ButtonStyledProps>`
    color:${constants.itemTitleBgColor1};
    padding: 3px 8px;
    background: ${constants.commonButtonGradient};
    border-width:1px;
    text-align: left;
    width :${props => props.width};
    font-size: ${constants.standardSubTextsize};
`
const Div=styled.div`
    display: flex;
    align-items: center;
    font-family: ${constants.fontFamilyBold};
`

const Span=styled.span`
    color: ${constants.errorColor};
    font-size: 1.5rem;
    margin-right:8px;
    line-height: 1;
` 
   
type SubPortalButtonProps ={
    name:string;
    onClick: React.MouseEventHandler<HTMLButtonElement>;
    width?:string; 
    isRequired?:boolean;
}
  
export const SubPortalButton:FC<SubPortalButtonProps> =({name, onClick, width, isRequired})=>(
    <Div>
        {isRequired && <Span> * </Span>} 
        <Button width={width} onClick={onClick}>{name}</Button>
    </Div>
)

SubPortalButton.defaultProps={
    width:'',
    isRequired:false,
}



