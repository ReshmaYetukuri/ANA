
import styled from "@emotion/styled"

const Label = styled.label({
   
    fontSize :'2 rem',
    fontWeight :'bold',
    fontFamily :"'NotoSans-Light'"
    })


type checkBoxProps ={
    text : string
}

//resolve eslint issue
export const CheckBox = (props:checkBoxProps) => {
    return (
        <div>

            <input type = 'checkbox'  value ={props.text}/>
            <Label>{props.text}</ Label>
        </div>
 
    )
}