import {FC} from "react"
import styled from "@emotion/styled"

type ButtonStyledProps= {
    width?:string;
}
const Button=styled.button<ButtonStyledProps>`
  color:#306767;
  padding: 8px;
  background: linear-gradient(rgb(203, 225, 236) 10%,#fff 40%, rgb(203, 225, 236));
  border-width:1px;
  text-align: left;
  font-weight: bolder;
  min-width: 100px;
  width :${props => props.width};
`

const Span=styled.span`
  color: red;
  font-size: 1.5rem;
  font-weight: 900;
  margin-left: 1rem;
  padding-top:8px;
  float: left;
  margin-right:10px;
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



