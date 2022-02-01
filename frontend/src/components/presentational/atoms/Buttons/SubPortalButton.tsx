import React,{ReactElement} from "react"
import styled from "@emotion/styled"


const Button=styled.button({
 color:'#306767',
  width:'14.5rem',
  paddingTop:'.5rem',
  paddingBottom:'1.9rem',
  background:'linear-gradient(rgb(203, 225, 236) 10%,#fff 40%, rgb(203, 225, 236))',
  borderWidth:'.01px',
  height: '1.3rem',
  paddingLeft:'5px',
  textAlign: 'left',
  marginTop:'.3rem',
  fontFamily: "'NotoSans-Light'",
  fontSize: '1rem',
  fontWeight:'bolder'
  
  
})

   const Span=styled.span({
    color:'red',
    fontSize:'1.5rem',
    fontWeight:'900',
    marginLeft:'1rem'
   }) 

   
type subPortalButtonProps ={
    name:ReactElement;
    
}
  
// filename,foldername should change to pascal case
// Css file should remove
// * enable/disable - props
// Documentation
export const SubPortalButton =(props:subPortalButtonProps)=>{
    return(
    <div>
         <Span> * </Span> <Button>  {props.name}</Button>
    </div>
)}



